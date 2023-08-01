import { Component } from "react";
import React from "react";

class CardList extends Component {


    render(){
        const { id, name, email} = this.props.monster
        
        return( 
            <div className="card-container"> 
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
             <h1> {email}</h1>
             <p> {name}</p>
           </div> 
        )
    }
}

export default CardList;
       
