import {Stack} from "@mui/material";
import FilterTag from "./FilterTag";

export default function ActiveFiltersList ({activeFilters, setActiveFilters}) {

    const handleDelete = (filterNameToDelete) => {
        setActiveFilters(activeFilters.filter(filterName => filterName !== filterNameToDelete));
    };

    return (
        <Stack direction="row" spacing={1}>
            {activeFilters.map((filterName) => (
                <FilterTag
                    key={filterName}
                    label={filterName}
                    onDelete={() => handleDelete(filterName)}
                />
            ))}
        </Stack>
    );
};