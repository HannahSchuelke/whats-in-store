import React, { Component } from "react";
import {Form} from 'react-bootstrap'

function SortingBar(){
    return(<>
        <Form controlId="exampleForm.ControlSelect2" className="mb-3 mx-0" inline>
            <Form.Control as="select" style={{"width": "100%"}} >
            <option value="default">Default</option>
            <option value="priceLtoH">Price L-H</option>
            <option value="priceHtoL">Price H-L</option>
            <option value="stockHtoL">Stock L-H</option>
            <option value="stockHtoL">Stock H-L</option>
            <option value="NameAtoZ">Name A-Z</option>
            <option value="NameZtoA">Name Z-A</option>
            <option value="recent">Recent</option>
            </Form.Control>
        </Form>
    </>)
}

export default SortingBar