import React from 'react';
import './App.css';
import Greet from './components/greetings';

const App:React.FC = ()  =>{
  return (
    <div className="App">
      <h1>hello world welcome to my world</h1>
      <Greet />
    </div>
  );
}

export default App;
