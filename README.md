# Dashboard

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 19.0.5.

## Clonar el repositorio remoto

Ejecutar en la terminal:

```bash
# clonando por HTTPS
git clone https://github.com/P-1-P-3/Proyecto_Dashboard.git

cd 006_dashboard
```

## Instalación de dependencias

Se recomienda usar Node.js 18+ y npm 9+ (o Yarn).

```bash
# instalar dependencias con npm
npm install

# o con yarn
yarn install

# instalar Angular CLI global opcionalmente (mismo major que el proyecto)
npm install -g @angular/cli@19
```

## Ejecutar el proyecto (desarrollo)

```bash
# servir en modo desarrollo y abrir navegador
ng serve --open

# o si existe script en package.json
npm start
```

La app quedará disponible por defecto en `http://localhost:4200/`.

## Scripts útiles

```bash
# construir para producción
npm run build

# pruebas unitarias (Karma)
npm test

# pruebas end-to-end (si están configuradas)
npm run e2e
```

## Notas y solución de problemas rápida

- Si hay errores de dependencias, borrar node_modules y package-lock.json (o yarn.lock) y reinstalar:

    ```bash
    rm -rf node_modules package-lock.json
    npm install
    ```

- Para problemas con versiones de Node, use nvm para cambiar de versión.
- Si ng serve muestra que falta algún paquete, ejecutar `npm install` y verificar la versión de Angular CLI.
- Añadir variables de entorno y archivos de configuración en /src/environments según sea necesario.

## Recursos adicionales

- Documentación Angular: `https://angular.io/`
- Angular CLI: `https://angular.dev/cli`
