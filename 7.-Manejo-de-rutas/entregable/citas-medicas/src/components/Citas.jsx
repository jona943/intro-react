import { Link } from 'react-router-dom';

function Citas() {
  const citas = [
    { id: 1, paciente: 'Juan Pérez' },
    { id: 2, paciente: 'María García' },
    { id: 3, paciente: 'Luis Rodríguez' },
  ];

  return (
    <div>
      <h1>Lista de Citas</h1>
      <ul>
        {citas.map((cita) => (
          <li key={cita.id}>
            <Link to={`/cita/${cita.id}`}>Cita #{cita.id} - {cita.paciente}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Citas;
