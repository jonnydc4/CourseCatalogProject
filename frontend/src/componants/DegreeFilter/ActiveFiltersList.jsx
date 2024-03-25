import {useState} from "react";
import {Stack} from "@mui/material";
import FilterTag from "./FilterTag";

export default function ActiveFiltersList () {
    const [activeFilterArray, setActiveFilterArray] = useState([
        { id: '1', label: 'College A' },
        { id: '2', label: 'Fall Semester' },
        // Add more filters as needed
    ]);

    const handleDelete = (id) => {
        setActiveFilterArray(activeFilterArray.filter(filter => filter.id !== id));
    };

    return (
        <Stack direction="row" spacing={1}>
            {activeFilterArray.map((filter) => (
                <FilterTag
                    key={filter.id}
                    label={filter.label}
                    onDelete={() => handleDelete(filter.id)}
                />
            ))}
        </Stack>
    );
};