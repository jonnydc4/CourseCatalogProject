import React from 'react';
import {Card, CardContent, Typography, Box, List, ListItem, Button} from '@mui/material';

const CourseDetail = ({ course, setSelectedCourse }) => {
    const onBack = () => {
        setSelectedCourse(null)
    }

    return (
        <Card>
            <CardContent>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onBack}
                    sx={{ marginBottom: 2 }}
                >
                    Back
                </Button>
                <Typography variant="h4" gutterBottom>
                    {course.name} ({course.code})
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    {course.description}
                </Typography>
                <Box mt={2}>
                    <Typography variant="h6">Details</Typography>
                    <List>
                        <ListItem>College: {course.college}</ListItem>
                        <ListItem>Department: {course.department}</ListItem>
                        <ListItem>Level: {course.level}</ListItem>
                        <ListItem>Mode: {course.mode}</ListItem>
                        <ListItem>Location: {course.location ? course.location : 'N/A'}</ListItem>
                        <ListItem>Credit: {course.credit}</ListItem>
                        <ListItem>General Education: {course.generalEducation ? 'Yes' : 'No'}</ListItem>
                        {course.distribution && <ListItem>Distribution: {course.distribution}</ListItem>}
                    </List>
                </Box>
                <Box mt={2}>
                    <Typography variant="h6">Applicability</Typography>
                    <List>
                        <ListItem>Degree: {course.degree.join(", ")}</ListItem>
                        <ListItem>Elective for: {course.elective.length > 0 ? course.elective.join(", ") : 'None'}</ListItem>
                    </List>
                </Box>
                <Box mt={2}>
                    <Typography variant="h6">Skills and Career Outcomes</Typography>
                    <List>
                        <ListItem>Skills: {course.skill.join(", ")}</ListItem>
                        <ListItem>Jobs: {course.job.join(", ")}</ListItem>
                        <ListItem>Outcomes: {course.outcome}</ListItem>
                    </List>
                </Box>
            </CardContent>
        </Card>
    );
}

export default CourseDetail;
