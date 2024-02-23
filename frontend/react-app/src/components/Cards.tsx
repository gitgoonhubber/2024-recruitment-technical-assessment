import CardItems from "./CardItems";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="card-container">
      <CardItems
        courseCode="COMP1511"
        reviews={68}
        courseName="Programming Fundamentals"
        termsOffered={["Term 1", "Term 2", "Term 3"]}
      />
      <CardItems
        courseCode="COMP1531"
        reviews={47}
        courseName="Software Engineering Fundamentals"
        termsOffered={["Term 1", "Term 2", "Term 3"]}
      />
      <CardItems
        courseCode="COMP1521"
        reviews={40}
        courseName="Computer System Fundamentals"
        termsOffered={["Term 1", "Term 2", "Term 3"]}
      />
      <CardItems
        courseCode="COMP2521"
        reviews={36}
        courseName="Data Structures and Algorithms"
        termsOffered={["Summer", "Term 1", "Term 2", "Term 3"]}
      />
      <CardItems
        courseCode="COMP2511"
        reviews={33}
        courseName="Object-Oriented Design and Programming"
        termsOffered={["Term 1", "Term 2", "Term 3"]}
      />
      <CardItems
        courseCode="COMP3311"
        reviews={33}
        courseName="Database Systems"
        termsOffered={["Term 1", "Term 3"]}
      />
    </div>
  );
};

export default Cards;
