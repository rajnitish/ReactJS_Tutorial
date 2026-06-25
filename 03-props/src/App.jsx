import './App.css';
import React from 'react'
import Card from './components/card';
import { Jitu } from './components/card';

const App = () => {
  return (
    <div className="parent">
      <Card user = "Nitish Raj" age = {25}/>
      <Card user = "Shreyanshi Priya" age = {11}/>
    </div>
  )
}

export default App
