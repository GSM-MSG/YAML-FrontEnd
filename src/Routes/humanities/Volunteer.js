import React from "react";
import VolunteerContent from "./VolunteerContent";

function Volunteer(props) {
  return <div className="Volunteer">
    <div className="outsideDiv">
      <div className="innerDiv">
        <div className="header">
          <p>봉사활동</p>
        </div>
        <div>
          <input className="activeName" type="textbox" placeholder="활동명을 입력해주세요"></input>
          <input className="hourInput" type="textbox"></input> <h>시간</h> <button>등록</button>
        </div>
        <div><h>100</h>점</div>
        <div className="contentBoxes">
          <VolunteerContent text='가나다라마바사아자차카타파하' />
          <VolunteerContent text='가나다라마바사아자차카타파하' />
          <VolunteerContent text='가나다라마바사아자차카타파하' />
          <VolunteerContent text='가나다라마바사아자차카타파하' />
          <VolunteerContent text='가나다라마바사아자차카타파하' />
          <VolunteerContent text='가나다라마바사아자차카타파하' />
        </div>
      </div>
      <div className="number">1</div>
    </div>
  </div>;
}

export default Volunteer;