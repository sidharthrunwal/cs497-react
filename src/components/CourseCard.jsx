import App from "../App";
const CourseCard = ({ course }) => {

  return (
    <div className="card m-1 p-2">
      <div className="card-body">
        <h4 className="card-title">{course.term} CS {course.number}</h4>
        <p className="card-text">{course.title}</p>
        
        <p className="card-footer">{course.meets}</p>

      </div>

    </div>)
};

export default CourseCard;