import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import MenuComponent from "./MenuComponent";
import DoctoresComponent from "./DoctoresComponent";

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
        </Routes>
      </BrowserRouter>
    );
  }
}
