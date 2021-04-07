import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../styles/bootstrap.min.css';

import logo from "../images/logo.gif";


const ItemCard = (props) => {
    const item = props.item;
    return ( <
        div class = "card mb-4" >
        <
        img src = ""
        alt = "" / >
        <
        div class = "card-body" >
        <
        h2 >
        <
        Link to = { `/showitem/${item._id}` } > { item.title } <
        /Link> < /
        h2 >


        <
        p > { item.description } < /p > <
        p > { item.status } < /p> 

        <
        p > { item.timestamp } < /p>  

        <
        /
        div > <
        /div>
    )
};


export default ItemCard;