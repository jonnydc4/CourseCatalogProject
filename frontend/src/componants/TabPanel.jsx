import {Box} from "@mui/material";

/*
Documentation:
TabPanel is used by Navbar2 as a way to show and hide content based on what tab the user has selected on the navbar.
If the TabPanel index does not match that of the activeTabIndex(value) it should hide itself. If they do match up we want
the TabPanel to display its children components.
 */

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default TabPanel


