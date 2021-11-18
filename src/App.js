// import React, { Component } from 'react';
// import { useState, useEffect } from 'react';

import { useGetContactsQuery } from './redux/contacts/contactsSlice';
import FormContact from './components/FormContact';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter/Filter';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import 'modern-normalize';
import './App.css';

export default function App() {
  const { isFetching, isError } = useGetContactsQuery();

  return (
    <>
      <div className="App">
        <h2>Phonebook</h2>
        <FormContact />
        <h2>Contacts</h2>
        <Filter />
        {isFetching && (
          <Box sx={{ width: '100%',
          padding: '20px' }}>
          <LinearProgress />
        </Box>
        )}
        {isError && (
          <p>Ups, we broke down &#128555; Please try again</p>
        )}
        <ContactsList />
      </div>
    </>
  );
}
