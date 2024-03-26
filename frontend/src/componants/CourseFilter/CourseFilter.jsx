import React, {useState} from "react";
import {
    Autocomplete,
    TextField,
    FormGroup,
    FormControlLabel,
    Switch,
    Container, Grid, Box, Typography, Stack, Button
} from "@mui/material";
import ActiveFiltersList from "./ActiveFiltersList";
import DropdownComponent from "./DropDownComponent";
import CustomSlider from "./CustomSlider";
import CustomCheckboxRow from "./CustomCheckboxRow";

const CourseFilter = () => {
    const [college, setCollege] = useState(null);
    const [department, setDepartment] = useState(null);
    const [generalEducation, setGeneralEducation] = useState(false);
    const [location, setLocation] = useState("");
    const [activeFilterArray, setActiveFilterArray] = useState([])

    // Example options for colleges, departments, and locations. These can be fetched from an API.
    const collegeOptions = ["College A", "College B", "College C"];
    const departmentOptions = ["Department X", "Department Y", "Department Z"];
    const locationOptions = ["Location 1", "Location 2", "Location 3"];
    const availabilityOptions = ["Fall", "Spring", "Summer"]
    const modeOptions = ["In person", "Online", "Hybrid", "Livestream"]

    const handleFilterAdd = () => {
        // Make sure all the selected filters get into the activeFilterArray
        // College Filter
        setActiveFilterArray(activeFilterArray.push(college))
        console.log(activeFilterArray)

    }

    return (
        <Stack direction="row">
            <Container maxWidth="sm" xs={12}>
                <Typography variant="h3" textAlign="center">
                    Active Filters
                </Typography>
                <Box
                    gap={4}
                    p={2}
                    sx={{border: "2px solid grey"}}
                >
                    {/*<ActiveFiltersList activeFilters={activeFilterArray} setActiveFilters={setActiveFilterArray}/>*/}
                </Box>
            </Container>
            <Container maxWidth="lg" xs={12}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Autocomplete
                            options={collegeOptions}
                            value={college}
                            onChange={(event, newValue) => {
                                setCollege(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} label="College"/>}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Autocomplete
                            options={departmentOptions}
                            value={department}
                            onChange={(event, newValue) => {
                                setDepartment(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} label="Department"/>}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Autocomplete
                            options={locationOptions}
                            value={location}
                            onChange={(event, newValue) => {
                                setLocation(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} label="Location"/>}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormGroup>
                            <FormControlLabel
                                control={<Switch checked={generalEducation}
                                                 onChange={(e) => setGeneralEducation(e.target.checked)}/>}
                                label="General Education"
                            />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12}>
                        <CustomCheckboxRow title="Availability" checkBoxNames={availabilityOptions}/>
                    </Grid>
                    <Grid item xs={12}>
                        <CustomCheckboxRow title="Mode" checkBoxNames={modeOptions}/>
                    </Grid>
                    <Grid item xs={12}>
                        <DropdownComponent
                            title="Credits"
                            childComponent={
                                <CustomSlider
                                    defaultValue={3}
                                    step={1}
                                    min={1}
                                    max={5}
                                />
                            }/>
                    </Grid>
                    <Grid item xs={12}>
                        <DropdownComponent
                            title="Course Level"
                            childComponent={
                                <CustomSlider
                                    defaultValue={1000}
                                    step={1000}
                                    min={1000}
                                    max={4000}
                                />
                            }/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="outlined"
                            onClick={handleFilterAdd}
                        >
                            Add Filters
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Stack>


    );
};

export default CourseFilter;
