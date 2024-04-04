import React, {useState} from "react";
import {
    Container, Grid, Stack, Button
} from "@mui/material";
import DropdownComponent from "./DropDownComponent";
import DynamicFilterAutocomplete from "./DynamicFilterAutocomplete";

const CourseFilter = () => {
    const [toggles, setToggles] = useState(false);
    const [filters, setFilters] = useState([]);
    const fieldsForFilters = [
        "College",
        "Department",
        "Degree",
        "Elective",
        "General education",
        "Distribution",
        "Level",
        "Location",
        "Mode",
        "Credit",
        "Skill",
        "Job",
        "Outcome",
        "Favorites"
    ]

    // Example options for colleges, departments, and locations. These can be fetched from an API.
    const filterOptions = {
        "College": ["College of Science", "College of Humanities & Social Sciences", "College of Health & Public Service"],
        "Department": [],
        "Degree": [],
        "Elective": [],
        "General education": [],
        "Distribution": [],
        "Level": [],
        "Location": [],
        "Mode": [],
        "Credit": [],
        "Skill": [],
        "Job": [],
        "Outcome": [],
        "Favorites": []
    }


    const initializeFilterObject = () => {
        let newFilterObject = {}

        fieldsForFilters.forEach((fieldName) => {
            newFilterObject[fieldName] = {
                isActive: false,
                filters: []
            }
        })

        return newFilterObject
    }

    const [filterObject, setFilterObject] = useState(initializeFilterObject)

    const handleFilterAdd = () => {
        console.log(filterObject)
    }

    return (
        <Stack direction="row">
            <Container maxWidth="lg" xs={12}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        {fieldsForFilters.map((fieldName) => (
                            <DropdownComponent
                                label={fieldName}
                                childComponent={
                                    <DynamicFilterAutocomplete
                                        label={fieldName}
                                        optionList={filterOptions[fieldName]}
                                        activeFilters={filterObject}
                                        setActiveFilters={setFilterObject}
                                    />
                                }
                                activeFilters={filterObject}
                                setActiveFilters={setFilterObject}
                            />
                        ))}

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
