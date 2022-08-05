import React from 'react';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { DataInput,ButtonForm } from './DataInputForm.styled';


export default class DataInputForm extends Component{
    state = {
        name: "",
        number: "",
    }

    idInputName = nanoid();
    idInputNumber = nanoid();

    handleSubmit = e => {
        e.preventDefault();
        this.props.addContact({name: this.state.name, number: this.state.number})
        this.setState({name: '', number: '',})
    }

    handleInputChange=(e)=>{
        this.setState({[e.target.name]: e.currentTarget.value})
    }

    addContact=()=>{
        this.props.addContact({name: this.state.name, number: this.state.number});
    }

    render(){
        return (
        <DataInput onSubmit={this.handleSubmit}>
            <label htmlFor={this.idInputName}>Name</label>
            <input
                type="text"
                id={this.idInputName}
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={this.state.name}
                onChange={this.handleInputChange}
            />
            
            <label htmlFor={this.idInputNumber}>Number</label>
            <input
                onChange={this.handleInputChange}
                value={this.state.number}
                id={this.idInputNumber}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                />
            <ButtonForm 
            type='submit' 
            name="contacts" 
            >Add contact
            </ButtonForm>
        </DataInput>
    );
    }
}

DataInputForm.propTypes={
    addContact: PropTypes.func.isRequired,
}