import React from "react";
import './Nav.scss';

function Nav() {
  return <nav className="nav">
    <div>
      <span className="YAML">YAML</span>
      <div>
        <span>홈</span>
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