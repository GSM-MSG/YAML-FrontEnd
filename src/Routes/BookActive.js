import React from "react";

function BookActive() {
  return <div className="BookActive">
    <div className="outsideDiv">
      <div className="innerDiv">
        <div className="header">
          <p>독서활동</p>
          <button>총점수</button>
        </div>
      </div>
      <label>숫자</label>
    </div>
  </div>;
}

export default BookActive;