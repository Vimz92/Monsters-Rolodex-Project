import React from "react";

const CardList = (props) => {
    const { monster } = props
    console.log(monster, 'monster');
        return( 
            <div className="card-container"> 
            <img alt={`monster ${monster.name}`} src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} />
             <h1> {monster.email}</h1>
             <h1> {monster.name}</h1>
           </div> 
        )
}

export default CardList;




// classcomponent
// import { Component } from "react";
// import React from "react";

// class CardList extends Component {


//     render(){
//         const {name, id, email } = this.props.monster
//         return( 
//             <div className="card-container"> 
//             <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
//              <h1> {email}</h1>
//              <h1> {name}</h1>
//            </div> 
//         )
//     }
// }

// export default CardList;
       
       
