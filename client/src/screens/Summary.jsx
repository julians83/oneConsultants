import React, {useState} from 'react';
import axios from 'axios';
import MessageComponent from '../components/MessageComponent'
import { useNavigate } from 'react-router-dom';
import {connect} from 'react-redux';
import {Container, Button, Form, Row, Col} from 'react-bootstrap'

const Summary = ({users, dataAcademica, viewComponent}) => {
    const [form, SetValues] = useState({
        email: ''
    })

    console.log(viewComponent)
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
        try {
        const data = {
            name: users[0].name,
            lastName: users[0].lastName,
            document: users[0].document,
            date_birth: users[0].date_birth,
            landline:users[0].landline,
            phone: users[0].phone,
            email: users[0].email,
            gender: users[0].gender,
            marital_status:users[0].marital_status,
            address:users[0].address,
            education:dataAcademica[0].education,
            title: dataAcademica[0].title,
            institute: dataAcademica[0].institute,
            graduation_year: dataAcademica[0].graduation_year,
            course: dataAcademica[0].course,
            english:dataAcademica[0].english
        }
        const postUser = await axios.post('http://localhost:3001/create-user', data)
        const response = postUser;
        
        if(response.status === 201){
            navigate('/tableregister');
            
        }
        } catch (error) {
            console.log(error);
        }        
    }

    return (
        <Container>
        <h1 className="title">
            Formulario de datos personales y académicos
        </h1>
        {(viewComponent === true) ?
        <Form onSubmit= {handleSubmit}>
         {users.map(item => (
            <>
             <Row>
             <Col>
                 <Form.Group className="mb-3" controlId="formBasicName">
                 <Form.Label>Nombre Completo</Form.Label>
                 <Form.Control
                 name="name" 
                 type="text"
                 placeholder={item.name}
                 disabled  
                 onChange = {handleInput}/>
                 </Form.Group>
                 </Col>
                 <Col>
                 <Form.Group className="mb-3" controlId="formBasicLastName">
                 <Form.Label>Apellidos</Form.Label>
                 <Form.Control type="text" 
                 name="lastName"
                 placeholder={item.lastName}
                 disabled     
                 onChange = {handleInput}/>
                 </Form.Group>
             </Col>           
         </Row>
         <Row>
             <Col>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Label>Documento</Form.Label>
                     <Form.Control 
                     name="document" 
                     type="text" 
                     placeholder={item.document}
                    disabled  
                     onChange = {handleInput}/>
                 </Form.Group>
             </Col>
             <Col>
             <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Label>Fecha de nacimiento</Form.Label>
                     <Form.Control 
                     name="date_birth" 
                     type="text"
                     placeholder={item.date_birth}
                        disabled  
                     onChange = {handleInput}/>
                 </Form.Group>
             </Col>
         </Row>
         <Row>
             <Col>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Label>Teléfono fijo</Form.Label>
                     <Form.Control 
                     name="landline" 
                     type="text"
                     placeholder={item.landline}
                 disabled  
                     onChange = {handleInput}/>
                 </Form.Group>
             </Col>
             <Col>
             <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Label>Celular</Form.Label>
                     <Form.Control 
                     name="phone" 
                     type="text" 
                     placeholder={item.phone}
                 disabled  
                     onChange = {handleInput}/>
                 </Form.Group>
             </Col>
         </Row>
         <Row>
             <Col>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Label>Correo</Form.Label>
                     <Form.Control 
                     name="email" 
                     type="text"
                     placeholder={item.email}
                 disabled   
                     onChange = {handleInput}/>
                 </Form.Group>
             </Col>
             <Col>
             <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Label>Genero</Form.Label>
                     <Form.Select
                     disabled  
                     name="gender" 
                     onChange = {handleInput}>
                     <option>{item.gender}</option>
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
                     disabled  
                     name="marital_status" 
                     onChange = {handleInput}>
                     <option>{item.marital_status}</option>
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
                     placeholder={item.address}
                     disabled   
                     name="address" 
                     type="text" 
                     onChange = {handleInput}/>
                 </Form.Group>
             </Col>
         </Row>
         <Row>
         
     </Row>   
     </>  
         ))}
          {dataAcademica.map(item => (
        <>
         <Row>
                 <Col>
             <Form.Group className="mb-3" controlId="formBasicName">
             <Form.Label>Nivel Educativo</Form.Label>
             <Form.Select
                disabled 
                 name="education" 
                 onChange = {handleInput}>
                 <option>{item.education}</option>
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
             placeholder={item.title}
             disabled  
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
                 placeholder={item.institute}
                 disabled  
                 name="institute" 
                 type="text" 
                 onChange = {handleInput}/>
             </Form.Group>
         </Col>
         <Col>
         <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Año de Graduación</Form.Label>
                 <Form.Control
                 placeholder={item.graduation_year}
                 disabled  
                 name="graduation_year" 
                 type="text" 
                 onChange = {handleInput}/>
             </Form.Group>
         </Col>
     </Row>
     <Row>
         <Col>
             <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Último curso realizado</Form.Label>
                 <Form.Control
                 placeholder={item.course}
                 disabled  
                 name="course" 
                 type="text" 
                 onChange = {handleInput}/>
             </Form.Group>
         </Col>
         <Col>
         <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Nivel de inglés</Form.Label>
             <Form.Select
                disabled 
                 name="english" 
                 onChange = {handleInput}>
                 <option>{item.english}</option>
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
          </>
          ))}     
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
    );
}


const mapStateToProps = state =>{
    return {
        users: state.users,
        dataAcademica: state.dataAcademica,
        viewComponent:state.viewComponent,
    }
}

export default connect(mapStateToProps, null)(Summary);