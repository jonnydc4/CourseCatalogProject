import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const DropdownComponent = ({title, childComponent}) => {
    const [showContent, setShowContent] = useState(false);

    const toggleContent = () => {
        setShowContent(!showContent);
    };

    return (
        <>
        <Box sx={{display: 'flex', alignItems: 'center', padding: '8px', background: 'transparent'}}>
            <Typography variant="h6" sx={{marginRight: '8px'}}>
                {title}
            </Typography>
            <IconButton
                color="inherit"
                aria-label="toggle content"
                onClick={toggleContent}
            >
                {showContent ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}
            </IconButton>
        </Box>
            {showContent && (
                <Box sx={{marginTop: '8px'}}>
                    {childComponent}
                </Box>
            )}
        </>

    );
};

export default DropdownComponent;
