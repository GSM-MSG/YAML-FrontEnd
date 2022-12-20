import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Intropage from './components/intropage'

import Page from './Routes/page';
import Home from './Routes/home';
import Major from './Routes/major';
import Humanities from './Routes/humanities';
import Foreign from './Routes/foreign';
import Nav from './Routes/Nav';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Navigate to='/home' replace={true} />} />
          <Route path='/intro' element={<Intropage />} />
          <Route path='/home' element={<>
            <div className="page">
              <Nav />
              <div className="main">
                <Home />
              </div>
            </div>
          </>} />
          <Route path='/major' element={<><Page /><Major /></>} />
          <Route path='/humanities' element={<><Page /><Humanities /></>} />
          <Route path='/foreign' element={<><Page /><Foreign /></>} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
