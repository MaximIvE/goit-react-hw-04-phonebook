import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { Container, Message } from "./App.styled";

import DataInputForm from '../DataInputForm/DataInputForm';
import Section from '../Section/Section';
import Contacts from '../Contacts/Contacts';
import Filter from 'components/Filter/Filter';

const  App = () => {

  const [contacts, setContacts] = useState(localContacts());
  const [filter, setFilter] = useState("");

  // defaultContacts = [
  //   {name: 'Rosie Simpson', number: '459-12-56'},
  //   {name: 'Hermione Kline', number: '443-89-12'},
  //   {name: 'Eden Clements', number: '645-17-79'},
  //   {name: 'Annie Copeland', number: '227-91-26'},
  // ];

  //"Махінацію" з цією функцією прийшлось зробити із-за строгого режима. Під час перезавантаження сторінки useEffect запускався два рази і перезатирав значення LocaleStorage на пустий масив
  function localContacts(){
    console.log("Перший запуск");
    const data = localStorage.getItem('contacts');
    console.log('data', data);
    if(!data)return[];
    const parseContacts = JSON.parse(data);
    if (parseContacts)return parseContacts;
  };

  useEffect(()=>{
    localStorage.setItem('contacts', JSON.stringify(contacts));
  },[contacts]);

  const addContact= useCallback((name, number)=>{
    if (contacts.find(contact => contact.name === name)){
      alert(name + " is already in contacts.");
      return;
    };
    setContacts(prevState=>{return [{name, number}, ...prevState]});
  },[contacts]);

  const handleFilter=(filter)=>{
    setFilter(filter);
  };

  const removeConactApp=useCallback((id)=>{
    const newContacts = contacts.filter(contact => {return ((contact.name) !== id )});
    setContacts(newContacts);
  },[contacts]);
 
  const normalizeTodos = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizeTodos));
  
    return (
      <Container >
          <Section>Phonebook 
            {<DataInputForm 
            addContact={addContact}
            />}
          </Section>
          {contacts.length > 0 
          ? <Section>Contacts 
              <Filter handleFilter={handleFilter}/>
              <Contacts 
              contacts={visibleContacts}
              removeConactApp={removeConactApp}
              />
            </Section>
          : <Message>No information.</Message>}
      </Container>
    );
};

export default App;