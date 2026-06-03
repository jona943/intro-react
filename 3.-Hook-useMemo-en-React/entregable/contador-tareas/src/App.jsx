import { useState, useEffect, useMemo } from 'react'

function App() {
  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem("tareas");
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });

  const [nuevaTarea, setNuevaTarea] = useState("");
  const [duracion, setDuracion] = useState("");

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  // Cálculo de tiempo total optimizado con useMemo
  // Lo definimos ANTES del useEffect para mayor claridad
  const calcularTiempoTotal = useMemo(() => {
    console.log("Calculando tiempo total...");
    return tareas.reduce((total, tarea) => total + tarea.duracion, 0);
  }, [tareas]); // Solo se recalcula cuando cambian las tareas

  // Efecto secundario: Actualizar el título del documento
  useEffect(() => {
    document.title = `Total: ${calcularTiempoTotal} minutos`;
  }, [tareas, calcularTiempoTotal]); // Se ejecuta cuando cambian las tareas o el tiempo total calculado

  // Función para agregar una nueva tarea
  const agregarTarea = () => {
    if (nuevaTarea && duracion) {
      const nuevaTareaObj = {
        nombre: nuevaTarea,
        duracion: parseInt(duracion)
      };
      setTareas([...tareas, nuevaTareaObj]);
      setNuevaTarea('');
      setDuracion('');
    }
  };

  const eliminarTarea = (indexBorrar) => {
    const tareasActualizadas = tareas.filter((_, index) => index !== indexBorrar);
    setTareas(tareasActualizadas);
  }

  return (
    <>
      <div style={{ padding: '20PX' }}>
        <h1>Contador de Tareas</h1>
        <div>
          <input
            type="text"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
            placeholder="Nombre de la tarea"
          />
          <input
            type="number"
            value={duracion}
            onChange={(e) => setDuracion(e.target.value)}
            placeholder="Duración en minutos"
          />
          <button onClick={agregarTarea}>Agregar tarea</button>
        </div>

        <h2>Tareas</h2>
        <ul>
          {tareas.map((tarea, index) => (
            <li key={index}>
              {tarea.nombre}: {tarea.duracion} minutos
              <button onClick={() => eliminarTarea(index)} style={{ marginLeft: '10px' }}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>

        <h3>Total de tiempo: {calcularTiempoTotal} minutos</h3>
      </div>


    </>
  )
}

export default App;
