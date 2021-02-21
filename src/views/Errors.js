import React, { Component } from 'react'
import Select from 'react-select'
import axios from 'axios'
import {
  Alert
} from "shards-react";
import { Button } from "shards-react";

export default class Errors extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      id: "",
      name: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  

 async getOptions(){
    const res = await axios.get('http://localhost:8000/getOptions')
    const data = res.data

    const options = data.map(d => ({
      "value" : d.id,
      "label" : d.name

    }))

    this.setState({selectOptions: options})

  }

  handleChange(e){
   this.setState({id:e.value, name:e.label})
  }

  


  componentDidMount(){
      this.getOptions()
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log(this.state.name);
    console.log('Button click!');

    fetch('http://localhost:8000/create_db', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstParam: this.state.name

        })
      })

    //send POST data to PythonServer for further processing
    
  };


  render() {
    return (
      
      <div>
        <Alert className="mb-0">
        <i className="fa fa-info mx-2"></i> Billbee Input Variable 
      </Alert>
      <br></br>

        <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} /> <br></br>
        <center><Button onClick = {this.handleSubmit}> Primary</Button></center>
        <p>You have selected <strong>{this.state.name}</strong> whose id is <strong>{this.state.id}</strong></p>

      </div>
    )
  }
}