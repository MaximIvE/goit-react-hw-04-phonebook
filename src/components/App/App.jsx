import React, { Component } from 'react';
import { Container,Message } from "./App.styled";

import DataInputForm from '../DataInputForm/DataInputForm';
import Section from '../Section/Section';
import Contacts from '../Contacts/Contacts';
import Filter from 'components/Filter/Filter';


export default class App extends Component{
  state={
    contacts: [],
    filter: "",
  }

  // defaultContacts = [
  //   {name: 'Rosie Simpson', number: '459-12-56'},
  //   {name: 'Hermione Kline', number: '443-89-12'},
  //   {name: 'Eden Clements', number: '645-17-79'},
  //   {name: 'Annie Copeland', number: '227-91-26'},
  // ];

  //Запускається 1 раз під час першого монтування компонента, перед render()
  componentDidMount(){
    const contacts = localStorage.getItem('contacts');
    if (contacts){
      const parseContacts = JSON.parse(contacts);
      this.setState({contacts: parseContacts})
    }
  };

  //Цей метод запускається кожен раз перед render(), коли стейт компонента оновився
  componentDidUpdate(prevState){
    if(this.state.contacts !== prevState.contacts){ 
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };

  addContact=(card)=>{
    const {name} = card;
    if (this.state.contacts.find(contact => contact.name === name)){
      alert(name + " is already in contacts.");
      return;
    }
    this.setState((prevState) => {return{contacts: [card, ...prevState.contacts]}});
  }

  handleFilter=(filter)=>{
    this.setState(filter);
  }

  contactsByFilter(){
    return this.state.contacts.filter((user)=>{return user.name})
  }

  removeConactApp=(id)=>{
    const newContacts = this.state.contacts.filter(contact => {return ((contact.name) !== id )});
    this.setState({contacts: newContacts});
    
  }

  sort = (arrOfObj) => {
    const arr = [...arrOfObj];
    arr.sort(function (a, b){ 
      if(a.name > b.name){ return 1};
      if(a.name < b.name){ return -1};
      return 0;
    });
    return arr;
  }

  render(){  
    const normalizeTodos = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizeTodos));
    const sortVisibleContacts = this.sort(visibleContacts);
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
              contacts={sortVisibleContacts}
              removeConactApp={this.removeConactApp}
              />
            </Section>
          : <Message>No information.</Message>}
      </Container>
    )
  };
}
