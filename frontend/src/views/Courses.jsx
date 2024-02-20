import React from 'react';
import Navbar from "../componants/Navbar";
import {Typography, Box} from "@mui/material";

function Courses() {
    return (
        <div>
            <Navbar/>
            <Box sx={{paddingTop: '100px'}}> {/* Adjust the padding as needed */}
                <Typography variant="h4">Courses Page Content Here</Typography>
                {/* Rest of your content */}
            </Box>
        </div>
    );
}

export default Courses