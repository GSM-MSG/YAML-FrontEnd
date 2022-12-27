import React, { useState } from "react";

function Foreign() {
  const [toeic, setToeic] = useState(0);
  const [toeicP, setToeicP] = useState(0);
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
        <p>{toeicP ? toeicP : 'TOEIC'}</p>
        <button><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1.5L6 6.5L1 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </button>
        {toeic ? <div onClick={() => { console.log().then(() => setToeic(false)) }}>
          <option value='6' onClick={(e) => setToeicP(e.target.innerText)}>700 이상</option>
          <option value='5' onClick={(e) => setToeicP(e.target.innerText)}>630 ~ 699</option>
          <option value='4' onClick={(e) => setToeicP(e.target.innerText)}>560 ~ 629</option>
          <option value='3' onClick={(e) => setToeicP(e.target.innerText)}>490 ~ 559</option>
          <option value='2' onClick={(e) => setToeicP(e.target.innerText)}>420 ~ 489</option>
          <option value='1' onClick={(e) => setToeicP(e.target.innerText)}>350 ~ 419</option>
          <option value='-1' onClick={(e) => setToeicP(e.target.innerText)}>없음</option>
        </div> : ''}
      </div>

      <div className="contents" onClick={() => setTofle((e) => !e)}>
        <p>{tofleP ? tofleP : 'TOFlE'}</p>
        <button><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1.5L6 6.5L1 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </button>
        {tofle ? <div onClick={() => { console.log().then(() => setTofle(false)) }}>
          <option value='6' onClick={(e) => setTofleP(e.target.innerText)}>80 이상</option>
          <option value='5' onClick={(e) => setTofleP(e.target.innerText)}>75 ~ 79</option>
          <option value='4' onClick={(e) => setTofleP(e.target.innerText)}>70 ~ 74</option>
          <option value='3' onClick={(e) => setTofleP(e.target.innerText)}>65 ~ 69</option>
          <option value='2' onClick={(e) => setTofleP(e.target.innerText)}>60 ~ 64</option>
          <option value='1' onClick={(e) => setTofleP(e.target.innerText)}>55 ~ 59</option>
          <option value='-1' onClick={(e) => setTofleP(e.target.innerText)}>없음</option>
        </div> : ''}
      </div>

      <div className="contents" onClick={() => setTeps((e) => !e)}>
        <p>{tepsP ? tepsP : 'TEPS'}</p>
        <button><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1.5L6 6.5L1 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </button>
        {teps ? <div onClick={() => { console.log().then(() => setTeps(false)) }}>
          <option value='6' onClick={(e) => setTepsP(e.target.innerText)}>555 이상</option>
          <option value='5' onClick={(e) => setTepsP(e.target.innerText)}>520 ~ 554</option>
          <option value='4' onClick={(e) => setTepsP(e.target.innerText)}>480 ~ 519</option>
          <option value='3' onClick={(e) => setTepsP(e.target.innerText)}>440 ~ 479</option>
          <option value='2' onClick={(e) => setTepsP(e.target.innerText)}>400 ~ 439</option>
          <option value='1' onClick={(e) => setTepsP(e.target.innerText)}>360 ~ 399</option>
          <option value='-1' onClick={(e) => setTepsP(e.target.innerText)}>없음</option>
        </div> : ''}
      </div>

      <div className="contents" onClick={() => setSpeak((e) => !e)}>
        <p>{speakP ? speakP : 'SPEAKING'}</p>
        <button><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1.5L6 6.5L1 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </button>
        {speak ? <div onClick={() => { console.log().then(() => setSpeak(false)) }}>
          <option value='4' onClick={(e) => setSpeakP(e.target.innerText)}>LEVEL 6</option>
          <option value='3' onClick={(e) => setSpeakP(e.target.innerText)}>LEVEL 5</option>
          <option value='2' onClick={(e) => setSpeakP(e.target.innerText)}>LEVEL 4</option>
          <option value='1' onClick={(e) => setSpeakP(e.target.innerText)}>LEVEL 3</option>
          <option value='-1' onClick={(e) => setSpeakP(e.target.innerText)}>없음</option>
        </div> : ''}
      </div>

      <div className="contents" onClick={() => setOpic((e) => !e)}>
        <p>{opicP ? opicP : 'OPIC'}</p>
        <button><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1.5L6 6.5L1 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </button>
        {opic ? <div onClick={() => { console.log().then(() => setOpic(false)) }}>
          <option value='4' onClick={(e) => setOpicP(e.target.innerText)}>int 2 이상</option>
          <option value='3' onClick={(e) => setOpicP(e.target.innerText)}>int 1</option>
          <option value='2' onClick={(e) => setOpicP(e.target.innerText)}>int low</option>
          <option value='1' onClick={(e) => setOpicP(e.target.innerText)}>Novice High</option>
          <option value='-1' onClick={(e) => setOpicP(e.target.innerText)}>없음</option>
        </div> : ''}
      </div>

      <div className="contents" onClick={() => setJpt((e) => !e)}>
        <p>{jptP ? jptP : 'JPT'}</p>
        <button><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1.5L6 6.5L1 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </button>
        {jpt ? <div onClick={() => { console.log().then(() => setJpt(false)) }}>
          <option value='6' onClick={(e) => setJptP(e.target.innerText)}>700 이상</option>
          <option value='5' onClick={(e) => setJptP(e.target.innerText)}>630 ~ 699</option>
          <option value='4' onClick={(e) => setJptP(e.target.innerText)}>560 ~ 629</option>
          <option value='3' onClick={(e) => setJptP(e.target.innerText)}>490 ~ 559</option>
          <option value='2' onClick={(e) => setJptP(e.target.innerText)}>420 ~ 489</option>
          <option value='1' onClick={(e) => setJptP(e.target.innerText)}>350 ~ 419</option>
          <option value='-1' onClick={(e) => setJptP(e.target.innerText)}>없음</option>
        </div> : ''}
      </div>

      <div className="contents" onClick={() => setCpt((e) => !e)}>
        <p>{cptP ? cptP : 'CPT'}</p>
        <button><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1.5L6 6.5L1 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </button>
        {cpt ? <div onClick={() => { console.log().then(() => setCpt(false)) }}>
          <option value='4' onClick={(e) => setCptP(e.target.innerText)}>651 이상</option>
          <option value='3' onClick={(e) => setCptP(e.target.innerText)}>501 ~ 650</option>
          <option value='2' onClick={(e) => setCptP(e.target.innerText)}>351 ~ 500</option>
          <option value='1' onClick={(e) => setCptP(e.target.innerText)}>201 ~ 350</option>
          <option value='-1' onClick={(e) => setCptP(e.target.innerText)}>없음</option>
        </div> : ''}
      </div>

      <div className="contents" onClick={() => setHsk((e) => !e)}>
        <p>{hskP ? hskP : 'HSK'}</p>
        <button><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1.5L6 6.5L1 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </button>
        {hsk ? <div onClick={() => { console.log().then(() => setHsk(false)) }}>
          <option value='5' onClick={(e) => setHskP(e.target.innerText)}>6급</option>
          <option value='4' onClick={(e) => setHskP(e.target.innerText)}>5급</option>
          <option value='3' onClick={(e) => setHskP(e.target.innerText)}>4급</option>
          <option value='2' onClick={(e) => setHskP(e.target.innerText)}>3급</option>
          <option value='1' onClick={(e) => setHskP(e.target.innerText)}>2급</option>
          <option value='-1' onClick={(e) => setHskP(e.target.innerText)}>없음</option>
        </div> : ''}
      </div>

    </div>
  </div >;
}

export default Foreign;