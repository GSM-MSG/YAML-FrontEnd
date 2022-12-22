import React from "react";
import BookActiveContent from "./BookActiveContent";

function BookActive() {
  return <div className="BookActive">
    <div className="outsideDiv">
      <div className="innerDiv">
        <div className="header">
          <p>독서활동</p>
          <div>총점수</div>
        </div>
        <div className="contentBoxes">
          <BookActiveContent />
          <BookActiveContent />
          <BookActiveContent />
          <BookActiveContent />
          <BookActiveContent />
          <BookActiveContent />
        </div>
      </div>
      <label>숫자</label>
    </div>
  </div>;
}

export default BookActive;