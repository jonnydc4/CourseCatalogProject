import CourseCard from "./CourseCard";
import {Box} from "@mui/material";

const CourseList = ({ courses, setSelectedCourse }) => {

    // Map the courses into course cards

    return (
        <>
            {courses.map((course, index) => (
                <Box  key={index} sx={{ mb: 2 }}>
                    <CourseCard
                        code={course.code}
                        name={course.name}
                        description={course.description}
                        setSelectedCourse={setSelectedCourse}
                    />
                </Box>
            ))}
        </>
    )
}

export default CourseList