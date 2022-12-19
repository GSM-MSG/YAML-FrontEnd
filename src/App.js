import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Page from './components/page';
import Intropage from './components/intropage'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/intro' element={<Intropage />} />
          <Route path='/home' element={<Page />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
