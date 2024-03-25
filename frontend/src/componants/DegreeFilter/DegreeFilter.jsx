import React, {useState} from 'react';
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
    Container, Grid, Box, Typography, Stack, Button, FormHelperText, FormLabel
} from '@mui/material';
import ActiveFiltersList from "./ActiveFiltersList";


const DegreeFilter = () => {
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
        setAvailability({...availability, [event.target.name]: event.target.checked});
    };

    return (
        <Stack direction="row">
            <Container maxWidth="sm" xs={12}>
                <Typography variant="h3" textAlign='center'>
                    Active Filters
                </Typography>
                <Box
                    gap={4}
                    p={2}
                    sx={{border: '2px solid grey'}}
                >
                    <ActiveFiltersList/>
                </Box>
            </Container>
            <Container maxWidth="lg" xs={12}>
                {/*<Grid item xs={12} textAlign="center">*/}
                {/*    <ActiveFiltersList/>*/}
                {/*</Grid>*/}
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
                        <Typography varient="h5">
                            Availability:
                        </Typography>
                        <FormGroup row="true">
                            <FormControlLabel
                                control={<Checkbox checked={availability.fall} onChange={handleAvailabilityChange}
                                                   name="fall"/>} label="Fall"/>
                            <FormControlLabel
                                control={<Checkbox checked={availability.spring} onChange={handleAvailabilityChange}
                                                   name="spring"/>} label="Spring"/>
                            <FormControlLabel
                                control={<Checkbox checked={availability.summer} onChange={handleAvailabilityChange}
                                                   name="summer"/>} label="Summer"/>
                        </FormGroup>
                    </Grid>

                    <Grid item xs={12}>
                        <Button variant="outlined">
                            Add Filters
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Stack>


    );
};

export default DegreeFilter;