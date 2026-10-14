import React, { Component } from "react";
import ServiceHospitales from "../services/ServiceHospitales";

export default class HospitalesComponent extends Component {
  service = new ServiceHospitales();
  state = {
    hospitales: [],
  };

  loadHospitales = () => {
    this.service.getHospitales().then((result) => {
      this.setState({
        hospitales: result,
      });
    });
  };

  componentDidMount = () => {
    this.loadHospitales();
  };

  render() {
    return (
      <div>
        <h1>Hospitales Component</h1>

        <table className="table table-primary table-striped table-hover">
          <thead>
            <tr>
              <td>Id</td>
              <td>Nombre</td>
              <td>Direccion</td>
              <td>Telefono</td>
              <td>Camas</td>
            </tr>
          </thead>
          <tbody>
            {this.state.hospitales.map((hospital, index) => {
              return (
                <tr key={index}>
                  <td>{hospital.idHospital}</td>
                  <td>{hospital.nombre}</td>
                  <td>{hospital.direccion}</td>
                  <td>{hospital.telefono}</td>
                  <td>{hospital.camas}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
