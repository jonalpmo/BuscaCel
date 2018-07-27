import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import owl from './owl.jpg';

import axios from 'axios';

import Tarjeta from './components/Tarjeta/Tarjeta';
// import SignIn from './components/SignIn/SignIn';
// export default class Example extends React.Component{
class App extends Component {

  state = {
    celulares: [],
    celularesBusqueda: ''
  }

  componentDidMount() {

    axios.get("https://buscacelbackend.herokuapp.com/api/celulares/")
    .then(res => {
       this.setState({ celulares: res.data })
       console.log(this.state.celulares)
    })
    .catch(err => {
      console.log(err);
    })

  }

  manejaCambio = (e) => {
    this.setState({celularesBusqueda: e.target.value })
  }
  
  render() {
    console.log("Render se ejecuto");

    return (
      <div className="App">
      <div className="row barra">
      
        <div className = 'col-3 col1'>   
          <img src={owl} className="App-logo" alt="logo" /></div>
        <div className = 'col-4 offset 2 col2'>El Cel de Tus Sueños en Segundos</div>
        <div className='col col3'>Busca tu cel por modelo o marca</div>
        </div>
      
          


      
      <div className="Caja">
      <div className= "row ctexto">
        <input type="text" value={this.state.celularesBusqueda} onChange={this.manejaCambio} />
        <div>{this.state.celularesBusqueda}</div>
        </div>
        </div>
        

        {this.state.celulares
          .filter(celular => celular.marca.toLowerCase().includes(this.state.celularesBusqueda.toLowerCase()))
          .map((celular, index) =>
           <Tarjeta 
           marca={celular.marca} 
           modelo={celular.modelo} 
           sistemaOperativo={celular.sistemaOperativo}
            imagen={celular.imagen}
             key={index}/>)}
      </div>
    );
  }
}


export default App;
