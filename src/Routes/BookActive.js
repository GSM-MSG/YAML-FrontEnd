import React from "react";
import BookActiveContent from "./BookActiveContent";

function BookActive(props) {
  return <div className="BookActive">
    <div className="outsideDiv">
      <div className="innerDiv">
        <div className="header">
          <p>독서활동</p>
          <div>총점수</div>
        </div>
        <div className="contentBoxes">
          <BookActiveContent text='1' />
          <BookActiveContent text='2' />
          <BookActiveContent text='3' />
          <BookActiveContent text='4' />
          <BookActiveContent text='5' />
          <BookActiveContent text='6' />
        </div>
      </div>
      <button className="add">항목 추가</button>
      <div className="number">1</div>
    </div>
  </div>;
}

export default BookActive;