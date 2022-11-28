import React, {useState} from 'react';
import '../styles/personalForm.css'
import MessageComponent from '../components/MessageComponent'
import {connect} from 'react-redux';
import {Container, Button, Form, Row, Col} from 'react-bootstrap'
import {dataAcademica} from '../actions'
import { useNavigate } from 'react-router-dom';


const DataAcademic = ({viewComponent, dataAcademica})  => {
    const [form, SetValues] = useState({
        education: ''
    })

    const navigate = useNavigate()

    const handleInput = event =>{
        console.log(event.target.name)
        SetValues({
            ...form,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        dataAcademica(form)
        navigate('/summary');
        
    }

    

  return (
      <Container>
        <h1 className="title">
            Formulario de datos Académicos
        </h1>
      {(viewComponent) ? 
        <Form onSubmit= {handleSubmit}>
        
            <Row>
                
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nivel Educativo</Form.Label>
                    <Form.Select
                        name="education" 
                        onChange = {handleInput}>
                        <option></option>
                        <option>Primaria</option>
                        <option>Bachiller</option>
                        <option>Pregrado</option>
                        <option>Especialista</option>
                        <option>Magister</option>
                        <option>PhD</option>
                    </Form.Select>
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Título Obtenido</Form.Label>
                    <Form.Control type="text" 
                    name="title"   
                    onChange = {handleInput}/>
                    </Form.Group>
                </Col>           
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Institución Educativa</Form.Label>
                        <Form.Control 
                        name="institute" 
                        type="text" 
                        onChange = {handleInput}/>
                    </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Año de Graduación</Form.Label>
                        <Form.Control 
                        name="graduation_year" 
                        type="date" 
                        onChange = {handleInput}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Último curso realizado</Form.Label>
                        <Form.Control 
                        name="course" 
                        type="text" 
                        onChange = {handleInput}/>
                    </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nivel de inglés</Form.Label>
                    <Form.Select
                        name="english" 
                        onChange = {handleInput}>
                        <option></option>
                        <option>A1</option>
                        <option>A2</option>
                        <option>B1</option>
                        <option>B2</option>
                        <option>C1</option>
                        <option>C2</option>
                    </Form.Select>
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
            : <MessageComponent/>
        } 
        </Container>
        
    
  )
}

const mapStateToProps = state =>({
            viewComponent: state.viewComponent,
    
})

const mapDispatchToProps = {
    dataAcademica
}

// export default UserForm;
export default connect(mapStateToProps, mapDispatchToProps)(DataAcademic);