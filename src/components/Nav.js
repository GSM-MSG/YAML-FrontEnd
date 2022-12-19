import React from "react";
import './Nav.scss';

function Nav() {
  return <nav className="nav">
    <div>
      <span className="YAML">YAML</span>
      <div>
        <img height={'20px'} src="https://cdn.discordapp.com/attachments/1054184662228025354/1054351295475097640/Vector-3.png" />
        <div>
          <span>홈</span>
        </div>
      </div>
      <div>
        <span>전공</span>
      </div>
      <div>
        <span>인문인성</span>
      </div>
      <div>
        <span>외국어</span>
      </div>
    </div>
  </nav>;
}

export default Nav;