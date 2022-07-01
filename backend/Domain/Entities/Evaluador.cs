using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace Domain.Entities
{
    public class Evaluador : IdentityUser
    {
        
        //public int Id { get; set; } //Se espera usar un correlativo de tipo integer para motivos de indexacion
        public string Cui { get; set; } = ""; //Se almacena el CUI como cadena de texto, para establecer un tamaño de cadena fijo
        public string Nombre { get; set; } = "";
        public string Apellido { get; set; } = "";
        public char Sexo { get; set; }
    }
}