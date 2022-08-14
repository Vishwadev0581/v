import axios from "axios";
import { Link } from "react-router-dom";
import React from "react";
import {
   Card,
   CardBody,
   CardTitle,
   CardText,
   CardSubtitle,
   CardFooter,
   Button,
   Container,
} from "reactstrap";
import base_url from "../../api/bootapi";
 
const Department = ({ department }) => {
 
   const deleteDepartment = (id) => {
       axios.delete(`${base_url}ManageDepartment/deletedepartment/${id}`, {
           headers: {
               "Access-Control-Allow-Headers": "Content-Type",
               "Access-Control-Allow-Methods": "*"
           }
       }).then(
           (response) => {
               //success
               console.log(response.data);
               if (response.data == "Successfully deleted") {
                   window.open("http://localhost:3000/owner/viewall", "_top");
               }
           },
           (error) => {
               console.log(error);
           }
       );
   };
 
   return (
       <Card className="text-center">
           <CardBody>
               <CardSubtitle className="fw-bold">{department.name}</CardSubtitle>
               <br></br>
               <CardText>Department Id : {department.id}</CardText>
               <CardText>Department HOD : {department.hodName}</CardText>
               <CardText>HOD Phone No. : {department.hodPhoneNo}</CardText>
               <CardText>Department Size : {department.sizeOfDepartment}</CardText>
 
               <Container className="text-center">
                   <Button style={{ color: "white", backgroundColor: "#003333" }}><Link className="list-group-item list-group-item-action" tag="a" to={"/owner/viewAll/update/" + department.name}>Update</Link></Button>
                   <Button className="mx-2" style={{ color: "white", backgroundColor: "#999900" }} onClick={() => { deleteDepartment(department.id); }}>Delete</Button>
               </Container>
           </CardBody>
       </Card>
   );
 
};
 
export default Department;
