import React, { Component } from 'react';
import { Container } from "./App.styled";

import DataInputForm from '../DataInputForm/DataInputForm';
import Section from '../Section/Section';
import Contacts from '../Contacts/Contacts';
import Filter from 'components/Filter/Filter';


export default class App extends Component{
  state={
    contacts: [
      {name: "max", number: "35-14-28"},
      {name: "bob", number: "35-14-29"},
      {name: "lina", number: "35-14-30"},
      {name: "abc", number: "35-14-31"},
      {name: "def", number: "35-14-32"},
      {name: "ghk", number: "35-14-33"},
    ],
    filter: "",
  }

  addContact=(card)=>{
    const {name} = card;
    if (!this.isUnique(name)){
      alert("fsgdsg");
      return;
    }
    this.setState((prevState) => {return{contacts: [card, ...prevState.contacts]}});
  }

  isUnique(name){
    let unique = true;
    for (const contact of this.state.contacts){
      if (contact.name === name){unique = false; }
    }
    return unique;
  }

  handleFilter=(filter)=>{
    this.setState(filter);
  }

  contactsByFilter(){
    return this.state.contacts.filter((user)=>{return user.name})
  }

  removeConactApp=(id)=>{
    console.log("Delete element width id=", id, " for state");
    const newContacts = this.state.contacts.filter(contact => {return ((contact.name + contact.number) !== id )});
    console.log(newContacts);
    this.setState({contacts: newContacts});
    
  }

  render(){  
    const normalizeTodos = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizeTodos));
    console.log(this.state)
    return (
      <Container >
        
          <Section>Phonebook 
            <DataInputForm 
            addContact={this.addContact}
            />
          </Section>
          {this.state.contacts.length > 0 
          ? <Section>Contacts 
              <Filter handleFilter={this.handleFilter}/>
              <Contacts 
              contacts={visibleContacts}
              removeConactApp={this.removeConactApp}
              />
            </Section>
          : <p>No information.</p>}
        
      </Container>
    
    )
  };
}

