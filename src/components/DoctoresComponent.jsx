import React, { Component } from "react";
import DetallesDoctor from "./DetallesDoctor";
import ServiceHospitales from "../services/ServiceHospitales";
export default class DoctoresComponent extends Component {
  
  service = new ServiceHospitales();

  state = {
    doctores: [],
    idDoctorSeleccionado: null,
  };
  loadDoctoresHospital = () => {
    this.service.getDoctoresHospital(this.props.idhospital).then((result) => {
      this.setState({
        doctores: result,
      });
    });
  };
  componentDidUpdate = (oldProps) => {
    if (oldProps.idhospital != this.props.idhospital) {
      this.loadDoctoresHospital();
      this.setState({
        idDoctorSeleccionado: null,
      });
    }
  };
  componentDidMount = () => {
    this.loadDoctoresHospital();
  };
  mandarDetalle = (idDoctor) => {
    this.setState({
      idDoctorSeleccionado: idDoctor,
    });
  };

  render() {
    return (
      <div>
        <h1>Doctores del hospital {this.props.idhospital}</h1>

        <table className="table table-primary table-striped table-hover">
          <thead>
            <tr>
              <th>Apellido</th>
              <th>Especialidad</th>
              <th>Salario</th>
              <th>Hospital</th>
              <th>Boton</th>
            </tr>
          </thead>
          <tbody>
            {this.state.doctores.map((doctor, index) => {
              return (
                <tr key={index}>
                  <td>{doctor.apellido}</td>
                  <td>{doctor.especialidad}</td>
                  <td>{doctor.salario}</td>
                  <td>{doctor.idHospital}</td>
                  <td>
                    <button
                      className="btn btn-light"
                      onClick={() => {
                        this.mandarDetalle(doctor.idDoctor);
                      }}
                    >
                      Detalle
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {this.state.idDoctorSeleccionado !== null && (
          <DetallesDoctor idDoctor={this.state.idDoctorSeleccionado} />
        )}
      </div>
    );
  }
}
