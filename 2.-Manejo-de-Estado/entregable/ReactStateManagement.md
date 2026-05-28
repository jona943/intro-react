## Instrucciones
1. Crea un nuevo proyecto en React o usa un entorno como CodeSandbox.
2. Crea un componente `ListaCompras`.
3. Usa `useState` para manejar el estado de la lista de compras.
4. Agrega un input y un botón para permitir que los usuarios añadan productos.
5. Muestra la lista de productos en pantalla.
6. Agrega un botón en cada producto para eliminarlo de la lista.

## Código inicial (Incompleto)
```jsx
import { useState } from "react";

function ListaCompras() {
  // Definir el estado para la lista de compras
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState("");

  // Función para agregar un nuevo producto a la lista
  const agregarProducto = () => {
    if (nuevoProducto.trim() !== "") {
      setProductos([...productos, nuevoProducto]);
      setNuevoProducto("");
    }
  };

  // Función para eliminar un producto de la lista
  const eliminarProducto = (index) => {
    // Completar la lógica para eliminar un producto
  };

  return (
    <div>
      <h2>Lista de Compras</h2>
      <input
        type="text"
        value={nuevoProducto}
        onChange={(e) => setNuevoProducto(e.target.value)}
      />
      <button onClick={agregarProducto}>Agregar</button>
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>
            {producto}
            <button onClick={() => eliminarProducto(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaCompras;
```

## Pistas para completar el código
- La función `eliminarProducto` debe actualizar el estado filtrando el producto correspondiente.
- Usa `setProductos` con el método `.filter()` para excluir el producto seleccionado de la lista.
- Asegúrate de pasar el índice correcto en la función `onClick`.