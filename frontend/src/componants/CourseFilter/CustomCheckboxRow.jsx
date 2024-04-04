import Typography from "@mui/material/Typography";
import React, {useState} from "react";
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";

const CustomCheckboxRow = ({title, checkBoxNames, activeFilterArray, setActiveFilterArray}) => {
    const initializeCheckboxToggleObject = (checkBoxNames) => {
        const checkBoxToggleObject = {}
        checkBoxNames.forEach((name) => {
            checkBoxToggleObject[name] = false
        })
        return checkBoxToggleObject
    }

    const [toggleObject, setToggleObject] = useState(initializeCheckboxToggleObject(checkBoxNames));

    const handleToggleChange = (event) => {
        if(event.target.checked) {
            setActiveFilterArray([...activeFilterArray, event.target.name])
        } else {
            setActiveFilterArray(activeFilterArray.filter((filterName) => filterName !== event.target.name))
        }

        setToggleObject({...toggleObject, [event.target.name]: event.target.checked});
    };

    return (
        <>
            <Typography variant="h6" sx={{marginRight: '8px'}}>
                {title}
            </Typography>
            <FormGroup row="true">
                {
                    checkBoxNames.map((name) => (
                        <FormControlLabel
                            control={<Checkbox checked={toggleObject[name]} onChange={handleToggleChange}
                                               name={name}/>} label={name}/>
                    ))
                }
            </FormGroup>
        </>
    )
}

export default CustomCheckboxRow