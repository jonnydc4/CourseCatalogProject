import React from 'react';
import Navbar from "../componants/Navbar";
import {Typography, Box} from "@mui/material";

function Home() {
    return (
        <div>
            <Navbar/>
            <Box sx={{paddingTop: '100px'}}> {/* Adjust the padding as needed */}
                <Typography variant="h4">Home Page Content Here</Typography>
                {/* Rest of your content */}
            </Box>
        </div>
    );
}

export default Home;