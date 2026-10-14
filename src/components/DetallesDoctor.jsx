import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
export default class DetallesDoctor extends Component {
  url = Global.urlDoctores;

  state = {
    detalles: [],
  };
  loadDetalles = () => {
    let request = "/api/Doctores/" + this.props.idDoctor;
    axios.get(this.url + request).then((response) => {
      this.setState({
        detalles: response.data,
      });
    });
  };
  componentDidMount = () => {
    this.loadDetalles();
  };
  componentDidUpdate = (oldProps) => {
    if (oldProps.idDoctor != this.props.idDoctor) {
      this.loadDetalles();
    }
  };
  render() {
    return (
      <div>
        <h1>Detalles Doctor {this.state.detalles.apellido}</h1>
        <ul className="list-group">
          <li className="list-group-item"><strong>ID: </strong>{this.state.detalles.idDoctor}</li>
          <li className="list-group-item"><strong>Apellido: </strong>{this.state.detalles.apellido}</li>
          <li className="list-group-item"><strong>Especialidad: </strong>{this.state.detalles.especialidad}</li>
          <li className="list-group-item"><strong>Salario: </strong>{this.state.detalles.salario}</li>
          <li className="list-group-item"><strong>ID Hospital: </strong>{this.state.detalles.idHospital}</li>
        </ul>
      </div>
    );
  }
}
