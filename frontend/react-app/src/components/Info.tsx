import Cards from "./Cards";
import Description from "./Description";
import Dropdown from "./Dropdown";
import "./Info.css";
import Input from "./Input";

const Info = () => {
  return (
    <div className="info-container">
      <Description />
      <div className="course-container">
        <Input />
        <Dropdown />
        <Cards />
      </div>
    </div>
  );
};

export default Info;
