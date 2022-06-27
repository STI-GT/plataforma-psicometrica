# Iniciando el servidor de desarrollo
El primera paso, es tener listo el servicio de Oracle, se utiliza una conexion de tipo "easy connect", hacia una base de datos tipo PDB, por el puerto estandar TCP:1521.

Para iniciar los servidores de desarrollo, se recomienda utilizar las terminales de VSCode, una por cada proyecto a correr.

# Backend
## Paquetes Nuget
| Proyecto | Paquete |
|:-------:|:----------|
| API | Microsoft.AspNetCore.Authentication.JwtBearer|
|   | Microsoft.EntityFrameworkCore|
|   | Microsoft.EntityFrameworkCore.Design|
|   | Microsoft.EntityFrameworkCore.Sqlite|
|   | Microsoft.IdentityModel.Tokens|
|   | Oracle.EntityFrameworkCore|
|   | Oracle.ManagedDataAccess.Core|
|   | System.IdentityModel.Tokens.Jwt|
|   | Mysql.Data|
|   | Mysql.EntityFrameworkCore|
| Domain | Microsoft.AspNetCore.Identity.EntityFrameworkCore|
| Persistence | Microsoft.AspNetCore.Identity.EntityFrameworkCore|
|   | Microsoft.EntityFrameworkCore| 
|   | Microsoft.EntityFrameworkCore.Design |
|   | Microsoft.EntityFrameworkCore.Design |
|   | Microsoft.EntityFrameworkCore.Sqlite |
|   | Oracle.EntityFrameworkCore |
|   | Oracle.ManagedDataAccess.Core |
|   | Mysql.Data|
|   | Mysql.EntityFrameworkCore|
### Para inciar el servicio de API, se deben correr comandos de ef tools dentro de la carpeta /backend/API/
```bash
dotnet run --project API/
http://localhost:7000/
https://localhost:7001/
```

# Frontend
## Paquetes npm y dependencias
npm install axios
### Para inciar la aplicacion creade en ReactJS con NodeJS development server
```bash
npm start
http://localhost:3000/
```

