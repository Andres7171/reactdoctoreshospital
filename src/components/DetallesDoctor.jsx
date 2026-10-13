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
        <h1>DetallesDoctor</h1>
        <ul>
          <li>{this.state.detalles.idDoctor}</li>
          <li>{this.state.detalles.apellido}</li>
          <li>{this.state.detalles.especialidad}</li>
          <li>{this.state.detalles.salario}</li>
          <li>{this.state.detalles.idHospital}</li>
        </ul>
      </div>
    );
  }
}
