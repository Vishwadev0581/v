import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input} from "reactstrap";
import Header from "../../pages/Header";

const ViewInventoryByName=()=>{
    return(
        <div >
            <Header/>
            <Container style={{paddingLeft:"300px"}}>
            <h2 className="text-center my-5" style={{paddingRight:"260px"}}>View Inventory By Name</h2>
            <Form className="form" style={{width:"70%"}}>
                <FormGroup>
                    <label style={{fontWeight:"bold"}} className="my-2" for="itemName">Enter Inventory Name</label>
                    <Input 
                    type="text" 
                    placeholder="Enter Name here" 
                    name="itemName" 
                    id="itemName" 
                    //style={{width: 400}}
                    />

                </FormGroup>
                
                </Form>
                </Container>
                <Container className="text-center my-4" style={{paddingLeft:"80px"}}>
                    <Button  color="success bt">
                    <Link className="list-group-item list-group-item-action" tag="a" to="/manager/viewinventorybyname/result">Search  </Link>
                    </Button>
                </Container>

               
        </div>
    )
}
export default ViewInventoryByName;