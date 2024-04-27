import {Card, CardContent, Typography} from "@mui/material";
import React from "react";

const CourseCard = ({code, name, description}) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" fontWeight="bold">{code}</Typography>
                <Typography variant="h5">{name}</Typography>
                <Typography color="text.secondary">{description}</Typography>
            </CardContent>
        </Card>
    )
}

export default CourseCard