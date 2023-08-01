import { Component } from "react";
import React from "react";
import './searchbar.styles.css'

class SearchBar extends Component {


render(){
    return( 
        <input 
        type="search" 
        className={`search-box ${this.props.className}`}
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler} 
        /> 
    )
}


}

export default SearchBar;