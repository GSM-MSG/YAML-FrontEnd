import React, { useState } from "react";

function VolunteerContent(props) {
  const [checked, setChecked] = useState(false);
  return <div className={"VolunteerContent"}>
    {checked && <div className='ON'></div>}
    {checked ? <div onClick={() => setChecked(() => !checked)} className='checkbox_on' /> : <div onClick={() => setChecked(() => !checked)} className='checkbox' />}
    <label>{props.text}</label>
    {checked && <div>
      <button className="delete">삭제</button>
    </div>}
  </div>;
}

export default VolunteerContent;