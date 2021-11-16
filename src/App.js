// import React, { Component } from 'react';
// import { useState, useEffect } from 'react';
import 'modern-normalize';
import './App.css';

import ReduxLearnPokemon from './components/reduxLearnPokemon';

import FormContact from './components/FormContact';
import ContactsList from './components/ContactsList';
import ContactListItem from './components/ContactListItem/ContactListItem';
import Filter from './components/Filter/Filter';
import { useGetContactsQuery } from './redux/contacts/contactsSlice';

export default function App() {
  const { data: contacts, isFetching, error } = useGetContactsQuery();

  return (
    <>
      <div className="App">
        {/* <ReduxLearnPokemon/> */}
        {/* <h2>Phonebook</h2> */}
        <FormContact contacts={contacts} />
        {/* <h2>Contacts</h2> */}
        {/* <Filter /> */}
        <ContactsList>
          {contacts && contacts.map(contact => <ContactListItem key={contact.id} contact={contact}/>)}
        </ContactsList>
      </div>
    </>
  );
}

// console.log(state)