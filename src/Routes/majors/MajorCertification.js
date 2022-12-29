import React from "react";

function MajorCertification() {
  return <div className="MajorCertification">
    <div className="header">자격증</div>
    <div className="outsideDiv">
      <div className="contentsDiv">
        <Contents text={'asdfasdf'} />
        <Contents text={'asdfasdf'} />
        <Contents text={'asdfasdf'} />
        <Contents text={'asdfasdf'} />
        <Contents text={'asdfasdf'} />
        <Contents text={'asdfasdf'} />
        <Contents text={'asdfasdf'} />
        <Contents text={'asdfasdf'} />
        <Contents text={'asdfasdf'} />
      </div>
      <div className="point">100점</div>
      <div className="addContents">항목추가</div>
    </div>
  </div>;
}

function Contents(props) {
  return <div className="contents">
    <div className="check">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="10" fill="#61C7C9" />
        <path d="M9.6001 16.4001L14.4001 21.2001L21.6001 10.4001" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
    <span>{props.text}</span>
    <button>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 18L18 6M6 6L18 18" stroke="#A7A7A7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
    <div className="download"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 12.25V14.125C1 14.6223 1.19754 15.0992 1.54917 15.4508C1.90081 15.8025 2.37772 16 2.875 16H14.125C14.6223 16 15.0992 15.8025 15.4508 15.4508C15.8025 15.0992 16 14.6223 16 14.125V12.25M4.75 8.5L8.5 12.25M8.5 12.25L12.25 8.5M8.5 12.25V1" stroke="#075061" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
      &nbsp;다운로드</div>
  </div>
}

export default MajorCertification;