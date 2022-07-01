using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Domain.Entities;
using Microsoft.IdentityModel.Tokens;


namespace API.Services
{
    public class TokenService
    {
        private Evaluador? User { get; set; }
        public SymmetricSecurityKey Key => new SymmetricSecurityKey(Encoding.UTF8.GetBytes("secret token key")); //Signing key

        private SigningCredentials Credentials => new SigningCredentials(Key, SecurityAlgorithms.HmacSha512); //Full credentials

        private SecurityTokenDescriptor GetTokenDescriptor(){//Third call, Token descriptor
            return new SecurityTokenDescriptor{
                Subject = new ClaimsIdentity(GetClaims()),//Fourth call, Gets the user claims
                Expires = DateTime.Now.AddDays(2),
                SigningCredentials = Credentials
            };
        }

        private IEnumerable<Claim> GetClaims(){//Returns user claims defined by business 
            IEnumerable<Claim> claims = new List<Claim>{
                new Claim(ClaimTypes.Name, User.UserName),
                new Claim(ClaimTypes.NameIdentifier, User.Id),
                new Claim(ClaimTypes.Email, User.Email)
            }; //Temporary user claims
            return claims;
        }

        private JwtSecurityTokenHandler TokenHandler { get; set; } = new JwtSecurityTokenHandler(); //Token Handler to serialize token
       
        private string GetToken(){
            SecurityToken token = TokenHandler.CreateToken(GetTokenDescriptor()); //Second call

            return TokenHandler.WriteToken(token); //Returns the Token serialized, signed, and filled
        }
        
        public string CreateToken(Evaluador user) //This is the method that should be calles to create new Tokens
        {
            User = user; // sets the local user as the value received
            
            return GetToken(); //First call
        }
    }
}