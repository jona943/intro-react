import { useState, useEffect } from "react";

function DatosAPI() {
    const [datos, setDatos] = useState([]);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/posts")

            .then(response => response.json())
            .then(data => setDatos(data));

    }, []);
    return (

        <div>
            <h2>Datos desde API</h2>
            <ul>
                {datos.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );

}

export default DatosAPI;