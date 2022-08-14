import React from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import Header from "../../pages/Header";

const AddInventory = () => {
    return (
        <div>
            <Header />
            <div className="div2">

                <h1 className="text-center my-3">Fill Inventory Details</h1>
                <Form className="form">
                    <FormGroup>
                        <label for="inventoryId">Inventory Id</label>
                        <Input
                            type="number"
                            placeholder="Enter Id here"
                            name="inventoryId"
                            id="inventoryId"

                        />
                    </FormGroup>
                    <FormGroup>
                        <label for="itemName">Item Name </label>
                        <Input
                            type="text"
                            placeholder="Enter Name here"
                            name="itemName"
                            id="itemName" />
                    </FormGroup>
                    <FormGroup>
                        <label for="itemQuantity">Quantity </label>
                        <Input
                            type="number"
                            placeholder="Enter Size here"
                            name="itemQuantity"
                            id="itemQuantity" />
                    </FormGroup>

                    <Container className="text-center">
                        <Button color="success" className="bt">Submit</Button>
                        <Button color="dark " className="bt" style={{ margin: 8 }}>clear</Button>
                    </Container>
                </Form>

            </div>
        </div>
    )
}

export default AddInventory;