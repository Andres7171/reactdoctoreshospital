import React, { Component } from "react";

import { Navigate } from "react-router-dom";
import ServiceHospitales from "../services/ServiceHospitales";

export default class CreateHospital extends Component {
  
    service=new ServiceHospitales()
  cajaId=React.createRef()
  cajaNombre=React.createRef()
  cajaDireccion=React.createRef()
  cajaTelefono=React.createRef()
  cajaCamas=React.createRef()
  
  

  state={
    mensaje:'',
    status:false,
  }

  insertHospital=(event)=>{
    event.preventDefault()
    
    let hospital={
        idHospital:parseInt(this.cajaId.current.value) ,
        nombre:this.cajaNombre.current.value,
        direccion:this.cajaDireccion.current.value,
        telefono:this.cajaTelefono.current.value,
        camas:parseInt(this.cajaCamas.current.value) 
    }

    this.service.insertarHospital(hospital).then((result)=>{
        this.setState({
            status:true
        })
    })

  }
    render() {
    return (
      <div>
        {
            this.state.status &&
            (<Navigate to='/hospitales'/>)
        }
        <h1>Create Hospital</h1>
        <h3 style={{color:'blue'}}>{this.state.mensaje}</h3>
        <form action="">
            <label htmlFor="">Id</label>
            <input ref={this.cajaId} type="number" />

            <label htmlFor="">Nombre</label>
            <input ref={this.cajaNombre} type="text" />

            <label htmlFor="">Direccion</label>
            <input ref={this.cajaDireccion} type="text" />

            <label htmlFor="">Telefono</label>
            <input ref={this.cajaTelefono} type="text" />

            <label htmlFor="">Camas</label>
            <input ref={this.cajaCamas} type="number" />

            <button onClick={this.insertHospital} className="btn btn-info">Create</button>
        </form>
      </div>
    );
  }
}
