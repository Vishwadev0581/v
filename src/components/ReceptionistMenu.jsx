import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaRegBell,
    FaLogin
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { Button, Container } from 'reactstrap';


const OwnerMenu = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/owner/home",
            name:"Home",
            icon:<FaTh/>
        },
        
        
        {
            path:"/owner/adddepartment",
            name:"Add Department",
            icon:<FaShoppingBag/>
        },
        {
            path:"/owner/updatedepartment",
            name:"Update Department",
            icon:<FaShoppingBag/>
        },
        {
            path:"/owner/deletedepartment",
            name:"Delete Department",
            icon:<FaShoppingBag/>
        },
        
        {
            path:"/owner/adduser",
            name:"Add User",
            icon:<FaUserAlt/>
        },
        {
            path:"/owner/updateuser",
            name:"Update User",
            icon:<FaUserAlt/>
        },
        {
            path:"/owner/deleteuser",
            name:"Delete User",
            icon:<FaUserAlt/>
        },
        
        {
            path:"/owner/retrievereport",
            name:"Retrieve Report",
            icon:<FaRegChartBar/>
        },
        
        
        {
            path:"/owner/notifications",
            name:"Notifications",
            icon:<FaThList/>
        },
        
        {
            path:"/logout",
            name:"Logout",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="container1">
            
           <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Receptionist </h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassname="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
               <Container className="text-center my-1" >
       
           <Button  className="col-4" style={{color: "white" , backgroundColor: "#330033"}}>
            {/* Notifications */}
            <FaRegBell />
            </Button><br></br>
           
           <Button  color="danger" className="my-3 col-4">Logout</Button>
       </Container>
               
           </div>
           <main className='bgimage '>
            {children}
            </main>
        </div>
    );
};

export default OwnerMenu;