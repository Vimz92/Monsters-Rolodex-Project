
import React from "react";
import './items.styles.css';
import CardList from "../Items/card-list/cardlist";



const Items = ({monsters}) =>  {
    return(
        <div className="card-list"> 
        {monsters.map((monster) => (
        <CardList monster={monster} />
    ))}
   </div>  
    )
        
}

export default Items;