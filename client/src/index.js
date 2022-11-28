import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/bootstrap.min.css'
import App from './App';
import { Provider } from "react-redux";
import {createStore} from "redux"
import reducer from "./reducers"

const initialState = {
  "users": [{
    'name': 'Julián',
    'lastName': '',
    'document': '',
    'date_birth': '',
    'landline':'',
    'phone': '',
    'email': '',
    'gender': '',
    'marital_status':'',
    'address':''
  }],
  "dataAcademica": [{
    "education":'Bachiller',
    "title": 'psicologia',
    "institute": '',
    "graduation_year": '',
    "course": '',
    "english":''
  }],
  "viewComponent": false
}

const store = createStore(reducer, initialState)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
  
);


