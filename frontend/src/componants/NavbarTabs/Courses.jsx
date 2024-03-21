import React from 'react';
import {Typography, Box} from "@mui/material";
import CourseFilter from "../CourseFilter/CourseFilter";

function Courses() {
    return (
        <div>
            <Box>
                <Typography variant="h4">Courses Page Content Here</Typography>
                {/* Rest of your content */}
                <CourseFilter/>
            </Box>
        </div>
    );
}

export default Courses