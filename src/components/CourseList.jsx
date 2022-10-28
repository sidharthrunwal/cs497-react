import CourseCard from './CourseCard';

const CourseList = ({ courses }) => {
    console.log(courses);
    return (
        <div>
            {Object.entries(courses).map(([id, course]) => <CourseCard key={id} course={course} />)}
        </div>
    )
};

export default CourseList;