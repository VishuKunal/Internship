
import './App.css';
// Importing modules
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TriggerContext } from './context/TriggerContext';

// Importing components
import Taskbar from './components/Taskbar';

function App() {

  const [triggerResponse, setTriggerResponse] = useState([]);

  return (
    <div className="App">
      <TriggerContext.Provider value={{triggerResponse, setTriggerResponse}}>
        <BrowserRouter>
          <Taskbar />
          </BrowserRouter>
      </TriggerContext.Provider>

    </div>
  );
}

export default App;
