import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Card, CardContent, Dialog, DialogTitle, DialogContent } from '@mui/material';
import CourseFilter from '../CourseFilter/CourseFilter';
import CourseCard from "../CourseList/CourseCard";

function Courses() {
    const [filterOpen, setFilterOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const toggleFilter = () => {
        setFilterOpen(!filterOpen);
    };

    return (
        <div>
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
                        <CourseFilter />
                    </DialogContent>
                </Dialog>
                <CourseCard
                    code={"CS 2340"}
                    name={"Introduction to React"}
                    description={"Learn the basics of React, including components, state, and props."}
                />
            </Box>
        </div>
    );
}
export default Courses;
