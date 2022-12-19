import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';

import Intropage from './components/intropage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Intropage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
