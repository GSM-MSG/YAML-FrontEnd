import React, { useState } from "react";

function BookActiveContent(props) {
  const [checked, setChecked] = useState(false);
  return <div className="BookActiveContent">
    {/* <input type='checkbox' onClick={(e) => { setChecked(e.target.checked); }} /> */}
    {checked ? <div onClick={() => setChecked(() => !checked)} className='checkbox_on' /> : <div onClick={() => setChecked(() => !checked)} className='checkbox' />}
    <label>{checked ? 'true' : 'false'}</label>
    {checked && <div>
      <button>상세보기</button>
      <button>삭제</button>
    </div>}
  </div>;
}

export default BookActiveContent;