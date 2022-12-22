import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Intropage from './components/intropage'

import Home from './Routes/home';
import Major from './Routes/major';
import Foreign from './Routes/foreign';
import Nav from './Routes/Nav';

import Award from './Routes/humanities/Award';
import BookActive from './Routes/humanities/BookActive';
import Volunteer from './Routes/humanities/Volunteer';
import Certification from './Routes/humanities/Certification';
import PE from './Routes/humanities/PE';

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

          <Route path='/humanities' element={<Navigate to='/humanities/award' replace={true} />} />
          <Route path='/humanities/award' element={<>
            <div className="page">
              <Nav home={false} major={false} humanities={true} Foreign={false} Award={true} BookActive={false} Volunteer={false} Certification={false} PE={false} />
              <div className="main">
                <Award />
              </div>
            </div>
          </>} />
          <Route path='/humanities/bookactive' element={<>
            <div className="page">
              <Nav home={false} major={false} humanities={true} Foreign={false} Award={false} BookActive={true} Volunteer={false} Certification={false} PE={false} />
              <div className="main">
                <BookActive />
              </div>
            </div>
          </>} />
          <Route path='/humanities/volunteer' element={<>
            <div className="page">
              <Nav home={false} major={false} humanities={true} Foreign={false} Award={false} BookActive={false} Volunteer={true} Certification={false} PE={false} />
              <div className="main">
                <Volunteer />
              </div>
            </div>
          </>} />
          <Route path='/humanities/certification' element={<>
            <div className="page">
              <Nav home={false} major={false} humanities={true} Foreign={false} Award={false} BookActive={false} Volunteer={false} Certification={true} PE={false} />
              <div className="main">
                <Certification />
              </div>
            </div>
          </>} />
          <Route path='/humanities/pe' element={<>
            <div className="page">
              <Nav home={false} major={false} humanities={true} Foreign={false} Award={false} BookActive={false} Volunteer={false} Certification={false} PE={true} />
              <div className="main">
                <PE />
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
