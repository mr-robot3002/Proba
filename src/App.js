import React from 'react';
import ReactDOM from 'react-dom/client';

import './App.css';
import './css/header.css';
import './css/modal.css';
import Header from './Header';
import Main1 from './Main1';


export default function App() {
  return(
    <section>
      <Header />
      <Main1 />
    </section>
  )
};