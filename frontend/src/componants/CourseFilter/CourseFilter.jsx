import React, { useState } from "react";
import {
    Container, Grid, Stack, Button
} from "@mui/material";
import DropdownComponent from "./DropDownComponent";
import DynamicFilterAutocomplete from "./DynamicFilterAutocomplete";

const CourseFilter = ({ filterSettings, onAddFilters }) => {
    const fieldsForFilters = [
        "college",
        "department",
        "degree",
        "elective",
        "general education",
        "distribution",
        "level",
        "location",
        "mode",
        "credit",
        "skill",
        "job",
        "outcome",
        "favorites"
    ];

    const filterOptions = {
        "college": ["College of Science", "College of Humanities and Social Sciences", "College of Health and Public Service"],
        "department": [],
        "degree": [],
        "elective": [],
        "general education": [],
        "distribution": [],
        "level": [],
        "location": [],
        "mode": [],
        "credit": [],
        "skill": [],
        "job": [],
        "outcome": [],
        "favorites": []
    };

    const initializeFilterObject = () => {
        if (Object.keys(filterSettings).length === 0) {
            let newFilterObject = {};
            fieldsForFilters.forEach(fieldName => {
                newFilterObject[fieldName] = {
                    isActive: false,
                    filters: []
                };
            });
            return newFilterObject;
        } else {return filterSettings}
    };

    const [filterObject, setFilterObject] = useState(initializeFilterObject);

    const handleFilterAdd = () => {
        // Call the passed in onAddFilters function with the current state of filterObject
        onAddFilters(filterObject);
    };

    return (
        <Stack direction="row">
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        {fieldsForFilters.map((fieldName) => (
                            <DropdownComponent
                                key={fieldName}  // Make sure to include keys for list items
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
