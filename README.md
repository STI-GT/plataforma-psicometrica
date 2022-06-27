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
    - Redacción

# Arquitectura tecnologica
Esta plataforma se ha desarrollado con una arquitectura en capas, siendo las principales:
* Vista - ReactJS Single Page Application
* API - NetCore 6
* Base de datos - Oracle 21c

# Servidor de base de datos
Para la capa de base de datos, se utiliza un ambiente con Oracle RAC OneNode, utilizando Oracle 21g como proveedor de la aplicacion, Oracle 21c como instancia de base de datos, Oracle ASM para la administracion del almacenamiento, y Oracle DataGuard para el manejo de una base de datos tipo Standby Fisico.