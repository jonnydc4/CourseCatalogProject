import React, {useState} from 'react';
import {styled} from '@mui/material/styles';
import {Tabs, Tab, Box, AppBar, Toolbar, IconButton, Menu, MenuItem} from '@mui/material';
import uvu_logo from '../icons/UVUMonogramWhite-0007.png';
import TabPanel from './TabPanel';
import Courses from "../views/Courses";
import Degrees from "../views/Degrees";
import {AccountCircle} from "@mui/icons-material";

/*
Documentation:
Navbar2 does not utilize a react router at all. It shows and hides content based on the tab you are on.
It does this by using the 'activeTabIndex' to keep track of which tab has been selected. The 'TabPanel' components
then use 'activeTabIndex' to determine if they should be hidden or not by comparing the 'activeTabIndex' to their
own index.

It also uses a icon button to anchor a account menu when clicked. That anchor is the 'anchorE1'.
When the account icon is clicked the menu opens up anchored over the account icon.
 */

const StyledTab = styled(Tab)({
    color: 'white',
    '&.Mui-selected': {
        color: 'white'
    }
})

function Navbar2() {

    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleAccountMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleAccountMenuClose = () => {
        setAnchorEl(null);
    };

    const handleTabChange = (event, newValue) => {
        setActiveTabIndex(newValue);
    };

    return (
        <div>
            <AppBar sx={{position: 'static', backgroundColor: 'green'}}>
                <Toolbar>
                    <Box>
                        <img src={uvu_logo} alt={uvu_logo} style={{height: '80px'}}/>
                    </Box>

                    <Box sx={{ flexGrow: 1, borderBottom: 1, borderColor: 'divider'}}>
                        <Tabs value={activeTabIndex} onChange={handleTabChange} aria-label='nav tabs'
                              TabIndicatorProps={{style: {backgroundColor: 'white'}}}>
                            <StyledTab label='Courses'/>
                            <StyledTab label='Degrees'/>
                            <StyledTab label='Colleges'/>
                            <StyledTab label='Career'/>
                            <StyledTab label='Resources'/>
                        </Tabs>
                    </Box>

                    <Box>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleAccountMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle/>
                        </IconButton>
                    </Box>

                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleAccountMenuClose}
                    >
                        <MenuItem onClick={handleAccountMenuClose}>Profile</MenuItem>
                        <MenuItem onClick={handleAccountMenuClose}>Settings</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            <Box>
                <TabPanel value={activeTabIndex} index={0}>
                    <Courses/>
                </TabPanel>
                <TabPanel value={activeTabIndex} index={1}>
                    <Degrees/>
                </TabPanel>
                <TabPanel value={activeTabIndex} index={2}>
                    Colleges
                </TabPanel>
                <TabPanel value={activeTabIndex} index={3}>
                    Career
                </TabPanel>
                <TabPanel value={activeTabIndex} index={4}>
                    Resource
                </TabPanel>
            </Box>


        </div>
    );
}

export default Navbar2
