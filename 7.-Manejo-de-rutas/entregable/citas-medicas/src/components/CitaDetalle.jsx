import { useParams, Link } from 'react-router-dom';

function CitaDetalle() {
  const { id } = useParams();
  
  return (
    <div>
      <h2>Detalles de la Cita</h2>
      <p>ID de la cita: <strong>{id}</strong></p>
      <Link to="/citas" className="back-link">Volver a la lista</Link>
    </div>
  );
}

export default CitaDetalle;
