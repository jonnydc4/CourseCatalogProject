import React from 'react';
import Chip from '@mui/material/Chip';

const FilterTag = ({ label, onDelete }) => {
    return (
        <Chip
            label={label}
            onDelete={onDelete}
            variant="outlined"
            sx={{
                borderRadius: '16px', // Adjust the borderRadius for rounder edges
                margin: 0.5, // Adds a little space around each chip if they're in a stack
            }}
        />
    );
};

export default FilterTag;