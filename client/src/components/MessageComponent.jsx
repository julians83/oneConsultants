import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function MessageComponent() {
  const navigate = useNavigate()
  const handleSubmit = event => {
    event.preventDefault();
    navigate('/personal');
    
}
  return (
    <Card>
      <Card.Header as="h5">Mensaje de error</Card.Header>
      <Card.Body>
        <Card.Title>Completa los formularios</Card.Title>
        <Card.Text>
          Para poder acceder a esta sección de nuestra app primero debes completar el formulario de Datos Personales.
        </Card.Text>
        <Button variant="info" onClick={handleSubmit}>Ir a la sección</Button>
      </Card.Body>
    </Card>
  );
}

export default MessageComponent;