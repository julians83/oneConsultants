import React, {useState, useEffect} from 'react';
import {Table} from 'react-bootstrap'
import axios from 'axios';

const TableRegister = () => {
    const [usersdb, setUsersdb] = useState([])

    useEffect(() =>{
        async function getUsers(){
            const resultUsers = await axios.get('http://localhost:3001/create-user')
            setUsersdb(resultUsers.data)
            // console.log(usersDb)
        }
        getUsers()
       
    },[])

    return (
        <Table striped hover >
            <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Documento</th>
            <th>Teléfono Fijo</th>
            <th>Celular</th>
            <th>Año de Nacimiento</th>
            <th>Estado Cívil</th>
            <th>Género</th>
            <th>Nivel Educativo</th>
            <th>Título</th>
            <th>Institución</th>
            <th>Año de Graduación</th>
            <th>Curso</th>
            <th>Inglés</th>
          </tr>
        </thead>
        {usersdb.map(item =>
        <tbody key={item.id}>
          <tr >
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.document}</td>
            <td>{item.landline}</td>
            <td>{item.phone}</td>
            <td>{item.date_birth}</td>
            <td>{item.marital_status}</td>
            <td>{item.gender}</td>
            <td>{item.education}</td>
            <td>{item.title}</td>
            <td>{item.institute}</td>
            <td>{item.graduation_year}</td>
            <td>{item.course}</td>
            <td>{item.english}</td>
          </tr>
        </tbody>
        )}
       
      </Table>
    );
}

export default TableRegister;
