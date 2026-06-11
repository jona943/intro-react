import { useReducer, useEffect, useRef, useCallback } from "react";
import "./PersistentCounter.css";

// Definimos la clave para el LocalStorage
const STORAGE_KEY = "mi_contador_persistente";

// Estado inicial: Intenta cargar de LocalStorage, si no, usa el valor por defecto
const getInitialState = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : { count: 0, historial: [] };
};

function reducer(state, action) {
  switch (action.type) {
    case "incremento":
      return {
        count: state.count + 1,
        historial: [...state.historial, `+1 (Valor: ${state.count + 1})`]
      };
    case "decremento":
      return {
        count: state.count - 1,
        historial: [...state.historial, `-1 (Valor: ${state.count - 1})`]
      };
    case "reset":
      return { count: 0, historial: [] };
    default:
      return state;
  }
}

export default function PersistentCounter() {
  const [state, dispatch] = useReducer(reducer, null, getInitialState);
  const incrementRef = useRef(null);

  // 1. Persistencia: Guardar cambios cada vez que el estado cambie
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  // 2. Experiencia de Usuario: Foco automático al cargar
  useEffect(() => {
    if (incrementRef.current) {
      incrementRef.current.focus();
    }
  }, []);

  // 3. Optimización: Memorizar funciones
  const handleIncrement = useCallback(() => dispatch({ type: "incremento" }), []);
  const handleDecrement = useCallback(() => dispatch({ type: "decremento" }), []);
  const handleReset = useCallback(() => dispatch({ type: "reset" }), []);

  return (
    <div className="persistent-container">
      <h1>Contador Persistente</h1>
      <div className="counter-display">{state.count}</div>

      <div className="button-group">
        <button 
          ref={incrementRef} 
          className="btn btn-increment" 
          onClick={handleIncrement}
        >
          Incrementar
        </button>
        <button 
          className="btn btn-decrement" 
          onClick={handleDecrement}
        >
          Decrementar
        </button>
        <button 
          className="btn btn-reset" 
          onClick={handleReset}
        >
          Resetear
        </button>
      </div>

      <div className="history-card">
        <h3>Historial (Se guarda en el navegador)</h3>
        <ul className="history-list">
          {state.historial.map((entry, index) => (
            <li key={index} className="history-item">{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
