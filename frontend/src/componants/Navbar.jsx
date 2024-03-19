import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import uvu_logo from '../icons/UVUMonogramWhite-0007.png';

/*
Documentation:
This navbar is the first we have made.
The "const pages" is what sections are on the navbar.
The navbar will map automatically through pages to add a section,
however the functionality of that added section needs to be added
MANUALLY in the "handleNavigation()" function and in our app's main router.
This goes for any and all changes made to "pages"

In this design each navbar section has its own route on the router.
 */

const pages = ['Courses', 'Degrees', 'Games', 'About'];

function Navbar() {
    const navigateTo = useNavigate()

    function handleNavigation(page) {
        switch (page) {
            case 'Courses':
                console.log('switch reached')
                navigateTo('/courses')
                break
            case 'Degrees':
                navigateTo('/degrees')
                break
            case 'Games':
                navigateTo('/games')
                break
            case 'About':
                navigateTo('/about')
                break
            default:
                navigateTo('/')
                break
        }
    }

    return (
        <AppBar sx={{backgroundColor: 'green'}}>
            <Toolbar>
                <IconButton onClick={handleNavigation}>
                    <img src={uvu_logo} alt={uvu_logo} style={{height: '80px'}}/>
                </IconButton>
                <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                    {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={() => handleNavigation(page)}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
