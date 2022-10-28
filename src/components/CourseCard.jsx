import App from "../App";
const CourseCard = ({ course }) => {

  return (<div>
    {course.term} CS {course.number}: {course.title}
  </div>)
};

export default CourseCard;