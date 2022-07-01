using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Services;
using Domain.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly ILogger<AccountController> _logger;
        private readonly UserManager<Evaluador> _userManager;
        private readonly TokenService _tService;
        private readonly SignInManager<Evaluador> _signInManager;

        public AccountController(ILogger<AccountController> logger, UserManager<Evaluador> userManager,SignInManager<Evaluador> signInManager,TokenService tService)
        {
            _signInManager = signInManager;
            _tService = tService;
            _userManager = userManager;
            _logger = logger;
        }

        [HttpPost("login")]
        public async Task<ActionResult<EvaluadorDto>> Login(LoginDto logDto){

            Evaluador User = await _userManager.FindByEmailAsync(logDto.Email);

            if (User == null) return NoContent(); //If user doesnt exist, return 401 code
            

            Microsoft.AspNetCore.Identity.SignInResult result = await _signInManager.CheckPasswordSignInAsync(User,logDto.Password,false);
            if (result.Succeeded)
            {
                return new EvaluadorDto{
                    Evaluador = User,
                    Token = _tService.CreateToken(User)
                };
            }
            return Unauthorized(); //If none of the above statements is reached, returns 401 by default
        }
    }
}