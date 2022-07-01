using Domain.Entities;
using Microsoft.AspNetCore.Identity;
using Persistence;

namespace API
{
    public class Seed
    {
        public static async Task AddUsers(DataContext context, UserManager<Evaluador> userManager){
            if (!userManager.Users.Any())
            {//Creates a list of User entities
                List<Evaluador> evaluadores = new List<Evaluador>{
                    new Evaluador{Cui = "1521457541123",Nombre = "Sofia",Apellido = "Garcia", Sexo = 'F',UserName = "sgarcia",Email = "sgarcia@ppi.com"},
                    new Evaluador{Cui = "1515112151515",Nombre = "Giovani",Apellido = "Meza",Sexo = 'M',UserName = "gmeza",Email="gmeza@ppi.com"}
                };
                //Adds each entity to database
                foreach (Evaluador evaluador in evaluadores)
                {
                    await userManager.CreateAsync(evaluador,"test"); //Temporary password wil be test for all users for testing purposes
                }
            }
        }
    }
}