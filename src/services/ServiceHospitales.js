import axios from "axios";
import Global from "../Global";

export default class ServiceHospitales {

    insertarHospital(hospital){
        return new Promise((resolve)=>{
            let url=Global.urlHospitales
            let request = 'api/hospitales'
            axios.post(url+request,hospital).then((response)=>{
                resolve(response)
            })
        })
    }

  getHospitales() {
    return new Promise(function (resolve) {
      let url = Global.urlHospitales;
      let request = "api/hospitales";
      axios.get(url + request).then((response) => {
        resolve(response.data);
      });
    });
  }

  getDoctoresHospital(idHospital){
    return new Promise((resolve)=>{
        let url = Global.urlDoctores
        let request='api/doctores/doctoreshospital/'+idHospital
        axios.get(url+request).then((response)=>{
            resolve(response.data)
        })
    })
  }

  /*getDoctor(idDoctor){
    return new Promise((resolve)=>{
        let url = Global.urlDoctores
        let request='api/doctores/'+idDoctor
        axios.get(url+request).then((response)=>{

        })
    })
  }*/


}
