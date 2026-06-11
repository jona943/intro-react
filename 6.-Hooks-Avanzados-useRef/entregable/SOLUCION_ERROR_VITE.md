# Identificación del Problema: Error "vite: not found" en sistemas Linux

## Descripción del Problema
Al intentar ejecutar `npm run dev` o crear un proyecto con `npm create vite@latest`, el sistema devuelve el siguiente error:

```bash
> contador-juego@0.0.0 dev
> vite

sh: 1: vite: not found
npm error code 127
```

A pesar de que las dependencias están correctamente instaladas y el archivo `node_modules/.bin/vite` existe, el shell no puede localizar el comando.

## Causa Raíz
El error se debe a la presencia de un carácter **dos puntos (`:`)** en la ruta de directorios del proyecto. En sistemas Linux/Unix, el carácter `:` es el separador oficial para la variable de entorno `PATH`.

En este caso, la ruta:
`.../6.-Hooks-Avanzados:-useRef/entregable/contador-juego/`

Hace que `npm` intente inyectar las carpetas binarias al `PATH`, pero el sistema lo interpreta como dos rutas separadas e inválidas:
1. `/home/jonathan-medina/.../6.-Hooks-Avanzados`
2. `-useRef/entregable/contador-juego/node_modules/.bin`

Esto impide que el ejecutable de `vite` sea encontrado por el intérprete de comandos.

## Ejemplo en Consola

```text
jonathan-medina@EliteBook:~/.../6.-Hooks-Avanzados:-useRef/entregable$ npm create vite@latest contador-juego
...
◇  Starting dev server...

> contador-juego@0.0.0 dev
> vite

sh: 1: vite: not found
npm error code 127
```

## Solución
Para solucionar este problema, es necesario **eliminar los dos puntos (`:`) de cualquier nombre de carpeta** en la ruta del proyecto.

**Recomendado:**
1. Renombrar carpetas sin `:`.
2. Acceder nuevamente a la carpeta del proyecto.
3. Ejecutar `npm run dev`.

**Nota:** Se recomienda evitar el uso de caracteres reservados como `:`, `*`, `?`, `<`, `>`, `|` en nombres de archivos y carpetas en entornos de desarrollo para asegurar la compatibilidad entre herramienta.