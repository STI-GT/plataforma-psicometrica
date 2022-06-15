# Plataforma Psicometrica Integral(PPI)
Aplicacion creada para administrar/sistematizar evaluaciones psicometricas para el area de orientacion vocacional y gestion de talento humano.
## Colaboradores
* Giovani Meza: 
    - Desarrollo Backend.
    - Desarrollo Frontend.
    - Diseño y administracion de la base de datos.
    - Instalacion y mantenimiento de servidores.
* Sofia Garcia: 
    - Diseño de logotipo e identidad con Photoshop y Adobe XD.
    - Autora de las pruebas psicometricas.
    - Encargada de revision y plan de QA.

# Arquitectura tecnologica
Esta plataforma se ha desarrollado con una arquitectura en capas, siendo las principales:
* Vista - ReactJS
* API - NetCore 6
* Base de datos - Oracle 21c

# Servidor de base de datos
Para la capa de base de datos, se utiliza un ambiente con Oracle RAC OneNode, utilizando Oracle 21g como proveedor de la aplicacion, Oracle 21c como instancia de base de datos, Oracle ASM para la administracion del almacenamiento, y Oracle DataGuard para el manejo de una base de datos tipo Standby Fisico.

# Iniciando el servidor de desarrollo
El primera paso, es tener listo el servicio de Oracle, se utiliza una conexion de tipo "easy connect", hacia una base de datos tipo PDB, por el puerto estandar TCP:1521.

Para iniciar los servidores de desarrollo, se recomienda utilizar las terminales de VSCode, una por cada proyecto a correr.

## Para inciar el servicio de API, se deben correr comandos de ef tools dentro de la carpeta /backend/API/
```bash
dotnet run --project API/
```
## Para inciar la aplicacion creade en ReactJS con NodeJS development server
```bash
npm start
```

# Sirviendo la aplicacion con una configuracion optimizada para la web
Para servir las peticiones hacia nuestra plataforma, vamos a resumir una arquitectura basada en un solo computador, haciendo albergue de los 3 servicios mencionados:
- Base de datos
- API
- Vista

## Configuracion del servidor
* Oracle Linux 7.5 ó superior
* Almacenamiento: 60GB o superior
* RAM: 8GB
### Servicios instalados
* Nginx proxy server(la ultima version disponible).
* NetCore Runtime Environment 6.0.5 ó superior.
* NodeJS 16.15.1 LTS(se recomienda usar la version LTS para ambientes fuera del desarrollo).
