import React from 'react';
import Navbar from "../Navbar/Navbar";
import {Typography, Box} from "@mui/material";

function About() {
    return (
        <div>
            <Navbar/>
            <Box sx={{paddingTop: '100px'}}> {/* Adjust the padding as needed */}
                <Typography variant="h4">About Page Content Here</Typography>
                {/* Rest of your content */}
            </Box>
        </div>
    );
}

export default About