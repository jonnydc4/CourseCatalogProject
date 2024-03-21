import React from 'react';
import Navbar from "../Navbar/Navbar";
import {Typography, Box} from "@mui/material";

function Games() {
    return (
        <div>
            <Navbar/>
            <Box sx={{paddingTop: '100px'}}> {/* Adjust the padding as needed */}
                <Typography variant="h4">Games Page Content Here</Typography>
                {/* Rest of your content */}
            </Box>
        </div>
    );
}

export default Games