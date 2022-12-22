import React from "react";
import { Link } from 'react-router-dom';
import "../style/routes.scss";

function Nav(props) {
  return <nav className="nav">
    <div>
      <span className="YAML">YAML</span>
      <Link to='/home'>
        {!props.home ? <div className="Nav_btn">
          <img src="https://cdn.discordapp.com/attachments/1054184662228025354/1054351295475097640/Vector-3.png" alt="home" />
          <div className="span_box">
            <span>홈</span>
          </div>
        </div> : <div className="Nav_btn_act">
          <img src="https://cdn.discordapp.com/attachments/1054184662228025354/1054351295475097640/Vector-3.png" alt="home" />
          <div className="span_box">
            <span>홈</span>
          </div>
        </div>}
      </Link>
      <Link to='/major/award'>
        {!props.major ? <div className="Nav_btn">
          <img src="https://cdn.discordapp.com/attachments/1054184662228025354/1054351295902924871/Vector-2.png" alt="전공" />
          <div className="span_box">
            <span>전공</span>
          </div>
        </div> : <div className="Nav_btn_act" style={{ display: 'block' }}>
          <div className="listsParent">
            <img src="https://cdn.discordapp.com/attachments/1054184662228025354/1054351295902924871/Vector-2.png" alt="전공" />
            <div className="span_box">
              <span>전공</span>
            </div>
          </div>
          <div className="lists">
            <Link to='/major/award'>
              {props.Award ? <p style={{ color: '#0da2a5' }}>수상경력</p> : <p style={{ color: '#999' }}>수상경력</p>}
            </Link>
            <Link to='/major/education'>
              {props.Education ? <p style={{ color: '#0da2a5' }}>대회 및 교육참가</p> : <p style={{ color: '#999' }}>대회 및 교육참가</p>}
            </Link>
            <Link to='/major/circle'>
              {props.Circle ? <p style={{ color: '#0da2a5' }}>전공동아리</p> : <p style={{ color: '#999' }}>전공동아리</p>}
            </Link>
            <Link to='/major/certification'>
              {props.Certification ? <p style={{ color: '#0da2a5' }}>자격증</p> : <p style={{ color: '#999' }}>자격증</p>}
            </Link>
            <Link to='/major/topcit'>
              {props.Topcit ? <p style={{ color: '#0da2a5' }}>TOPCIT</p> : <p style={{ color: '#999' }}>TOPCIT</p>}
            </Link>
          </div>
        </div>
        }
      </Link>
      <Link to='/humanities/award'>
        {!props.humanities ? <div className="Nav_btn">
          <img src="https://cdn.discordapp.com/attachments/1054184662228025354/1054351295072452668/Vector.png" height={'22px'} alt="인문인성" />
          <div className="span_box">
            <span>인문/인성</span>
          </div>
        </div> : <div className="Nav_btn_act" style={{ display: 'block' }}>
          <div className="listsParent">
            <img src="https://cdn.discordapp.com/attachments/1054184662228025354/1054351295072452668/Vector.png" height={'22px'} alt="인문인성" />
            <div className="span_box">
              <span>인문/인성</span>
            </div>
          </div>
          <div className="lists">
            <Link to='/humanities/award'>
              {props.Award ? <p style={{ color: '#0da2a5' }}>수상경력</p> : <p style={{ color: '#999' }}>수상경력</p>}
            </Link>
            <Link to='/humanities/bookactive'>
              {props.BookActive ? <p style={{ color: '#0da2a5' }}>독서활동</p> : <p style={{ color: '#999' }}>독서활동</p>}
            </Link>
            <Link to='/humanities/volunteer'>
              {props.Volunteer ? <p style={{ color: '#0da2a5' }}>봉사활동</p> : <p style={{ color: '#999' }}>봉사활동</p>}
            </Link>
            <Link to='/humanities/certification'>
              {props.Certification ? <p style={{ color: '#0da2a5' }}>자격증</p> : <p style={{ color: '#999' }}>자격증</p>}
            </Link>
            <Link to='/humanities/pe'>
              {props.PE ? <p style={{ color: '#0da2a5' }}>체육활동</p> : <p style={{ color: '#999' }}>체육활동</p>}
            </Link>
          </div>
        </div>}
      </Link>
      <Link to='/foreign'>
        {!props.Foreign ? <div className="Nav_btn">
          <img src="https://cdn.discordapp.com/attachments/1054184662228025354/1054351296288792607/Vector-1.png" alt="외국어" />
          <div className="span_box">
            <span>외국어</span>
          </div>
        </div> : <div className="Nav_btn_act">
          <img src="https://cdn.discordapp.com/attachments/1054184662228025354/1054351296288792607/Vector-1.png" alt="외국어" />
          <div className="span_box">
            <span>외국어</span>
          </div>
        </div>}
      </Link>
    </div>
    <button className="logout">
      <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.6875 8.25V3.5625C14.6875 2.81658 14.3912 2.10121 13.8637 1.57376C13.3363 1.04632 12.6209 0.75 11.875 0.75H4.375C3.62908 0.75 2.91371 1.04632 2.38626 1.57376C1.85882 2.10121 1.5625 2.81658 1.5625 3.5625V20.4375C1.5625 21.1834 1.85882 21.8988 2.38626 22.4262C2.91371 22.9537 3.62908 23.25 4.375 23.25H11.875C12.6209 23.25 13.3363 22.9537 13.8637 22.4262C14.3912 21.8988 14.6875 21.1834 14.6875 20.4375V15.75M10 8.25L6.25 12M6.25 12L10 15.75M6.25 12H22.1875" stroke="#0DA2A5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <span>로그아웃</span>
    </button>
  </nav >;
}

export default Nav;