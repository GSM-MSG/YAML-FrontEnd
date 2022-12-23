import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Intropage from './components/intropage'

import Home from './Routes/home';
import Foreign from './Routes/foreign';
import Nav from './Routes/Nav';

import HumanitiesAward from './Routes/humanites/humanitiesAward';
import BookActive from './Routes/humanites/BookActive';
import Volunteer from './Routes/humanites/Volunteer';
import Certification from './Routes/humanites/HumanitiesCertification';
import PE from './Routes/humanites/PE';

import MajorAward from './Routes/majors/MajorAward';
import Education from './Routes/majors/Education';
import MajorCertification from './Routes/majors/MajorCertification';
import MajorCircle from './Routes/majors/MajorCircle';
import Topcit from './Routes/majors/Topcit';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Navigate to='/home' replace={true} />} />
          <Route path='/intro' element={<Intropage />} />
          <Route path='/home' element={<>
            <div className="page">
              <Nav home={true} />
              <div className="main">
                <Home />
              </div>
            </div>
          </>} />
          <Route path='/major' element={<Navigate to='/major/award' replace={true} />} />
          <Route path='/major/award' element={<>
            <div className="page">
              <Nav major={true} Award={true} />
              <div className="main">
                <MajorAward />
              </div>
            </div>
          </>} />
          <Route path='/major/education' element={<><div className="page">
            <Nav major={true} Education={true} />
            <div className="main">
              <Education />
            </div>
          </div></>} />
          <Route path='/major/circle' element={<><div className="page">
            <Nav major={true} Circle={true} />
            <div className="main">
              <MajorCircle />
            </div>
          </div></>} />
          <Route path='/major/certification' element={<><div className="page">
            <Nav major={true} Certification={true} />
            <div className="main">
              <MajorCertification />
            </div>
          </div></>} />
          <Route path='/major/topcit' element={<><div className="page">
            <Nav major={true} Topcit={true} />
            <div className="main">
              <Topcit />
            </div>
          </div></>} />

          <Route path='/humanities' element={<Navigate to='/humanities/award' replace={true} />} />
          <Route path='/humanities/award' element={<>
            <div className="page">
              <Nav humanities={true} Award={true} />
              <div className="main">
                <HumanitiesAward />
              </div>
            </div>
          </>} />
          <Route path='/humanities/bookactive' element={<>
            <div className="page">
              <Nav humanities={true} BookActive={true} />
              <div className="main">
                <BookActive />
              </div>
            </div>
          </>} />
          <Route path='/humanities/volunteer' element={<>
            <div className="page">
              <Nav humanities={true} Volunteer={true} />
              <div className="main">
                <Volunteer />
              </div>
            </div>
          </>} />
          <Route path='/humanities/certification' element={<>
            <div className="page">
              <Nav humanities={true} Certification={true} />
              <div className="main">
                <Certification />
              </div>
            </div>
          </>} />
          <Route path='/humanities/pe' element={<>
            <div className="page">
              <Nav humanities={true} PE={true} />
              <div className="main">
                <PE />
              </div>
            </div>
          </>} />
          <Route path='/foreign' element={<>
            <div className="page">
              <Nav Foreign={true} />
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
