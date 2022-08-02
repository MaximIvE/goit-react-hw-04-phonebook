import React from 'react';
import { Component } from 'react';


export default class DataInputForm extends Component{
    state = {
        value: "qwery",
    }

    abc(e){
        console.log(e.nativeEvent.data);
        console.log('132', this.state);
        // this.setState({value: 'qweryx'})
    }

    render(){
        console.log(this.state);
        return (
        <div >
            <label>Name
            <input
                onChange={this.abc}
                // value={this.state.value}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            </label>
            <button type='submit' name="contacts">Contacts</button>
        </div>
    );
        
    }
}