import "./Description.css";
import { useState } from "react";

const Description = () => {
  const [colour, setColour] = useState("#1279F2");

  const handleClick = () => {
    const randomColour =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColour(randomColour);
  };

  return (
    <div className="description-container">
      <p className="author">DevSoc presents</p>
      <h1 style={{ color: colour }} onClick={handleClick}>
        unilectives
      </h1>
      <p className="description">
        Your one-stop shop for UNSW course and elective reviews
      </p>
    </div>
  );
};

export default Description;
