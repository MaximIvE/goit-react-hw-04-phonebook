import { Component } from "react";
import { nanoid } from 'nanoid'


export default class Filter extends Component{
    idInputFilter = nanoid();

    handlefilter = e => {
        this.props.handleFilter({filter: e.currentTarget.value});
    }

    render(){

        return <div>
        <label htmlFor={this.idInputFilter}>Find contacts by name</label>
        <input 
        id={this.idInputFilter}
        type="text"
        onChange={this.handlefilter}>

        </input>
    </div>
    }
}