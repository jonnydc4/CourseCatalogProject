import React from 'react';
import Select from 'react-select';

export default function SelectBar() {
    return (
        <Select
            isMulti
            options={[{label: "Option 1"}, {label: "Option 2"}]}
        />
    )
}