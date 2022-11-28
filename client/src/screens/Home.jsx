import React from 'react';
import Card from 'react-bootstrap/Card';
import {Container, Button, Form, Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux';

const Home = ({users, dataAcademica, viewComponent}) => {
    console.log(viewComponent)
    return (
        <Container style = {{position: 'relative'}}>
             <Card border="Info" style={{ width: '50rem', height: '20rem', textAlign: 'center', 
            position: 'absolute',
            top: '70%',
            left: '50%',
            transform: 'translate(-50%, 25%)' }}>
            <Card.Header>Formularios de registro</Card.Header>
            <Card.Body>
            <Card.Title>Información Personal y Academica</Card.Title>
            <Card.Text>
            En esta app podrás registras tu información personal y academica, además de consultar la información 
            de otras personas ya registradas.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
        </Container>
    );
}


const mapStateToProps = state =>{
    return {
        users: state.users,
        dataAcademica: state.dataAcademica
    }
}
export default connect(mapStateToProps, null)(Home);
