# Sirviendo la aplicacion con una configuracion optimizada para la web
Para servir las peticiones hacia nuestra plataforma, vamos a resumir una arquitectura basada en un solo computador, haciendo albergue de los 3 servicios mencionados:
- Base de datos
- API
- Aplicacion ReactJS

## Configuracion del servidor
* Oracle Linux 7.5 ó superior
* Almacenamiento: 60GB o superior
* RAM: 8GB
### Servicios instalados
* Nginx proxy server(la ultima version disponible).
* NetCore Runtime Environment 6.0.5 ó superior.
* NodeJS 16.15.1 LTS(se recomienda usar la version LTS para ambientes fuera del desarrollo).