import { Component } from "react";
import React from "react";
import './items.styles.css';
import CardList from "../Items/card-list/cardlist";



class Items extends Component {
     


render(){
    const { monsters } = this.props
    return( 
    <div className="card-list"> 
      {monsters.map((monster) => {
    return(
        <CardList monster={monster} />

    )
   })}
   </div>
     

    )}
}

export default Items;