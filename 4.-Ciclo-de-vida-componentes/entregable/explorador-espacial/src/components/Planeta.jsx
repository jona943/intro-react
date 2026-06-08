import React, { useEffect } from "react";

function Planeta({ nombre}) {
    useEffect(() => {
        console.log(`Estamos visitando el planeta ${nombre}`);

        return () => {
            console.log(`El planeta ${nombre} a sido abandonado`);
        }
    })
}