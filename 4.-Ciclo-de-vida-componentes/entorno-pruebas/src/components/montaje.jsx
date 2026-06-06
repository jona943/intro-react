import { useState, useEffect } from 'react';

function MyComponent() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Componente montado');
        // Inicializar el estado, suscribirse a eventos, etc.
    }, []);

    return (
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px'}}>
            <p>Contador: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <p>---------------------  Componente renderizado  ------------------------------------</p>
        </div>
    );
}

export default MyComponent;