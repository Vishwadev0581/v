import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard";

import AddDepartment from "../Services/Owner/AddDepartment";


import ManagerMenu from "./ManagerMenu";
import AddInventory from "../Services/Manager/AddInventory";
import ViewInventoryByName from "../Services/Manager/ViewInventoryByName";
import ViewInventoryResult from "../Services/Manager/ViewInventoryResult";
import ViewAllInventory from "../Services/Manager/ViewAllInventory";
import AddStaff from "../Services/Manager/ManageStaff/AddStaff";
import ViewStaffByCode from "../Services/Manager/ManageStaff/ViewStaffByCode";
import ViewStaffResult from "../Services/Manager/ManageStaff/ViewStaffResult";
import ViewAllStaff from "../Services/Manager/ManageStaff/ViewAllStaff";
import AddRoom from "../Services/Manager/Manage Room/AddRoom";
import ViewRoomByRoomNo from "../Services/Manager/Manage Room/ViewRoomByRoomNo";
import SearchRoomNoResult from "../Services/Manager/Manage Room/SearchRoomNoResult";
import SetRates from "../Services/Manager/SetRates/SetRates";



const ManagerMenuCall=()=>{
    return(
        // <BrowserRouter>
        <ManagerMenu>
        
        <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/home" element={<Dashboard />} />
          
              <Route path="/addinventory" element={<AddInventory/>} />
              <Route path="/viewinventorybyname" element={<ViewInventoryByName/>}/>
              <Route path="/viewinventorybyname/result" element={<ViewInventoryResult/>}/>
              <Route path="/viewinventory" element={< ViewAllInventory/>} />
              
              <Route path="/addstaff" element={<AddStaff/>} />
              <Route path="/viewstaffbycode" element={<ViewStaffByCode/>}/>
              <Route path="/viewstaffbycode/result" element={<ViewStaffResult/>}/>
              <Route path="/viewstaff" element={<ViewAllStaff/>}/>

              <Route path="/addroom" element={<AddRoom/>}/>
              <Route path="/viewroombyroomno" element={<ViewRoomByRoomNo/>}/>
              <Route path="/viewroombyroomno/result" element={<SearchRoomNoResult/>}/>

              <Route path="/setrates" element={<SetRates/>}/>
               

        </Routes>
        
        </ManagerMenu>
        // </BrowserRouter>
    );
};

export default ManagerMenuCall;