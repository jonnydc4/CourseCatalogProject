import React, { useState } from 'react';
import {
    Autocomplete,
    TextField,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Switch,
    FormControl,
    InputLabel,
    MenuItem,
    Container, Grid, Box, Typography
} from '@mui/material';
import ActiveFiltersList from "./ActiveFiltersList";
import SelectBar from "./SelectBar";

const CourseFilter = () => {
    const [college, setCollege] = useState(null);
    const [department, setDepartment] = useState(null);
    const [generalEducation, setGeneralEducation] = useState(false);
    const [availability, setAvailability] = useState({
        fall: false,
        spring: false,
        summer: false,
    });
    const [location, setLocation] = useState('');

    // Example options for colleges, departments, and locations. These can be fetched from an API.
    const collegeOptions = ['College A', 'College B', 'College C'];
    const departmentOptions = ['Department X', 'Department Y', 'Department Z'];
    const locationOptions = ['Location 1', 'Location 2', 'Location 3'];

    const handleAvailabilityChange = (event) => {
        setAvailability({ ...availability, [event.target.name]: event.target.checked });
    };

    return (
        <div>
            <Container maxWidth="lg" xs={12}>
                <Grid item xs={12} textAlign="center">
                    <SelectBar/>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        {/*<Autocomplete*/}
                        {/*    options={collegeOptions}*/}
                        {/*    value={college}*/}
                        {/*    onChange={(event, newValue) => {*/}
                        {/*        setCollege(newValue);*/}
                        {/*    }}*/}
                        {/*    renderInput={(params) => <TextField {...params} label="College" />}*/}
                        {/*/>*/}
                        {/*<ActiveFiltersList/>*/}
                    </Grid>
                    <Grid item xs={12} textAlign="center">
                    {/*  Add more components  */}
                    </Grid>

                </Grid>
            </Container>

            {/*<Autocomplete*/}
            {/*    options={departmentOptions}*/}
            {/*    value={department}*/}
            {/*    onChange={(event, newValue) => {*/}
            {/*        setDepartment(newValue);*/}
            {/*    }}*/}
            {/*    renderInput={(params) => <TextField {...params} label="Department" />}*/}
            {/*/>*/}
            {/*<FormGroup>*/}
            {/*    <FormControlLabel*/}
            {/*        control={<Switch checked={generalEducation} onChange={(e) => setGeneralEducation(e.target.checked)} />}*/}
            {/*        label="General Education"*/}
            {/*    />*/}
            {/*</FormGroup>*/}
            {/*<FormGroup>*/}
            {/*    <FormControlLabel control={<Checkbox checked={availability.fall} onChange={handleAvailabilityChange} name="fall" />} label="Fall" />*/}
            {/*    <FormControlLabel control={<Checkbox checked={availability.spring} onChange={handleAvailabilityChange} name="spring" />} label="Spring" />*/}
            {/*    <FormControlLabel control={<Checkbox checked={availability.summer} onChange={handleAvailabilityChange} name="summer" />} label="Summer" />*/}
            {/*</FormGroup>*/}
            {/*<FormControl fullWidth>*/}
            {/*    <InputLabel>Location</InputLabel>*/}
            {/*    <Select*/}
            {/*        value={location}*/}
            {/*        label="Location"*/}
            {/*        onChange={(event) => setLocation(event.target.value)}*/}
            {/*    >*/}
            {/*        {locationOptions.map((option) => (*/}
            {/*            <MenuItem key={option} value={option}>*/}
            {/*                {option}*/}
            {/*            </MenuItem>*/}
            {/*        ))}*/}
            {/*    </Select>*/}
            {/*</FormControl>*/}
        </div>
    );
};

export default CourseFilter;
