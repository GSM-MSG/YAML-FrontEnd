import React from "react";
import { Link } from 'react-router-dom';
import "../style/routes.css"

import homeicon from './imgs/home.png';
import monitoricon from './imgs/monitor.png';
import bookicon from './imgs/book.png';
import charactericon from './imgs/character.png';

function Nav() {
  return <nav className="nav">
    <div>
      <span className="YAML">YAML</span>
      <Link to='/home'>
<<<<<<< HEAD:src/Routes/Nav.js
        <div className="Nav_btn">
          <img src="https://cdn.discordapp.com/attachments/1054184662228025354/1054351295475097640/Vector-3.png" alt="home" />
          <div className="span_box">
=======
        <div>
          <img src={homeicon} alt="home" />
          <div>
>>>>>>> b121f129c2c7645b9ba130ddda8f96e4914eb526:src/components/Nav.js
            <span>홈</span>
          </div>
        </div>
      </Link>
      <Link to='/major'>
<<<<<<< HEAD:src/Routes/Nav.js
        <div className="Nav_btn">
          <img src="https://cdn.discordapp.com/attachments/1054184662228025354/1054351295902924871/Vector-2.png" alt="전공" />
          <div className="span_box">
=======
        <div>
          <img src={monitoricon} alt="전공" />
          <div>
>>>>>>> b121f129c2c7645b9ba130ddda8f96e4914eb526:src/components/Nav.js
            <span>전공</span>
          </div>
        </div>
      </Link>
      <Link to='/humanities'>
<<<<<<< HEAD:src/Routes/Nav.js
        <div className="Nav_btn">
          <img src="https://cdn.discordapp.com/attachments/1054184662228025354/1054351295072452668/Vector.png" alt="인문인성" />
          <div className="span_box">
=======
        <div>
          <img src={bookicon} alt="인문인성" />
          <div>
>>>>>>> b121f129c2c7645b9ba130ddda8f96e4914eb526:src/components/Nav.js
            <span>인문인성</span>
          </div>
        </div>
      </Link>
      <Link to='/foreign'>
<<<<<<< HEAD:src/Routes/Nav.js
        <div className="Nav_btn">
          <img src="https://cdn.discordapp.com/attachments/1054184662228025354/1054351296288792607/Vector-1.png" alt="외국어" />
          <div className="span_box">
=======
        <div>
          <img src={charactericon} alt="외국어" />
          <div>
>>>>>>> b121f129c2c7645b9ba130ddda8f96e4914eb526:src/components/Nav.js
            <span>외국어</span>
          </div>
        </div>
      </Link>
    </div>
  </nav>;
}

export default Nav;