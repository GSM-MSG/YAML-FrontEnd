import React from "react";
import { Link } from 'react-router-dom';
import './Nav.scss';

import homeicon from './imgs/home.png';
import monitoricon from './imgs/monitor.png';
import bookicon from './imgs/book.png';
import charactericon from './imgs/character.png';

function Nav() {
  return <nav className="nav">
    <div>
      <span className="YAML">YAML</span>
      <Link to='/home'>
        <div>
          <img src={homeicon} alt="home" />
          <div>
            <span>홈</span>
          </div>
        </div>
      </Link>
      <Link to='/major'>
        <div>
          <img src={monitoricon} alt="전공" />
          <div>
            <span>전공</span>
          </div>
        </div>
      </Link>
      <Link to='/humanities'>
        <div>
          <img src={bookicon} alt="인문인성" />
          <div>
            <span>인문인성</span>
          </div>
        </div>
      </Link>
      <Link to='/foreign'>
        <div>
          <img src={charactericon} alt="외국어" />
          <div>
            <span>외국어</span>
          </div>
        </div>
      </Link>
    </div>
  </nav>;
}

export default Nav;