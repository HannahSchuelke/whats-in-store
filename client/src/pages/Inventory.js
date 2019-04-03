import React from "react";
import Jumbotron from "../components/Jumbotron";
import Layout from "../components/LayoutForInventory.js";




function Inventory(){
    return(<>
        <Jumbotron pageName="INVENTORY" instructions="Click to view and edit products."/>
        <Layout/>
    </>)
}

export default Inventory;
