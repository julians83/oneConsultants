import React, {useState} from 'react';
import '../styles/personalForm.css'
import {connect} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {Container, Button, Form, Row, Col} from 'react-bootstrap'
import {userFormRequest, viewComponent} from '../actions'

const DataPersonal = (props)  => {
    const [form, SetValues] = useState({
        email: ''
    })

    const navigate = useNavigate()

    const handleInput = event =>{
        console.log(event.target.name)
        SetValues({
            ...form,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit= async (event)=> {
        event.preventDefault();
        props.userFormRequest(form);
        props.viewComponent(true)
        navigate('/academic');       
    }
    

  return (
    <Container>
        <h1 className="title">
            Formulario de datos personales
        </h1>
        <Form onSubmit= {handleSubmit}>
        <Row>
            <Col>
                <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control
                required
                name="name" 
                type="text" 
                onChange = {handleInput}/>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control type="text" 
                name="lastName"   
                onChange = {handleInput}/>
                </Form.Group>
            </Col>           
        </Row>
        <Row>
            <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Documento</Form.Label>
                    <Form.Control
                    required 
                    name="document" 
                    type="text" 
                    onChange = {handleInput}/>
                </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Fecha de nacimiento</Form.Label>
                    <Form.Control
                    required 
                    name="date_birth" 
                    type="date" 
                    onChange = {handleInput}/>
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Teléfono fijo</Form.Label>
                    <Form.Control
                    required 
                    name="landline" 
                    type="text" 
                    onChange = {handleInput}/>
                </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Celular</Form.Label>
                    <Form.Control
                    required 
                    name="phone" 
                    type="text" 
                    onChange = {handleInput}/>
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                    <Form.Control
                    required 
                    name="email" 
                    type="text" 
                    onChange = {handleInput}/>
                </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Genero</Form.Label>
                    <Form.Select
                    required
                    name="gender" 
                    onChange = {handleInput}>
                    <option></option>
                    <option>Masculino</option>
                    <option>Femenino</option>
                    <option>Otro</option>
                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Estado Civil</Form.Label>
                    <Form.Select
                    required
                    name="marital_status" 
                    onChange = {handleInput}>
                    <option></option>
                    <option>Soltero</option>
                    <option>Casado</option>
                    <option>Unión Libre</option>
                    <option>Viudo</option>
                    </Form.Select>
                </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ciudad de Residencia</Form.Label>
                    <Form.Control
                    required 
                    name="address" 
                    type="text" 
                    onChange = {handleInput}/>
                </Form.Group>
            </Col>
        </Row>
        
        
        <Row>
        <Button
        className="btn btn-secondary mb-3" 
        variant="primary" 
        type="submit" 
        >
            Enviar
        </Button>
        </Row>
        
        </Form>
    </Container>
  )
}


const mapDispatchToProps = {
    userFormRequest,
    viewComponent
}


export default connect(null, mapDispatchToProps)(DataPersonal);