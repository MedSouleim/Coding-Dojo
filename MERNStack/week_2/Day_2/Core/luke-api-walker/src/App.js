import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Form from './Components/Form';
import Display from './Components/Display';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/display/:category/:id" element={<Display />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
}

export default App;
