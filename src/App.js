// import React, { Component } from 'react';
// import { useState, useEffect } from 'react';

import { useGetContactsQuery } from './redux/contacts/contactsSlice';
import FormContact from './components/FormContact';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter/Filter';
import 'modern-normalize';
import './App.css';

export default function App() {
  // const { data, isFetching, error } = useGetContactsQuery();

  return (
    <>
      <div className="App">
        <h2>Phonebook</h2>
        <FormContact />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList/>
      </div>
    </>
  );
}