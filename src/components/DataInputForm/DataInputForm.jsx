import { render } from '@testing-library/react';
import React, { Component } from 'react';


export default class DataInputForm extends Component{


    render(){
        return (
        <div>
            <label>Name
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            </label>
            <button type='submit'>Add contact</button>
        </div>
     
    );
        
    }
}