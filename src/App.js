
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';



function App() {
  return (
    <div className="app">
      <div className="content">
       

       <Routes>
      <Route path="/" element={<Homepage />} />
    
      {/* Add more routes as needed */}
    </Routes>
       
        
      </div>
      
    </div>
  );
}

export default App;
