## 🛠 **Paso a paso del workshop**  

### 1️⃣ **Crear el proyecto con Vite**  
Ejecuta el siguiente comando para crear un proyecto con React y JavaScript:  

```bash
npm create vite@latest contador-juego
```

📌 **Selecciona `react` y elige `JavaScript` cuando se te pida el framework y lenguaje.**  

Luego, accede al proyecto e instala las dependencias:  

```bash
cd contador-juego
npm install
npm run dev
```

---

### 2️⃣ **Configurar la estructura del proyecto**  
Dentro de `src/`, crea un nuevo archivo `CounterGame.jsx` donde implementaremos el contador interactivo.  

📂 **Estructura esperada del proyecto**  
```
📁 contador-juego
 ┣ 📁 src
 ┃ ┣ 📄 App.jsx
 ┃ ┣ 📄 CounterGame.jsx  <-- Aquí desarrollaremos el juego
 ┃ ┣ 📄 main.jsx
 ┃ ┣ 📂 assets
 ┃ ┗ 📂 styles
 ┗ 📄 index.html
```

---

### 3️⃣ **Crear el reducer para manejar el estado**  
En `CounterGame.jsx`, importa `useReducer` y define un **reducer** que manejará las acciones del contador:  

```jsx
import { useReducer, useRef, useCallback } from "react";

const initialState = { count: 0, history: [] };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { 
        count: state.count + 1, 
        history: [...state.history, `+1 (Nuevo valor: ${state.count + 1})`] 
      };
    case "decrement":
      return { 
        count: state.count - 1, 
        history: [...state.history, `-1 (Nuevo valor: ${state.count - 1})`] 
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
}
```

🔹 **Explicación:**  
- `count`: almacena el valor del contador.  
- `history`: registra cada cambio en una lista.  
- `dispatch({ type: "increment" })` y `dispatch({ type: "decrement" })` actualizan el estado según la acción enviada.  

---

### 4️⃣ **Implementar `useRef` para enfocar un botón automáticamente**  
Añadimos un `useRef` para que el botón de incremento tenga el foco al cargar la aplicación:  

```jsx
function CounterGame() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const incrementBtnRef = useRef(null);

  // Fijar el foco en el botón de incremento al renderizar
  useEffect(() => {
    incrementBtnRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Contador: {state.count}</h2>
      <button ref={incrementBtnRef} onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

      <h3>Historial de cambios:</h3>
      <ul>
        {state.history.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
}
```

🔹 **Explicación:**  
- `useRef` almacena una referencia al botón de incremento.  
- `useEffect` lo enfoca automáticamente cuando el componente se renderiza.  

---

### 5️⃣ **Optimizar funciones con `useCallback`**  
Para evitar que las funciones de los botones se re-rendericen innecesariamente, usamos `useCallback`:  

```jsx
const handleIncrement = useCallback(() => {
  dispatch({ type: "increment" });
}, []);

const handleDecrement = useCallback(() => {
  dispatch({ type: "decrement" });
}, []);
```

Y ahora en los botones:  

```jsx
<button ref={incrementBtnRef} onClick={handleIncrement}>+</button>
<button onClick={handleDecrement}>-</button>
```

🔹 **Explicación:**  
- `useCallback` evita que `handleIncrement` y `handleDecrement` se generen nuevamente en cada render.  

---

## ✍️ **Ejercicios no resueltos**  

💡 **Ejercicio 1: Agregar un botón para deshacer la última acción**  
📌 **Instrucciones:**  
1. Agrega un nuevo botón llamado **"Deshacer"**.  
2. Implementa una nueva acción en el reducer (`undo`) que revierta el último cambio en `count` y elimine el último registro en `history`.  

💡 **Ejercicio 2: Agregar un campo de entrada para incrementar en un número específico**  
📌 **Instrucciones:**  
1. Agrega un input donde el usuario pueda ingresar un número.  
2. Modifica la acción `increment` para que sume el valor ingresado en el input.  

💡 **Ejercicio 3: Guardar el historial en `localStorage`**  
📌 **Instrucciones:**  
1. Usa `useEffect` para guardar el historial en `localStorage` cada vez que cambie.  
2. Recupera el historial cuando la aplicación se cargue nuevamente.  

---

## 🎉 **Conclusión**  
En este taller, construimos un contador interactivo aplicando:  
✅ `useReducer` para manejar múltiples estados y acciones.  
✅ `useRef` para interactuar con elementos del DOM.  
✅ `useCallback` para mejorar el rendimiento del código.  

Además, dejamos ejercicios adicionales para reforzar la práctica. ¡Ahora es tu turno de experimentar y mejorar la aplicación! 🚀  

---

## 📚 **Recursos adicionales**  
- [Documentación oficial de React: useReducer](https://react.dev/reference/react/useReducer)  
- [Documentación oficial de React: useRef](https://react.dev/reference/react/useRef)  
- [Documentación oficial de React: useCallback](https://react.dev/reference/react/useCallback)  

---

🔹 **¿Qué te parece este workshop?** Si necesitas cambios o más ejercicios, dime y lo mejoramos. 🚀


## Opción 2
¡Buena idea! Vamos a hacer un **gestor de inventario para una tienda de e-commerce** usando los hooks avanzados que hemos aprendido.  

---

# 🛒 **Workshop: Creando un Gestor de Inventario con Hooks Avanzados**  

## 📌 **Descripción del problema**  
Imagina que tienes una tienda en línea y necesitas una manera sencilla de administrar los productos. Debemos construir un **gestor de inventario** que permita:  
- Agregar productos con nombre y cantidad.  
- Aumentar o disminuir la cantidad de productos.  
- Eliminar productos del inventario.  
- Usar `useReducer` para manejar el estado de los productos.  
- Aplicar `useRef` para mejorar la experiencia del usuario.  
- Optimizar funciones con `useCallback`.  

💡 **Reto adicional:** Implementar un buscador de productos en el inventario.  

---

## 🎯 **Objetivo**  
Al finalizar el taller, los alumnos podrán:  
✅ Manejar múltiples estados con `useReducer`.  
✅ Utilizar `useRef` para mejorar la usabilidad.  
✅ Aplicar `useCallback` para optimizar funciones.  
✅ Construir una aplicación interactiva con React y Vite.  

---

# 🛠 **Paso a paso del workshop**  

## 1️⃣ **Crear el proyecto con Vite**  
Ejecuta este comando para crear el proyecto:  

```bash
npm create vite@latest gestor-inventario --template react
```

📌 **Selecciona `react` y elige `JavaScript` cuando se te pida el framework y lenguaje.**  

Luego, accede al proyecto e instala las dependencias:  

```bash
cd gestor-inventario
npm install
npm run dev
```

---

## 2️⃣ **Configurar la estructura del proyecto**  

Crea un nuevo archivo `InventoryManager.jsx` dentro de `src/`.  

📂 **Estructura esperada**  
```
📁 gestor-inventario
 ┣ 📁 src
 ┃ ┣ 📄 App.jsx
 ┃ ┣ 📄 InventoryManager.jsx  <-- Aquí desarrollaremos la lógica
 ┃ ┣ 📄 main.jsx
 ┃ ┗ 📂 assets
```

---

## 3️⃣ **Definir el reducer para manejar el estado**  
En `InventoryManager.jsx`, crea el **reducer** para manejar el inventario:  

```jsx
import { useReducer, useRef, useCallback } from "react";

const initialState = { products: [] };

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { 
        products: [...state.products, { 
          id: Date.now(), 
          name: action.name, 
          quantity: 1 
        }] 
      };
    case "increment":
      return { 
        products: state.products.map(p =>
          p.id === action.id ? { ...p, quantity: p.quantity + 1 } : p
        ) 
      };
    case "decrement":
      return { 
        products: state.products.map(p =>
          p.id === action.id && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p
        ) 
      };
    case "remove":
      return { 
        products: state.products.filter(p => p.id !== action.id) 
      };
    default:
      return state;
  }
}
```

🔹 **Explicación:**  
- `products` almacena los productos en el inventario.  
- Cada acción (`add`, `increment`, `decrement`, `remove`) modifica el estado.  

---

## 4️⃣ **Usar `useRef` para mejorar la experiencia del usuario**  
Ahora, agreguemos un **input** para añadir productos, usando `useRef` para limpiarlo después de cada uso:  

```jsx
function InventoryManager() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef(null);

  const handleAddProduct = () => {
    if (inputRef.current.value.trim() !== "") {
      dispatch({ type: "add", name: inputRef.current.value });
      inputRef.current.value = ""; // Limpiar input
    }
  };

  return (
    <div>
      <h2>Gestor de Inventario</h2>
      <input ref={inputRef} type="text" placeholder="Nombre del producto" />
      <button onClick={handleAddProduct}>Agregar Producto</button>

      <ul>
        {state.products.map((product) => (
          <li key={product.id}>
            {product.name} - Cantidad: {product.quantity}
            <button onClick={() => dispatch({ type: "increment", id: product.id })}>+</button>
            <button onClick={() => dispatch({ type: "decrement", id: product.id })}>-</button>
            <button onClick={() => dispatch({ type: "remove", id: product.id })}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

🔹 **Explicación:**  
- `useRef` almacena la referencia del input.  
- Después de agregar un producto, el input se vacía automáticamente.  

---

## 5️⃣ **Optimizar funciones con `useCallback`**  
Para evitar que se generen nuevas instancias de funciones en cada renderizado, optimizaremos las acciones con `useCallback`:  

```jsx
const handleIncrement = useCallback((id) => {
  dispatch({ type: "increment", id });
}, []);

const handleDecrement = useCallback((id) => {
  dispatch({ type: "decrement", id });
}, []);
```

Ahora, usamos estas funciones en los botones:  

```jsx
<button onClick={() => handleIncrement(product.id)}>+</button>
<button onClick={() => handleDecrement(product.id)}>-</button>
```

🔹 **Explicación:**  
- `useCallback` evita que `handleIncrement` y `handleDecrement` se recrean innecesariamente.  

---

# ✍️ **Ejercicios no resueltos**  

💡 **Ejercicio 1: Agregar un buscador de productos**  
📌 **Instrucciones:**  
1. Agrega un `input` para buscar productos en el inventario.  
2. Usa `useState` para almacenar el término de búsqueda y filtrar los productos.  

💡 **Ejercicio 2: Guardar el inventario en `localStorage`**  
📌 **Instrucciones:**  
1. Usa `useEffect` para guardar los productos en `localStorage`.  
2. Recupera el inventario cuando la aplicación se recargue.  

💡 **Ejercicio 3: Agregar una opción para vaciar todo el inventario**  
📌 **Instrucciones:**  
1. Crea un botón **"Vaciar Inventario"**.  
2. Implementa una nueva acción en el reducer (`clear`) para resetear el estado.  

---

# 🎉 **Conclusión**  
En este workshop, construimos un **gestor de inventario** aplicando:  
✅ `useReducer` para manejar múltiples acciones.  
✅ `useRef` para mejorar la experiencia del usuario.  
✅ `useCallback` para optimizar funciones.  

Ahora es tu turno de mejorar la aplicación. ¡Diviértete codificando! 🚀  

---

# 📚 **Recursos adicionales**  
- [Documentación oficial de React: useReducer](https://react.dev/reference/react/useReducer)  
- [Documentación oficial de React: useRef](https://react.dev/reference/react/useRef)  
- [Documentación oficial de React: useCallback](https://react.dev/reference/react/useCallback)  

---