import React, { useState } from "react";

function BookActiveContent(props) {
  const [checked, setChecked] = useState(false);
  return <div className={"BookActiveContent"}>
    {checked && <div className='ON'></div>}
    {checked ? <div onClick={() => setChecked(() => !checked)} className='checkbox_on' /> : <div onClick={() => setChecked(() => !checked)} className='checkbox' />}
    <label>{props.text}</label>
    {checked && <div>
      <button className="about">상세보기</button>
      <button className="delete">삭제</button>
    </div>}
  </div>;
}

export default BookActiveContent;