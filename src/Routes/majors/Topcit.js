import React, { useState } from "react";

function Topcit() {
  const [topcit, setTopcit] = useState(false);
  const [topcitP, setTopcitP] = useState(0);
  return <div className="Topcit" onClick={() => {
    topcit && setTopcit(0);
  }}>
    <div className="outsideDiv">
      <div className="contents" onClick={() => {
        setTopcit(e => !e);
      }}>
        {parseInt(topcitP[1]) ? <p className="chosen">{topcitP[0]}</p> : <p>TOPCIT</p>}
        <button><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1.5L6 6.5L1 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </button>
        {topcit ? <div onClick={() => { console.log().then(() => setTopcit(false)) }}>
          <option value='5' onClick={(e) => setTopcitP([e.target.innerText, e.target.value])}>240 이상</option>
          <option value='4' onClick={(e) => setTopcitP([e.target.innerText, e.target.value])}>220 ~ 239</option>
          <option value='3' onClick={(e) => setTopcitP([e.target.innerText, e.target.value])}>200 ~ 219</option>
          <option value='2' onClick={(e) => setTopcitP([e.target.innerText, e.target.value])}>180 ~ 199</option>
          <option value='1' onClick={(e) => setTopcitP([e.target.innerText, e.target.value])}>160 ~ 179</option>
          <option value='0' onClick={(e) => setTopcitP([e.target.innerText, e.target.value])}>없음</option>
        </div> : ''}
      </div>
      <span>TOPCIT 점수에 따른 총점을 확인 해주세요.</span>
      <div className="buttons">

      </div>
    </div>
  </div>;
}

export default Topcit;