
import React from "react";

import {
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Form,
    FormInput,
    Button
  } from "shards-react";

  
class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

        m_username: '',
        m_password :'',
        m_db : '',
        m_host:'',
        m_port:'',
        m_table:''
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

      console.log(this.state.m_db, this.state.m_host, this.state.m_password)

      fetch('http://localhost:8000/req2', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstParam: this.state.m_host,
          secondParam:  this.state.m_port,
          thirdParam: this.state.m_username,
          fourthParam:this.state.m_password,
          fifthParam:this.state.m_db ,
          sixthParam:this.state.m_table 

        })
      })
      
      event.preventDefault();
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
                    <label htmlFor="m_host">MYSQL Host</label>
                    <FormInput
                      id="m_host"
                      type="text"
                      name = "m_host"
                      placeholder="localhost"
                      value={this.state.m_host}
                      onChange={this.handleChange}
                      
                    />
                  </Col>
                  <Col md="6">
                    <label htmlFor="m_port">MySQL Port</label>
                    <FormInput
                      id="m_port"
                      type="text"
                      name = "m_port"
                      placeholder="3306"
                      value={this.state.m_port}
                      onChange={this.handleChange}
                    />
                  </Col>
                </Row>
    
                <Row form>
                  <Col md="6" className="form-group">
                    <label htmlFor="m_username">MYSQL Username</label>
                    <FormInput
                      id="m_username"
                      type="text"
                      name = "m_username"
                      placeholder="root"
                      value={this.state.m_username}
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Col md="6">
                    <label htmlFor="m_password">MySQL Password</label>
                    <FormInput
                      id="m_password"
                      type="password"
                      name="m_password"
                      placeholder="password"
                      value={this.state.m_password}
                      onChange={this.handleChange}
                    />
                  </Col>
                </Row>
    
                <Row form>
                  <Col md="6" className="form-group">
                    <label htmlFor="m_db">MYSQL Database</label>
                    <FormInput
                      id="m_db"
                      type="text"
                      name="m_db"
                      placeholder="DB Name"
                      value={this.state.m_db}
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Col md="6">
                    <label htmlFor="m_table">MySQL Table</label>
                    <FormInput
                      id="m_table"
                      type="text"
                      name = "m_table"
                      placeholder="Table Name"
                      value={this.state.m_table}
                      onChange={this.handleChange}
                      
                     
                    />
                  </Col>
                </Row>
    
                
    
                
                <center><Button type="submit" >Save Details</Button></center>
              </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>

        
      );
    }
  }

  export default MyForm;