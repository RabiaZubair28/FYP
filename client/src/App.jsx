import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Intructor from "./Pages/Instructor.jsx"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/instructor/:id" element={<Intructor />} />
      </Routes>
    </Router>
  );
}

export default App;
