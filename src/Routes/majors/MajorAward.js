import React from "react";

function MajorAward(props) {
  return <div className="MajorAward">
    <div className="outsideDiv">
      <div className="innerDiv">
        <div className="header">
          <p>수상경력</p>
          <div className="score">100점</div>
        </div>
        <div className="contentBoxes">
          <Contents activity='in' headertext='GSM Festival' about='' />
          <Contents activity='in' headertext='GSM Festival' about='' />
          <Contents activity='in' headertext='GSM Festival' about='' />
          <Contents activity='in' headertext='GSM Festival' about='' />
          <Contents activity='in' headertext='GSM Festival' about='' />
          <Contents activity='in' headertext='GSM Festival' about='' />
          <Contents activity='in' headertext='GSM Festival' about='' />
          <Contents activity='in' headertext='GSM Festival' about='' />
          <Contents activity='in' headertext='GSM Festival' about='' />
          {<div className="addContents"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99993 18.4853V1.51472M1.51465 10H18.4852" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          </div>}
        </div>
      </div>
    </div>
  </div>;
}

function Contents(props) {
  return <div className="contents">
    <div className="head">
      {props.activity === 'in' ? <div className="innerschool">교내</div> : <div className="outofschool">교외</div>}
      <button>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 18L18 6M6 6L18 18" stroke="#858585" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
    <h2>{props.headertext}</h2>
    <span>서류보기
      <svg width="15" height="6" viewBox="0 0 15 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.94445V5.99997H0V4.49997H11.6076L8.93944 1.49824L10.0606 0.501697L14.0606 5.0017L13 5.94445Z" fill="#AEAEAE" />
      </svg>
    </span>
  </div>;
}

export default MajorAward;