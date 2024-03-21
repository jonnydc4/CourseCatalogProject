import React from 'react';
import {Typography, Box} from "@mui/material";
import CourseFilter from "../CourseFilter/CourseFilter";

function Courses() {
    return (
        <div>
            <Box>
                <CourseFilter/>
            </Box>
        </div>
    );
}

export default Courses