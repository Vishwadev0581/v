import React, { useState, handleClick, useStyles } from "react";
import { Link } from "react-router-dom";
import Header from '../../pages/Header';

import { Button, Container, Form, FormGroup, Input} from "reactstrap";




const AddDepartment=()=>{
    return (
        <div >
            < Header />
            
            <div className="div2">
            <h1 className="text-center my-3" style={{Color:"#001547"}}>Fill Department Details</h1>

            <Form className="form">
                <FormGroup>
                    <label for="departmentId">Department Id</label>
                    <Input 
                    type="number" 
                    placeholder="Enter Id here" 
                    name="departmentId" 
                    id="departmentId" 
                    //style={{width: 400}}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="departmentName">Department Name </label>
                    <Input 
                    type="text" 
                    placeholder="Enter Name here" 
                    name="departmentName" 
                    id="departmentName" />
                </FormGroup>
                <FormGroup>
                    <label for="departmentSize">Department Size </label>
                    <Input 
                    type="number" 
                    placeholder="Enter Size here" 
                    name="departmentSize" 
                    id="departmentSize" />
                </FormGroup>
                <FormGroup>
                    <label for="hodName">HOD Name</label>
                    <Input 
                    type="text" 
                    placeholder="Enter Hod Name here" 
                    name="hodName" 
                    id="hodName" />
                </FormGroup>
                <FormGroup>
                    <label for="hodPhoneNo">HOD Phone No</label>
                    <Input 
                    type="tel" 
                    placeholder="Enter Phone here" 
                    name="hodPhoneNo" 
                    id="hodPhoneNo" />
                </FormGroup>

                {/* <UncontrolledAlert>
                    Department Added Successfully!
                </UncontrolledAlert> */}

                <Container className="text-center">
                    <Button color="success" className="bt">
                        Submit
                        
                    </Button>
                    <Link className="button " tag="a" to="/adddepartment">
                    <Button color="dark " className="bt" style={{margin:8}}>clear</Button></Link>
                </Container>
            </Form>
            </div>

        </div>
    );
};

export default AddDepartment;