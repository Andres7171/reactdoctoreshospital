import React, { Component } from "react";
import ServiceEjemplo from "../services/ServiceEjemplo";

export default class EjemplosServiceComponent extends Component {
  service = new ServiceEjemplo();
  state = {
    mensaje1: "",
    mensaje2: "",
    comics:[]
  };
  loadData = () => {
    this.setState({
        mensaje1:this.service.getSaludo(),
        mensaje2:this.service.getDia('Andres'),
        comics:this.service.getComics()
    })
  };
  componentDidMount=()=>{
    this.loadData()
  }
  render() {
    return (
      <div>
        <h1>Ejemplos Service Component</h1>
        <h3>{this.state.mensaje1}</h3>
        <h3>{this.state.mensaje2}</h3>
        <h3>Comics: {this.state.comics.length}</h3>
        {
            this.state.comics.map((comic,index)=>{
                return(
                    <div key={index}>
                        <h2>{comic.titulo}</h2>
                        <img src={comic.imagen} alt="" style={{width:'120px' , height:'120px'}}/>
                    </div>
                )
            })
        }
      </div>
    );
  }
}
