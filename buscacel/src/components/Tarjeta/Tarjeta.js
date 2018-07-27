import React, { Component } from 'react';

import './Tarjeta.css';

class Tarjeta extends Component {

  render() {

    const { marca, modelo, sistemaOperativo, imagen } = this.props;

    return (
      <div className="Tarjeta">
       <p>{marca}</p>
       <p>{modelo}</p>
       <p>{sistemaOperativo}</p>
       <img className="foto" src ={imagen}/>

      </div>
    )
  }

}

export default Tarjeta;
