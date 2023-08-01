import { Component } from "react";
import React from "react";
import SearchBar from "./components/searchbar/searchbar";
import Items from "./components/Items/item";
import './App.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters : [],
      searchField : ''
    } 
      
  }


componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then((users) => 
  this.setState(() => {
    return {monsters: users}
  }))
}

onSearchChange = (e) => {
  const searchField = e.target.value.toLocaleLowerCase();
  this.setState(() => {
    return {searchField}
  })
}

render () {
  const{ searchField } = this.state
  const{ onSearchChange } = this;
  const filteredItems = this.state.monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField)
  })

  return(
    <> 
    <h1> Monsters Rolodex </h1>
    <SearchBar onChangeHandler={onSearchChange} placeholder="search items" className="monster-search-box" />
    <div className="App"> 

    <Items monsters={filteredItems} />
    </div>
    </>
  )
}

}

export default App;