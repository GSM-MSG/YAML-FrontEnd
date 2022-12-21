import React from "react";
import { Link } from 'react-router-dom';
import "../style/routes.css"

function Nav(props) {
  return <nav className="nav">
    <div>
      <span className="YAML">YAML</span>
      <Link to='/home'>
        {!props.home && <div className="Nav_btn">
          <img src="https://cdn.discordapp.com/attachments/1054184662228025354/1054351295475097640/Vector-3.png" alt="home" />
          <div className="span_box">
            <span>홈</span>
          </div>
        </div>}
        {props.home && <div className="Nav_btn_act">
          <img src="https://cdn.discordapp.com/attachments/1054184662228025354/1054351295475097640/Vector-3.png" alt="home" />
          <div className="span_box">
            <span>홈</span>
          </div>
        </div>}
      </Link>
      <Link to='/major'>
        {!props.major && <div className="Nav_btn">
          <img src="https://cdn.discordapp.com/attachments/1054184662228025354/1054351295902924871/Vector-2.png" alt="전공" />
          <div className="span_box">
            <span>전공</span>
          </div>
        </div>}
        {props.major && <div className="Nav_btn_act">
          <img src="https://cdn.discordapp.com/attachments/1054184662228025354/1054351295902924871/Vector-2.png" alt="전공" />
          <div className="span_box">
            <span>전공</span>
          </div>
        </div>
        }
      </Link>
      <Link to='/humanities'>
        {!props.humanities && <div className="Nav_btn">
          <img src="https://cdn.discordapp.com/attachments/1054184662228025354/1054351295072452668/Vector.png" height={'24px'} alt="인문인성" />
          <div className="span_box">
            <span>인문/인성</span>
          </div>
        </div>}
        {props.humanities && <div className="Nav_btn_act" style={{ display: 'block' }}>
          <div className="HumanitiesParent">
            <img src="https://cdn.discordapp.com/attachments/1054184662228025354/1054351295072452668/Vector.png" alt="인문인성" />
            <div className="span_box">
              <span>인문/인성</span>
            </div>
          </div>
          <div className="Humanities">
            <p>수상경력</p>
            <p>독서활동</p>
            <p>봉사활동</p>
            <p>자격증</p>
            <p>체육활동</p>
          </div>
        </div>}
      </Link>
      <Link to='/foreign'>
        {!props.Foreign && <div className="Nav_btn">
          <img src="https://cdn.discordapp.com/attachments/1054184662228025354/1054351296288792607/Vector-1.png" alt="외국어" />
          <div className="span_box">
            <span>외국어</span>
          </div>
        </div>}
        {props.Foreign && <div className="Nav_btn_act">
          <img src="https://cdn.discordapp.com/attachments/1054184662228025354/1054351296288792607/Vector-1.png" alt="외국어" />
          <div className="span_box">
            <span>외국어</span>
          </div>
        </div>}
      </Link>
    </div>
  </nav >;
}

export default Nav;