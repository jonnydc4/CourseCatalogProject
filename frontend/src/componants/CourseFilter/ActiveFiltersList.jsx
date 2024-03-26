import {useState} from "react";
import {Stack} from "@mui/material";
import FilterTag from "./FilterTag";

export default function ActiveFiltersList ({activeFilters, setActiveFilters}) {

    const handleDelete = (id) => {
        setActiveFilters(activeFilters.filter(filter => filter.id !== id));
    };

    return (
        <Stack direction="row" spacing={1}>
            {activeFilters.map((filter) => (
                <FilterTag
                    key={filter.id}
                    label={filter.label}
                    onDelete={() => handleDelete(filter.id)}
                />
            ))}
        </Stack>
    );
};