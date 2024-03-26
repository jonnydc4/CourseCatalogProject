import {Box, Slider} from "@mui/material";
import React from "react";

const CustomSlider = ({defaultValue, step, min, max}) => {
    function valuetext(value) {
        return `${value}`;
    }

    return (
        <Box sx={{width: 300}}>
            <Slider
                defaultValue={defaultValue}
                getAriaValueText={valuetext}
                step={step}
                valueLabelDisplay="auto"
                marks
                min={min}
                max={max}
            />
        </Box>
    )
}

export default CustomSlider