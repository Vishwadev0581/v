import React from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import Header from "../../../pages/Header";

const SetRates = () => {
    return (
        <div>
            <Header />
            <div className="div2">

                <h1 className="text-center my-3">Set Rates Here</h1>
                <Form className="form">
                    <FormGroup>
                        <label for="type">Room Type</label>
                        <Input
                            type="text"
                            placeholder="Enter type here"
                            name="type"
                            id="type"

                        />
                    </FormGroup>
                    <FormGroup>
                        <label for="capacity">Capacity </label>
                        <Input
                            type="text"
                            placeholder="Enter capacity here"
                            name="capacity"
                            id="capacity" />
                    </FormGroup>
                    <FormGroup>
                        <label for="check_in_time">Check In Time </label>
                        <Input
                            type="text"
                            placeholder="Enter here"
                            name="check_in_time"
                            id="check_in_time" />
                    </FormGroup>
                    <FormGroup>
                        <label for="check_out_time">Check out Time </label>
                        <Input
                            type="text"
                            placeholder="Enter here"
                            name="check_out_time"
                            id="check_out_time" />
                    </FormGroup>
                    <FormGroup>
                        <label for="first_night_rate">First Night Rates </label>
                        <Input
                            type="number"
                            placeholder="Enter rates here"
                            name="first_night_rate"
                            id="first_night_rate" />
                    </FormGroup>
                    <FormGroup>
                        <label for="extension_rate">Extension Rates </label>
                        <Input
                            type="number"
                            placeholder="Enter rates here"
                            name="extension_rate"
                            id="extension_rate" />
                    </FormGroup>

                    <Container className="text-center ">
                        <Button color="success bt">Submit</Button>
                        <Button color="dark bt" style={{ margin: 8 }}>clear</Button>
                    </Container>
                </Form>
            </div>
        </div>
    )
}

export default SetRates;