import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import MenuComponent from "./MenuComponent";
import DoctoresComponent from "./DoctoresComponent";
import CreateHospital from "./CreateHospital";
import HospitalesComponent from "./HospitalesComponent";
import EjemplosServiceComponent from "./EjemplosServiceComponent";

export default class Router extends Component {
  render() {

    function DoctoresElement(){
        let {idhospital}=useParams()
        return(<DoctoresComponent idhospital={idhospital}/>)
    }
    return (
      <BrowserRouter>
        <MenuComponent />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/doctores/:idhospital" element={<DoctoresElement/>}/>
          <Route path="/createhospital" element={<CreateHospital/>}/>
          <Route path="/hospitales" element={<HospitalesComponent/>}/>
          <Route path="/ejemplos" element={<EjemplosServiceComponent/>}/>

        </Routes>
      </BrowserRouter>
    );
  }
}
