import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input} from "reactstrap";
import Header from "../../../pages/Header";

const ViewRoomByRoomNo=()=>{
    return(
        <div>
            <Header/>
            <Container style={{paddingLeft:"300px"}}>
            <h2 className="text-center my-3" style={{paddingRight:"260px"}}>View Room by Room Number</h2>
            <Form className="form" style={{width:"70%"}}>
                <FormGroup>
                    <h5><label style={{fontWeight:"bold"}} className="my-2" for="roomno">Enter Room No</label></h5>
                    <Input 
                    type="number" 
                    placeholder="Enter here" 
                    name="roomno" 
                    id="roomno" 
                    //style={{width: 400}}
                    />

                </FormGroup>
                </Form>
                </Container>
                <Container className="text-center my-4 " style={{paddingLeft:"80px"}}>
                    <Button  color="success bt">
                    <Link className="list-group-item list-group-item-action" tag="a" to="/manager/viewroombyroomno/result">Search</Link>
                    </Button>
                </Container>
        </div>
    )
}

export default ViewRoomByRoomNo;