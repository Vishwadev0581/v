import React from "react";
import Header from '../../pages/Header';
import { Link } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input,Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle,
    CardFooter,
    
    } from "reactstrap";

const ViewDepartmentResult=()=>{
    return(
        <>
        <div>
        < Header />
        <h2 className="text-center my-3">Department Result</h2>
        <br></br>
        <div className="carddiv">
                <Card className="text-center card2">
            <CardBody>
                <CardSubtitle className="fw-bold card2" style={{backgroundColor:"#99E2EB"}}>Kitchen</CardSubtitle>
                <br></br>
                <CardText>Department Size : 25</CardText>
                <CardText>Department HOD : Rajesh Kumar</CardText>
                <CardText>HOD Phone No. : 9990661578</CardText>
                
                <Container className="text-center">
                    <Button  style={{color: "white" , backgroundColor: "#003333"}}>Update</Button>
                    <Button className="mx-2" style={{color: "white" , backgroundColor: "#999900"}}>Delete</Button>
                </Container>
            </CardBody>
        </Card>
        </div>
                </div>
        </>
    )
}

export default ViewDepartmentResult;