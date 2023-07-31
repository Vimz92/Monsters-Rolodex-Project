import { Component } from 'react'
import React from 'react'

class App extends Component {

constructor() {
  super()

  this.state = {
    monsters : []
  }
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => { 
  this.setState({monsters : users})
  })
  .catch((err) => err)
}



  render() {
    return ( 
      <div className='App'>
        
        <input type='search' placeholder="Search Items" onChange={(e) => {
 
        }
       
        } />
        {
          this.state.monsters.map((monster)=> {
            return <h1> {monster.name} </h1> 
           
          })
        }
      </div>
    )
  }
}

export default App;