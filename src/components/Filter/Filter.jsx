import { Component } from "react";
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { FilterSection,Input } from "./Filter.styled";


export default class Filter extends Component{
    idInputFilter = nanoid();

    handlefilter = e => {
        this.props.handleFilter({filter: e.currentTarget.value.trim()});
    }

    render(){

        return <FilterSection>
        <label htmlFor={this.idInputFilter}>Find contacts by name</label>
        <Input 
        id={this.idInputFilter}
        type="text"
        onChange={this.handlefilter}
        placeholder='Name'>
        </Input>
    </FilterSection>
    }
}

Filter.propTypes={
    handleFilter: PropTypes.func.isRequired,
}