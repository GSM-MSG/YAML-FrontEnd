import React, { useState } from "react";

function Foreign() {
  const [toeic, setToeic] = useState(0);
  const [toeicP, setToeicP] = useState(0); /*p는 point를 의미, 0번은 텍스트, 1번은 값이 들어간다.*/
  const [tofle, setTofle] = useState(0);
  const [tofleP, setTofleP] = useState(0);
  const [teps, setTeps] = useState(0);
  const [tepsP, setTepsP] = useState(0);
  const [speak, setSpeak] = useState(0);
  const [speakP, setSpeakP] = useState(0);
  const [opic, setOpic] = useState(0);
  const [opicP, setOpicP] = useState(0);
  const [jpt, setJpt] = useState(0);
  const [jptP, setJptP] = useState(0);
  const [cpt, setCpt] = useState(0);
  const [cptP, setCptP] = useState(0);
  const [hsk, setHsk] = useState(0);
  const [hskP, setHskP] = useState(0);

  return <div className="foreign">
    <div className="outsideDiv" onClick={() => {
      toeic && setToeic(0);
      tofle && setTofle(0);
      teps && setTeps(0);
      speak && setSpeak(0);
      opic && setOpic(0);
      jpt && setJpt(0);
      cpt && setCpt(0);
      hsk && setHsk(0);
    }}>
      <div className="contents" onClick={() => setToeic((e) => !e)}>
        {parseInt(toeicP[1]) ? <p className="chosen">{toeicP[0]}</p> : <p>TOEIC</p>}
        <button><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1.5L6 6.5L1 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </button>
        {toeic ? <div onClick={() => { console.log().then(() => setToeic(false)) }}>
          <option value='6' onClick={(e) => setToeicP([e.target.innerText, e.target.value])}>700 이상</option>
          <option value='5' onClick={(e) => setToeicP([e.target.innerText, e.target.value])}>630 ~ 699</option>
          <option value='4' onClick={(e) => setToeicP([e.target.innerText, e.target.value])}>560 ~ 629</option>
          <option value='3' onClick={(e) => setToeicP([e.target.innerText, e.target.value])}>490 ~ 559</option>
          <option value='2' onClick={(e) => setToeicP([e.target.innerText, e.target.value])}>420 ~ 489</option>
          <option value='1' onClick={(e) => setToeicP([e.target.innerText, e.target.value])}>350 ~ 419</option>
          <option value='0' onClick={(e) => setToeicP([e.target.innerText, e.target.value])}>없음</option>
        </div> : ''}
      </div>

      <div className="contents" onClick={() => setTofle((e) => !e)}>
        {parseInt(tofleP[1]) ? <p className="chosen">{tofleP[0]}</p> : <p>TOFlE</p>}
        <button><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1.5L6 6.5L1 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </button>
        {tofle ? <div onClick={() => { console.log().then(() => setTofle(false)) }}>
          <option value='6' onClick={(e) => setTofleP([e.target.innerText, e.target.value])}>80 이상</option>
          <option value='5' onClick={(e) => setTofleP([e.target.innerText, e.target.value])}>75 ~ 79</option>
          <option value='4' onClick={(e) => setTofleP([e.target.innerText, e.target.value])}>70 ~ 74</option>
          <option value='3' onClick={(e) => setTofleP([e.target.innerText, e.target.value])}>65 ~ 69</option>
          <option value='2' onClick={(e) => setTofleP([e.target.innerText, e.target.value])}>60 ~ 64</option>
          <option value='1' onClick={(e) => setTofleP([e.target.innerText, e.target.value])}>55 ~ 59</option>
          <option value='0' onClick={(e) => setTofleP([e.target.innerText, e.target.value])}>없음</option>
        </div> : ''}
      </div>

      <div className="contents" onClick={() => setTeps((e) => !e)}>
        {parseInt(tepsP[1]) ? <p className="chosen">{tepsP[0]}</p> : <p>TEPS</p>}
        <button><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1.5L6 6.5L1 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </button>
        {teps ? <div onClick={() => { console.log().then(() => setTeps(false)) }}>
          <option value='6' onClick={(e) => setTepsP([e.target.innerText, e.target.value])}>555 이상</option>
          <option value='5' onClick={(e) => setTepsP([e.target.innerText, e.target.value])}>520 ~ 554</option>
          <option value='4' onClick={(e) => setTepsP([e.target.innerText, e.target.value])}>480 ~ 519</option>
          <option value='3' onClick={(e) => setTepsP([e.target.innerText, e.target.value])}>440 ~ 479</option>
          <option value='2' onClick={(e) => setTepsP([e.target.innerText, e.target.value])}>400 ~ 439</option>
          <option value='1' onClick={(e) => setTepsP([e.target.innerText, e.target.value])}>360 ~ 399</option>
          <option value='0' onClick={(e) => setTepsP([e.target.innerText, e.target.value])}>없음</option>
        </div> : ''}
      </div>

      <div className="contents" onClick={() => setSpeak((e) => !e)}>
        {parseInt(speakP[1]) ? <p className="chosen">{speakP}</p> : <p>SPEAKING</p>}
        <button><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1.5L6 6.5L1 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </button>
        {speak ? <div onClick={() => { console.log().then(() => setSpeak(false)) }}>
          <option value='4' onClick={(e) => setSpeakP([e.target.innerText, e.target.value])}>LEVEL 6</option>
          <option value='3' onClick={(e) => setSpeakP([e.target.innerText, e.target.value])}>LEVEL 5</option>
          <option value='2' onClick={(e) => setSpeakP([e.target.innerText, e.target.value])}>LEVEL 4</option>
          <option value='1' onClick={(e) => setSpeakP([e.target.innerText, e.target.value])}>LEVEL 3</option>
          <option value='0' onClick={(e) => setSpeakP([e.target.innerText, e.target.value])}>없음</option>
        </div> : ''}
      </div>

      <div className="contents" onClick={() => setOpic((e) => !e)}>
        {parseInt(opicP[1]) ? <p className="chosen">{opicP[0]}</p> : <p>OPIC</p>}
        <button><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1.5L6 6.5L1 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </button>
        {opic ? <div onClick={() => { console.log().then(() => setOpic(false)) }}>
          <option value='4' onClick={(e) => setOpicP([e.target.innerText, e.target.value])}>int 2 이상</option>
          <option value='3' onClick={(e) => setOpicP([e.target.innerText, e.target.value])}>int 1</option>
          <option value='2' onClick={(e) => setOpicP([e.target.innerText, e.target.value])}>int low</option>
          <option value='1' onClick={(e) => setOpicP([e.target.innerText, e.target.value])}>Novice High</option>
          <option value='0' onClick={(e) => setOpicP([e.target.innerText, e.target.value])}>없음</option>
        </div> : ''}
      </div>

      <div className="contents" onClick={() => setJpt((e) => !e)}>
        {parseInt(jptP[1]) ? <p className="chosen">{jptP[0]}</p> : <p>JPT</p>}
        <button><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1.5L6 6.5L1 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </button>
        {jpt ? <div onClick={() => { console.log().then(() => setJpt(false)) }}>
          <option value='6' onClick={(e) => setJptP([e.target.innerText, e.target.value])}>700 이상</option>
          <option value='5' onClick={(e) => setJptP([e.target.innerText, e.target.value])}>630 ~ 699</option>
          <option value='4' onClick={(e) => setJptP([e.target.innerText, e.target.value])}>560 ~ 629</option>
          <option value='3' onClick={(e) => setJptP([e.target.innerText, e.target.value])}>490 ~ 559</option>
          <option value='2' onClick={(e) => setJptP([e.target.innerText, e.target.value])}>420 ~ 489</option>
          <option value='1' onClick={(e) => setJptP([e.target.innerText, e.target.value])}>350 ~ 419</option>
          <option value='0' onClick={(e) => setJptP([e.target.innerText, e.target.value])}>없음</option>
        </div> : ''}
      </div>

      <div className="contents" onClick={() => setCpt((e) => !e)}>
        {parseInt(cptP[1]) ? <p className="chosen">{cptP[0]}</p> : <p>CPT</p>}
        <button><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1.5L6 6.5L1 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </button>
        {cpt ? <div onClick={() => { console.log().then(() => setCpt(false)) }}>
          <option value='4' onClick={(e) => setCptP([e.target.innerText, e.target.value])}>651 이상</option>
          <option value='3' onClick={(e) => setCptP([e.target.innerText, e.target.value])}>501 ~ 650</option>
          <option value='2' onClick={(e) => setCptP([e.target.innerText, e.target.value])}>351 ~ 500</option>
          <option value='1' onClick={(e) => setCptP([e.target.innerText, e.target.value])}>201 ~ 350</option>
          <option value='0' onClick={(e) => setCptP([e.target.innerText, e.target.value])}>없음</option>
        </div> : ''}
      </div>

      <div className="contents" onClick={() => setHsk((e) => !e)}>
        {parseInt(hskP[1]) ? <p className="chosen">{hskP[0]}</p> : <p>HSK</p>}
        <button><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1.5L6 6.5L1 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </button>
        {hsk ? <div onClick={() => { console.log().then(() => setHsk(false)) }}>
          <option value='5' onClick={(e) => setHskP([e.target.innerText, e.target.value])}>6급</option>
          <option value='4' onClick={(e) => setHskP([e.target.innerText, e.target.value])}>5급</option>
          <option value='3' onClick={(e) => setHskP([e.target.innerText, e.target.value])}>4급</option>
          <option value='2' onClick={(e) => setHskP([e.target.innerText, e.target.value])}>3급</option>
          <option value='1' onClick={(e) => setHskP([e.target.innerText, e.target.value])}>2급</option>
          <option value='0' onClick={(e) => setHskP([e.target.innerText, e.target.value])}>없음</option>
        </div> : ''}
      </div>
      <button className="checkPoint">영역별 점수 확인하기</button>
      <button className="point">점수 | <span>{'1000'}</span></button>
    </div>
  </div>;
}

export default Foreign;