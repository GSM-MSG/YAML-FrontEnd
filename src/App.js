import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Page from './components/page';
import Intropage from './components/intropage'
import Home from './components/home';
import Major from './components/major';
import Humanities from './components/humanities';
import Foreign from './components/foreign';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/home' replace={true} />} />
          <Route path='/intro' element={<Intropage />} />
          <Route path='/home' element={<><Page /><Home /></>} />
          <Route path='/major' element={<><Page /><Major /></>} />
          <Route path='/humanities' element={<><Page /><Humanities /></>} />
          <Route path='/foreign' element={<><Page /><Foreign /></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
