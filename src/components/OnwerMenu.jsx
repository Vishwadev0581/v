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
import{MdLogout}from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
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
            path:"/owner/viewdepartmentbyname",
            name:"View Dept. by Name",
            icon:<FaShoppingBag/>
        },
        {
            path:"/owner/viewall",
            name:"View All Dept.",
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
        
       
    ]
    return (
        <div className="container1">
            
           <div style={{width: isOpen ? "300px" : "60px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Owner </h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassname="active" style={{textDecoration:"none"}}>
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                       </NavLink>
                    
                   ))
               }
            <br/>
            <br/>
               
               <Container className="text-center my-1" >
               <Link  tag="a" to="/owner/notifications">
                    <Button  className="col-4" style={{color: "white" , backgroundColor: "#330033"}}>
            {/* Notifications */}
            
                    <FaRegBell style={{overflow:"auto", width:"100%", float:"none", display:"block"}}/>
            
                    </Button>
            </Link>
            <br></br>
            <Link  tag="a" to="/logout">
           <Button  color="danger" className="my-3 col-4">
            {/* Logout */}
            <MdLogout style={{overflow:"auto", width:"100%", float:"none", display:"block"}}/>
            </Button></Link>
       </Container>
       
               
           </div>
           <main className='bgimage '>
            {children}
            </main>
        </div>
    );
};

export default OwnerMenu;