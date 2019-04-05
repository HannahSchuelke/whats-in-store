import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, Dropdown, Card, Button, Form } from "react-bootstrap";

// Utils
import CategoryAPI from "../../utils/API/categories"




class AddCategory extends Component {
  state={
    categories: []
  }

  componentDidMount(){
    //axio request to find all categories in DB
    CategoryAPI.getCategories()
    .then(res=>{
        console.log(res.data)
        // set state
        this.setState({
            categories: res.data
        })

    })
  }
  
  render(){
    return (
      <>
      <Form.Group className="mb-3 mx-0">
            <Form.Control 
            required
            name="category" 
            as="select" 
            style={{"width": "100%"}} 
            onChange={this.props.dropDownSelectHandler}>
            <option value="" disabled selected>Select a category</option>
            {this.state.categories.map(category=>(
            <option key={category.name} value={category._id}>{category.name}</option>  ))}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Please select a category.
            </Form.Control.Feedback>
      </Form.Group>
</>
    )
  }
}

export default AddCategory

