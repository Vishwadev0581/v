

import React from "react";
import Header from "../../../pages/Header";
import { Button, Container, Form, FormGroup, Input} from "reactstrap";

const DeleteUser=()=>{
    return(
        <div>
            < Header />
            <div className="div2">
            <h2 className="text-center my-5">Delete User</h2>
            <Form className="form">
                <FormGroup>
                    <label  className="my-2" for="username">Enter Username/Email</label>
                    <Input 
                    type="email" 
                    placeholder="Enter here" 
                    name="username" 
                    id="username" 
                    />

                </FormGroup>
                </Form>
                <Container className="text-center my-4">
                    <Button style={{color: "white" , backgroundColor: "#999900"}}>Delete</Button>
                </Container>
                </div>
        </div>
    )

}

export default DeleteUser;