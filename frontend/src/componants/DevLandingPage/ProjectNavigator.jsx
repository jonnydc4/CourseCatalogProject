import React from 'react';
import { Button, Container, Stack, Typography } from '@mui/material';

// Mock data for the projects
const projects = [
    { name: 'Course Catalog', url: '/coursecatalog' },
    { name: 'Study Groups', url: '/studygroups' }
    // Add more projects as needed
];

const ProjectNavigator = () => {
    // Function to handle navigation
    // This can be replaced with your actual navigation logic,
    // e.g., using useHistory from react-router-dom
    const navigateToProject = (url) => {
        window.location.href = url; // For demonstration purposes
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
