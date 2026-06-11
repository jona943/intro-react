import { Link } from 'react-router-dom';
import juanImg from '../img/juan-perez.jpg';
import mariaImg from '../img/maria-garcia.jpg';
import luisImg from '../img/luis-rodrigez.jpg';

function Citas() {
  const citas = [
    { 
      id: 1, 
      paciente: 'Juan Pérez', 
      edad: 45, 
      genero: 'Masculino',
      motivo: 'Control de hipertensión arterial y revisión de analítica anual.',
      foto: juanImg
    },
    { 
      id: 2, 
      paciente: 'María García', 
      edad: 32, 
      genero: 'Femenino',
      motivo: 'Migrañas recurrentes acompañadas de sensibilidad a la luz.',
      foto: mariaImg
    },
    { 
      id: 3, 
      paciente: 'Luis Rodríguez', 
      edad: 28, 
      genero: 'Masculino',
      motivo: 'Lesión en el tobillo derecho tras actividad deportiva.',
      foto: luisImg
    },
  ];

  return (
    <div className="citas-container">
      <h1>Expedientes Médicos del Día</h1>
      <div className="grid-citas">
        {citas.map((cita) => (
          <div key={cita.id} className="expediente-card">
            <div className="card-header">
              <img src={cita.foto} alt={cita.paciente} className="paciente-foto" />
              <div className="paciente-info-basica">
                <h3>{cita.paciente}</h3>
                <p><span>ID:</span> #00{cita.id}</p>
              </div>
            </div>
            <div className="card-body">
              <p><strong>Edad:</strong> {cita.edad} años</p>
              <p><strong>Género:</strong> {cita.genero}</p>
              <div className="motivo-consulta">
                <strong>Motivo de consulta:</strong>
                <p>{cita.motivo}</p>
              </div>
            </div>
            <div className="card-footer">
              <Link to={`/cita/${cita.id}`} className="view-detail-btn">
                Ver Detalles Completos
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Citas;
