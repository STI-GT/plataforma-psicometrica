using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Entities;

namespace API.DTOs
{
    public class EvaluadorDto
    {
        public Evaluador? Evaluador { get; set; }
        public string? Token { get; set; }
    }
}