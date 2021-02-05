import React from 'react';
import Nav from './Components/Nav';
import Header from './Components/Header';
// import Main from './Components/Main';
import './reset.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      {/* <Main/> */}
    </div>
  );
}

export default App;