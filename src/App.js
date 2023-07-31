import { Component } from 'react'
import React from 'react'
import CardList from './components/card-list/card-list'
import SearchBox from './components/search-box/search-box'

class App extends Component  {

 constructor(){
  super()
  this.state = {
    monsters : [],
    searchField: ''
  }
 }

 componentDidMount () {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then((users) => {
    this.setState(() => {
      return {monsters : users}
    })
  })
 }

onSearchChange = (e)=> {
  console.log('onSearch')
  const searchField = e.target.value.toLocaleLowerCase();
  
  this.setState(() => {
   return { searchField }
  })
}


 render(){

  const { monsters, searchField } = this.state;
  const { onSearchChange } = this;
  const filteredArray = monsters.filter((monster) => {
          return monster.name.toLocaleLowerCase().includes(searchField); 
        });
  return (
    <>
    <div className='App'>
      
      
     {/* { filteredArray.map((monster, id) => {
      return <h1 key={id}>{monster.name} </h1>
     })} */}
     <SearchBox onChangeHandler={onSearchChange} placeholder="search" />

     <CardList monsters={filteredArray} />

    
    </div>  
    </>
  )
  
  

 }
}
  
export default App