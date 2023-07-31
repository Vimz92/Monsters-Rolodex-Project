import { Component } from "react";


class CardList extends Component {


    render(){
        console.log('render2')
        const { monsters } = (this.props)
        return (
            <h1> { monsters.map((array, id) => {
                return <h1 key={id}> {array.name} </h1>
            })
                
                } </h1>)
    } 
}

export default CardList;