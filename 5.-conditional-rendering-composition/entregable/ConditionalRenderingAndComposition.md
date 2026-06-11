## Instrucciones Paso a Paso

### 1. Configurar el Entorno de Desarrollo
- Asegúrate de tener Node.js instalado.
- Crea una nueva aplicación React con Vite:
  ```sh
  npm create vite@latest adivina-el-numero --template react
  ```
- Navega al directorio del proyecto e instala las dependencias:
  ```sh
  cd adivina-el-numero
  npm install
  ```
- Inicia el servidor de desarrollo:
  ```sh
  npm run dev
  ```

### 2. Crear la Estructura de Componentes
Crea una carpeta `components` dentro de `src/` y define los siguientes componentes:

- `Game`: Componente principal que maneja la lógica del juego.
- `InputNumber`: Un campo de entrada para que el usuario escriba su número.
- `Message`: Muestra pistas o mensajes de éxito.
- `RestartButton`: Permite reiniciar el juego.

### 3. Implementar la Lógica del Juego
- En el componente `Game`, genera un número aleatorio entre 1 y 100 cuando el juego comienza.
- Guarda el estado del número ingresado y la respuesta en `useState`.
- Compara el número ingresado con el generado y usa **renderización condicional** para mostrar:
  - "¡Correcto!" si el usuario acierta.
  - "El número es mayor" o "El número es menor" como pistas.

### 4. Implementar la Renderización Condicional
- En `Message`, recibe una prop con el mensaje adecuado según el estado del juego.
- Usa operadores ternarios o condiciones `if` para mostrar el mensaje correcto según el estado del juego.

### 5. Componer la Interfaz
- En `Game`, usa los componentes creados para mostrar la interfaz.
- `InputNumber` para capturar la entrada del usuario.
- `Message` para mostrar retroalimentación.
- `RestartButton` para reiniciar el juego generando un nuevo número aleatorio.

### 6. Probar y Mejorar la Experiencia
- Prueba el juego ingresando diferentes números.
- Ajusta el diseño agregando estilos con CSS.
- Agrega un contador de intentos si deseas ampliar la funcionalidad.

## Resultado Final Esperado
Al finalizar el workshop, los estudiantes tendrán un juego funcional donde podrán adivinar un número y recibir pistas hasta acertar. La interfaz estará compuesta por varios componentes reutilizables y utilizará renderización condicional para mostrar mensajes adecuados.