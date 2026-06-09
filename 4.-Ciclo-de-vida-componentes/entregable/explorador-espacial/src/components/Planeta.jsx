import React, { useEffect } from "react";

function Planeta({ nombre}) {
    useEffect(() => {
        console.log(`Estamos visitando el planeta ${nombre}`);

        return () => {
            console.log(`El planeta ${nombre} a sido abandonado`);
        };
    }, []);  
    
    return (
        <div style={{ border: '1px solid white', margin: '10px', padding: '5px'}}>
            Planeta actual: <strong>{nombre}</strong>
        </div>
    )
}

export default Planeta;