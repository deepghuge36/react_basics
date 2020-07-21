import React from 'react';
import './App.css';
import Props from './components/Props';
import State from './components/State';
import EventTarget from './components/EventTarget';
import Increment from './components/Increment';
import Hover from './components/Hover';

function App() {
  return (
    <div>
      {/* n following example we can use the props this will send to Props Components */}
    <Props name="dipak" />
      <State />
      <EventTarget />
      <Increment name="dipak"/>
      <Hover name = "dipak"/>
    </div>);
}

export default App;
