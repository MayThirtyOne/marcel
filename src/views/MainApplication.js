import React from "react";
import { Container } from "shards-react";
import CompleteFormExample1 from "../components/components-overview/CompleteFormExample1";
import MyForm from "../components/components-overview/MyForm";
import {
    Alert
  } from "shards-react";

  
const Errors = () => (

  

<Container fluid className="px-0">
      <Alert className="mb-0">
        <i className="fa fa-info mx-2"></i> Billbee Connection Settings
      </Alert>

      <MyForm/>

      <Alert className="mb-0">
        <i className="fa fa-info mx-2"></i> MYSQL Connection Settings
      </Alert>

      <CompleteFormExample1/>




    </Container>



 
);

export default Errors;
