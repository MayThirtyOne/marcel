import React from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  Button
} from "shards-react";



  function handleClick(e) {
    e.preventDefault();
    console.log(e);
    console.log('The link was clicked.');
  

  }




const CompleteFormExample = () => (

  

  
  <ListGroup flush>
    <ListGroupItem className="p-3">
      <Row>
        <Col>
          <Form>
            <Row form>
              <Col md="6" className="form-group">
                <label htmlFor="feEmailAddress">Billbee Username</label>
                <FormInput
                  id="feEmailAddress"
                  type="email"
                  placeholder="Username"
                />
              </Col>
              <Col md="6">
                <label htmlFor="fePassword">Billbee Password</label>
                <FormInput
                  id="fePassword"
                  type="password"
                  placeholder="Password"
                />
              </Col>
            </Row>

            <FormGroup>
              <label htmlFor="feInputAddress">Billbee API Token</label>
              <FormInput id="feInputAddress" placeholder="API Token" />
            </FormGroup>

            
            <center><Button type="submit" onClick={handleClick} >Save Details</Button></center>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
);



export default CompleteFormExample;
