import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import Header from "../../../pages/Header";

const ViewStaffByCode = () => {
    return (
        <div>
            <Header />
            <Container style={{paddingLeft:"300px"}}>
                <h2 className="text-center my-5" style={{paddingRight:"260px"}}>View Staff By Code</h2>
                <Form className="form" style={{width:"70%"}}>
                    <FormGroup>
                        <h5><label className="my-2" for="staffId">Enter Staff code</label></h5>
                        <Input
                            type="number"
                            placeholder="Enter code here"
                            name="staffId"
                            id="staffId"
                        //style={{width: 400}}
                        />

                    </FormGroup>
                </Form>
            </Container>
            <Container className="text-center my-4">
                <Button color="success bt">
                    <Link className="list-group-item list-group-item-action" tag="a" to="/manager/viewstaffbycode/result">Search</Link>
                </Button>
            </Container>
        </div>
    )
}

export default ViewStaffByCode;