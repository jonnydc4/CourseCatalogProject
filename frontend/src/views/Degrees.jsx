import React from 'react';
import Navbar from "../componants/Navbar";
import {Typography, Box} from "@mui/material";

function Degrees() {
    return (
        <div>
            <Navbar/>
            <Box sx={{paddingTop: '100px'}}> {/* Adjust the padding as needed */}
                <Typography variant="h4">Degrees Page Content Here</Typography>
                {/* Rest of your content */}
            </Box>
        </div>
    );
}

export default Degrees