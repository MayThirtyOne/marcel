
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

  
class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

        busername: '',
        bpass :'',
        btoken : ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({ 
        // Computed property names 
        // keys of the objects are computed dynamically 
        [event.target.name] : event.target.value 
      })
      
    }
  
    handleSubmit(event) {

      console.log(this.state.busername, this.state.bpass, this.state.btoken)

          fetch('http://localhost:8000/req', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstParam: this.state.busername,
        secondParam:  this.state.bpass,
        thirdParam: this.state.btoken
      })
    })
      
      
      event.preventDefault();

      var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("X-Billbee-Api-Key", "2789D049-32B2-4C5E-8828-15B3EFFE2519");
myHeaders.append("Authorization", "Basic aW5mb0BoZWFsYXguZGU6bWFyY2VsQDEyMw==");
myHeaders.append("Cookie", ".ASPXANONYMOUS=aGeE7wvlr1i2yooUOGAFLYZbreyoZ97yxYzaRJ84n5Vxh1nQ6b14crQ8i2JRwVxOZrI-tIQtQaQCT3Zae5nX9kmarmUbwhPZwhaGJHWapD5-iyUxHpEhw2QDojfonf7LERb4Pw2");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://cors-anywhere.herokuapp.com/" + "https://app.billbee.io/api/v1/orders", requestOptions)
  .then(response => response.json())
  .then(result => {
    var myStringArray = result.Data[0];
    console.log(myStringArray);
    var arrayLength = myStringArray.length;
    console.log(Object.keys(myStringArray))
    
    // console.log(result.Data[0])
  })
  .catch(error => console.log('error', error));


    }
  
    render() {
      return (
        <ListGroup flush>
    <ListGroupItem className="p-3">
      <Row>
        <Col>
          <Form onSubmit = {this.handleSubmit}>
            <Row form>
              <Col md="6" className="form-group">
                <label htmlFor="busername">Billbee Username</label>
                <FormInput
                  id="busername"
                  name="busername"
                  type="text"
                  placeholder="Username"
                  value={this.state.busername}
                  onChange={this.handleChange}
                />
              </Col>
              <Col md="6">
                <label htmlFor="bpass">Billbee Password</label>
                <FormInput
                  id="bpass"
                  name = "bpass"
                  type="password"
                  placeholder="Password"
                  value={this.state.bpass}
                  onChange={this.handleChange}
                />
              </Col>
            </Row>

            <FormGroup>
              <label htmlFor="btoken">Billbee API Token</label>
              <FormInput id="btoken" placeholder="API Token"
              value={this.state.btoken}
              name = "btoken"
              onChange={this.handleChange} />
            </FormGroup>

            
            <center><Button type="submit"  >Save Details</Button></center>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>

        
      );
    }
  }

  export default MyForm;