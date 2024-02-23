import "./CardItems.css";

interface Props {
  courseCode: string;
  stars?: string;
  reviews: number;
  courseName: string;
  termsOffered: string[];
}

const CardItems = ({
  courseCode,
  stars,
  reviews,
  courseName,
  termsOffered,
}: Props) => {
  return (
    <div className="card">
      <div className="top-card">
        <h2 className="course-code">{courseCode}</h2>
        <div className="right-card">
          <div className="stars">
            <span className="star">★★★★★</span>
          </div>
          <p>{reviews} reviews</p>
        </div>
      </div>
      <p className="course-name">{courseName}</p>
      <div className="bottom-card">
        {termsOffered.map((term, index) => (
          <div key={index} className="term">
            {term}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardItems;
