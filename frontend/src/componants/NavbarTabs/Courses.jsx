import React, {useState, useMemo, useEffect} from 'react';
import { Box, Typography, TextField, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import CourseFilter from '../CourseFilter/CourseFilter';
import CourseList from "../CourseList/CourseList";
import CourseDetail from "../CourseDetail/CourseDetail";

function Courses() {
    const [filterOpen, setFilterOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterSettings, setFilterSettings] = useState({});
    const [selectedCourseCode, setSelectedCourseCode] = useState(null)

    // We are using synthetic data for now
    const [courses] = useState([
        {
            code: "CS 1400",
            name: "Fundamentals of Programming",
            description: "Introduces techniques and tools to formulate and solve problems where computer algorithms and programs are a core part of an effective, repeatable solution. Demonstrates algorithmic thinking using procedural programs composed of sequences of commands, functions, loops, conditionals, and basic data structures. May be delivered online. Lab access fee of $45 for computers applies.",
            college: "College of Science",
            department: "Computer Science",
            degree: ["B.S. of Computer Science"],
            elective: ["B.S. of Software Engineering"], // A list of degrees that this class can provide elective credit for.
            generalEducation: false,
            distribution: null, // Distribution only applies to general education classes
            level: 1000,
            mode: "Online",
            location: null, // Location doesn't apply to online classes
            credit: 3,
            skill: ["Web Development", "Frontend Design"], // A list of skills the class teaches
            job: ["Full Stack Engineer", "Frontend Engineer", "Web Developer"], // A list of jobs that require skills taught in the class.
            outcome: "Student should be able to {insert bulleted list here}",
        },
        {
            code: "CS 4450",
            name: "Software Engineering III",
            description: "Senior-level, capstone project experience course. Requires operating as part of a high performance team. Includes completing the design and implementation of a large-scale software development project. Combines major milestone presentations to project clients, completing a portfolio of project-related artifacts, and offer an evaluation of the project and team experience. Requires students to take a program level assessment. Lab access fee of $45 for computers applies.",
            college: "College of Science",
            department: "Computer Science",
            degree: ["B.S. of Software Engineering"],
            elective: [], // A list of degrees that this class can provide elective credit for.
            generalEducation: false,
            distribution: null, // Distribution only applies to general education classes
            level: 4000,
            mode: "In person",
            location: "CS 403",
            credit: 3,
            skill: ["Software Engineering", "QA Testing", "Agile Methodologies"],
            job: ["Software Engineer", "QA Engineer", "Product Manager"],
            outcome: "Student should be able to {insert bulleted list here}",
        },
        {
            code: "Comm 1020",
            name: "Public Speaking",
            description: "Provides an introduction to basic concepts, theories, principles of oral communication as applied to a variety of speaking situations. Develops competence in oral communication through performance, as applied to critical thinking skills, arrangement of ideas, and use of evidence and reasoning to support claims. Explains how culture influences the perception of effective public speaking.",
            college: "College of Humanities and Social Sciences",
            department: "Communication",
            degree: ["All"], // Since it is a gen ed it applies to all degrees.
            elective: [], // A list of degrees that this class can provide elective credit for.
            generalEducation: true,
            distribution: "Humanities",
            level: 1000,
            mode: "In person",
            location: "LA 205",
            credit: 3,
            skill: ["Public Speaking", "Speech Writing"],
            job: ["Politician", "Motivational Speaker"],
            outcome: "Student should be able to {insert bulleted list here}",
        }
    ]);

    // useMemo hook for filtering courses based on the search query
    const filteredCourses = useMemo(() => {
        return courses.filter(course => {
            return (
                (searchQuery.length === 0 || course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    course.code.toLowerCase().includes(searchQuery.toLowerCase())) &&
                Object.keys(filterSettings).every(key =>
                    filterSettings[key].isActive ? course[key] && filterSettings[key].filters.includes(course[key]) : true
                )
            );
        });
    }, [courses, searchQuery, filterSettings]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const toggleFilter = () => {
        setFilterOpen(!filterOpen);
    };

    const handleAddFilters = (filters) => {
        setFilterSettings(filters);
        toggleFilter();
    };

    const findCourseByCode = (code) => {
        return courses.find(course => course.code === code);
    };

    return (
        selectedCourseCode === null ? (
            <Box sx={{ p: 2 }}>
                <Typography variant="h4" gutterBottom>Courses</Typography>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 2 }}>
                    <TextField
                        label="Search Courses"
                        variant="outlined"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        fullWidth
                    />
                    <Button variant="contained" onClick={toggleFilter}>
                        {filterOpen ? 'Hide Filters' : 'Show Filters'}
                    </Button>
                </Box>
                <Dialog open={filterOpen} onClose={toggleFilter}>
                    <DialogTitle>Filter By:</DialogTitle>
                    <DialogContent>
                        <CourseFilter filterSettings={filterSettings} onAddFilters={handleAddFilters} />
                    </DialogContent>
                </Dialog>
                <CourseList courses={filteredCourses} setSelectedCourse={setSelectedCourseCode}/>
            </Box>
        ):(
            <CourseDetail course={findCourseByCode(selectedCourseCode)} setSelectedCourse={setSelectedCourseCode} />
        )
    );
}

export default Courses;
