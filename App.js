// src/App.js
import React from 'react';
import Button from './Button'; // Import the Button component
import Toolbar2 from './Toolbar2';
import Toolbar from './Toolbar';



function App() {
  return (
    <div className="App">
      <h1>React Events Lab</h1>
      <Button /> {/* Use the Button component */}  
     <h1>Reading Props in Event Handlers</h1>
     <h1>Passing Event Handlers as Props</h1>
      <Toolbar2 />
     <Toolbar />
     </div>
  
  );
}

export default App;