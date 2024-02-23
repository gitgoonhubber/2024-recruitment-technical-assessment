import "./Input.css";
import { useState } from "react";

const Input = () => {
  const [popupVisibility, setPopupVisibility] = useState(false);

  const handleClick = () => {
    setPopupVisibility(true);
  };

  const handleButton = () => {
    setPopupVisibility(false);
  };

  return (
    <>
      <div className="searchbar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#9CADE9"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          type="text"
          className="course-search"
          placeholder="Search for a course e.g. COMP1511"
          onClick={handleClick}
        ></input>
      </div>
      {popupVisibility && (
        <div className="blank-box">
          <button className="close-box" onClick={handleButton}>
            X
          </button>
        </div>
      )}
    </>
  );
};

export default Input;
