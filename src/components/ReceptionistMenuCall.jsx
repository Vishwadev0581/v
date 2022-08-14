import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard";

import AddDepartment from "../Services/Owner/AddDepartment";

import ReceptionistMenu from "./ReceptionistMenu";




const ReceptionistMenuCall=()=>{
    return(
        // <BrowserRouter>
        <ReceptionistMenu>
        
        <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Dashboard />} />
          
              <Route path="/adddepartment" element={<AddDepartment />} />
              
        </Routes>
        
        </ReceptionistMenu>
        // </BrowserRouter>
    )
}

export default ReceptionistMenuCall;