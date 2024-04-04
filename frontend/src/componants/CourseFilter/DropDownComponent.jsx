import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch'; // Importing Switch from MUI

const DropdownComponent = ({ label, childComponent, activeFilters, setActiveFilters }) => {
    const toggleContent = (event) => {
        let updatedToggle = {}
        updatedToggle[label] = {
            isActive: event.target.checked,
            filters: activeFilters[label].filters
        }

        setActiveFilters({
            ...activeFilters,
            ...updatedToggle
        });
    };

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', padding: '8px', background: 'transparent' }}>
                <Typography variant="h6" sx={{ marginRight: '8px' }}>
                    {label}
                </Typography>
                <Switch
                    color="primary"
                    checked={activeFilters[label].isActive}
                    onChange={toggleContent}
                    inputProps={{ 'aria-label': 'toggle content' }}
                />
            </Box>
            {activeFilters[label].isActive && (
                <Box sx={{ marginTop: '8px' }}>
                    {childComponent}
                </Box>
            )}
        </>
    );
};

export default DropdownComponent;
