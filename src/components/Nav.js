import React from "react";
import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  return <nav className="nav">
    <div>
      <span className="YAML">YAML</span>
      <Link to='/home'>
        <div>
          <img src="https://cdn.discordapp.com/attachments/1054184662228025354/1054351295475097640/Vector-3.png" alt="home" />
          <div>
            <span>홈</span>
          </div>
        </div>
      </Link>
      <Link to='/major'>
        <div>
          <img src="https://cdn.discordapp.com/attachments/1054184662228025354/1054351295902924871/Vector-2.png" alt="전공" />
          <div>
            <span>전공</span>
          </div>
        </div>
      </Link>
      <Link to='/humanities'>
        <div>
          <img src="https://cdn.discordapp.com/attachments/1054184662228025354/1054351295072452668/Vector.png" alt="인문인성" />
          <div>
            <span>인문인성</span>
          </div>
        </div>
      </Link>
      <Link to='/foreign'>
        <div>
          <img src="https://cdn.discordapp.com/attachments/1054184662228025354/1054351296288792607/Vector-1.png" alt="외국어" />
          <div>
            <span>외국어</span>
          </div>
        </div>
      </Link>
    </div>
  </nav>;
}

export default Nav;