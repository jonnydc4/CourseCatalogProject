import React from 'react';
import { Button, Container, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Mock data for the projects
const projects = [
    { name: 'Course Catalog', url: '/coursecatalog' },
    { name: 'Study Groups', url: '/studygroups' }
    // Add more projects as needed
];

const ProjectNavigator = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    // Function to handle navigation using useNavigate
    const navigateToProject = (url) => {
        navigate(url); // Use navigate instead of window.location.href
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
                Development Projects
            </Typography>
            <Stack spacing={2}>
                {projects.map((project, index) => (
                    <Button
                        key={index}
                        variant="contained"
                        onClick={() => navigateToProject(project.url)}
                    >
                        {project.name}
                    </Button>
                ))}
            </Stack>
        </Container>
    );
};

export default ProjectNavigator;
