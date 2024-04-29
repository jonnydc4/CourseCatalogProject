import {Autocomplete, TextField} from "@mui/material";
import React from "react";

const DynamicFilterAutocomplete = ({label, optionList, activeFilters, setActiveFilters}) => {

    // const [selectedFilters, setSelectedFilters] = useState(activeFilters[label].filters)

    return (
        <Autocomplete
            multiple
            id="tags-outlined"
            options={optionList}
            value={activeFilters[label].filters}
            getOptionLabel={(option) => option}
            onChange={(event, newValue) => {

                let updatedFilters = {}
                updatedFilters[label] = {
                    isActive: activeFilters[label].isActive,
                    filters: newValue
                }

                setActiveFilters(activeFilters => ({
                    ...activeFilters,
                    ...updatedFilters
                }))
            }}
            filterSelectedOptions
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    placeholder="Filters"
                />
            )}
        />
    )
}

export default DynamicFilterAutocomplete