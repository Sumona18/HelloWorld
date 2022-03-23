import React from 'react';
import Header from './components/Header';
import Flexing  from  './components/fllexing';
import Status  from  './components/status';
import './styles.css';

function App(){
  return(
    <div className='head' >
      <Header />
      <Flexing />
      <Status />
    </div>
  );
}
export default App;