import { useReducer, useRef, useEffect, useCallback } from "react";

const initialState = { count: 0, historial: [] };

export function reducer(state, action) {
    switch (action.type){
        case "incremento":
            return{
                count: state.count + 1,
                historial: [...state.historial, `+1 (nuevo valor: ${state.count + 1})`]
            };
        case "decremento":
            return{
                count: state.count -1,
                historial: [...state.historial, `-1 (nuevo valor: ${state.count - 1})`]
            }
        case "reset":
            return initialState;
        default:
            return state;
    }
}

export default function CounterGame() {
    const [ state, dispatch ] = useReducer (reducer, initialState);
    const incrementBtnRef = useRef(null);
    // Memorizamos la función de incremento 
    useEffect(() => {
        if (incrementBtnRef.current) {
            incrementBtnRef.current.focus();
        }
    }, []); // [] significa que la función no depende de ningun valor externo

    return(
        <div>
            <h1>Contador : {state.count}</h1>

            <button ref={incrementBtnRef} onClick={() => dispatch({ type: "incremento"})}> + </button>
            <button onClick={() => dispatch({ type: "decremento"})}> - </button>
            <button onClick={() => dispatch({ type: "reset"})}> Reset </button>

            <h2>Historial de cambios</h2>
            <ul>
                {state.historial.map((entrada, index) => (
                    <li key={index}>{entrada}</li>
                ))}
            </ul>
        </div>
    )
}
