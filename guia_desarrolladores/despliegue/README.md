# Despliegue del API
```bash
dotnet publish --project API/ -c Release --self-contained=false -r linux-x64 -o apiBuild/
```

# Despliegue de la aplicacion ReactJS
```bash
npm run build
```

# Configuracion del servidor Nginx

# Configuracion del API como servicio de Linux