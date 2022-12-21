import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Intropage from './components/intropage'

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
              <Nav home={true} major={false} humanities={false} Foreign={false} />
              <div className="main">
                <Home />
              </div>
            </div>
          </>} />
          <Route path='/major' element={<>
            <div className="page">
              <Nav home={false} major={true} humanities={false} Foreign={false} />
              <div className="main">
                <Major />
              </div>
            </div>
          </>} />
          <Route path='/humanities' element={<>
            <div className="page">
              <Nav home={false} major={false} humanities={true} Foreign={false} Award={true} BookActive={false} Volunteer={false} Certification={false} PE={false} />
              <div className="main">
                <Humanities />
              </div>
            </div>
          </>} />
          <Route path='/foreign' element={<>
            <div className="page">
              <Nav home={false} major={false} humanities={false} Foreign={true} />
              <div className="main">
                <Foreign />
              </div>
            </div>
          </>} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
