import React from "react";
import { Link } from "react-router-dom";
import Header from '../../pages/Header';
import {
    FaSearch
}from "react-icons/fa";
import { Button, Container, Form, FormGroup, Input,Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle,
    CardFooter,
    
    } from "reactstrap";

const ViewDepartmentByName=()=>{
    return(
        <div>
             < Header />
            <h2  className="text-center my-5">View Department By Id</h2>
            <Container style={{paddingLeft:"300px"}}>
            <Form className="form" style={{width:"70%"}}>
                <FormGroup>
                    <label style={{fontWeight:"bold"}} className="my-2 " for="departmentId">Enter Department Id</label>
                    <Input 
                    type="number" 
                    placeholder="Enter Id here" 
                    name="departmentId" 
                    id="departmentId" 
                    //style={{width: 400}}
                    />

                </FormGroup>
                </Form>
                </Container>

                <Container className="text-center my-4">
                    <Button  color="success bt">
                    <Link className="list-group-item list-group-item-action" tag="a" to="/owner/viewdepartmentbyname/result">Search  </Link>
                    </Button>
                </Container>
                

                    
                
                
            

        </div>
    )
}

export default ViewDepartmentByName;