import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Info from "./Info"
import Stock from "./Stock"
import Promos from "./Promos"
import Modal from 'react-bootstrap/Modal'
import {Col, Row, Card } from 'react-bootstrap'
import {Button, Tab } from "react-bootstrap";
import Tabs from 'react-bootstrap/Tabs'
import API from "../../utils/API"



class ModalComponent extends React.Component {
    
    state={
      
        name: "",
        category: "",
        subcategory:"",
        image:"",
        price: 0,
        description: "",
        stock: {}
      
    }
  
    inputChangeHandler=(e)=>{
      console.log(e.target)
      let {name, value} = e.target
      this.setState({
        [name]: value
      })      
      
    }
    handleSubmit=(event) =>{
      event.preventDefault();

      // make axio request to create new product

      // close the modal after save changes
      this.props.close("productModal")
    }
  
  
    render() {
      return (
        <>

        <Modal show={this.props.state} onHide={(e)=>this.props.close("productModal")}>
        <Modal.Header closeButton>
        <Button variant="secondary" size="sm"><i className="far fa-edit pr-1"></i>Edit</Button>
        </Modal.Header>
        <Modal.Body>

          <Tabs defaultActiveKey="Info" transition={false} id="noanim-tab-example">
            <Tab eventKey="Info" title="Info" >
              <Info inputChangeHandler={this.inputChangeHandler}/>
            </Tab>
            <Tab eventKey="Stock" title="Stock">
              <Stock />
            </Tab>
            <Tab eventKey="Promos" title="Promos">
              <Promos />
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
         

            
            <Button variant="secondary" onClick={(e)=>this.props.close("productModal")}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
        
      );
    }
  }
  
export default ModalComponent;