import React from "react";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";
import Header from "../../pages/Header";

const RetrieveReport =()=>{
    return(
<div>
    <Header/>
        <div className="div2 my-5" >
            <Card className="text-center card2">

                <CardBody bg-primary>
                    <CardTitle tag="h5" className="display-5">
                        Download Report From Here
                    </CardTitle>
                    <CardText className="display-7">
                        Please Choose the report Type

                    </CardText>
                    
                    <Button outline color="primary">Income Report</Button>
                    <Button outline color="primary" style={{margin:15}}>Staff Report</Button>
                </CardBody>
            </Card>
            </div>
        </div>
    )

    
};

export default RetrieveReport;