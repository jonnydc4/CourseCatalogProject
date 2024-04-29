import React, {useState} from "react";
import {Card, CardContent, Typography, Button} from "@mui/material";

const CourseCard = ({code, name, description, setSelectedCourse}) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    // Handle when the course code is clicked
    const handleSelectCourse = () => {
        setSelectedCourse(code);  // Assuming onSelectCourse is a function passed as a prop that handles the selection
    };

    // Determine the maximum length for the short description
    const maxLength = 100;  // Adjust this number based on your needs
    const displayDescription = description.length > maxLength ? description.substring(0, maxLength) + "..." : description;

    return (
        <Card>
            <CardContent>
                <Button
                    onClick={handleSelectCourse}
                    sx={{
                        fontSize: '1.25rem', // This is equivalent to h5 font-size in most themes
                        fontWeight: 'bold',
                        textTransform: 'none',
                        padding: 0,
                        minWidth: 0 // Removes minimum width requirement for buttons
                    }}>
                    {code}
                </Button>
                <Typography variant="h5">{name}</Typography>
                <Typography color="text.secondary">
                    {showFullDescription ? description : displayDescription}
                </Typography>
                {description.length > maxLength && (
                    <Button onClick={toggleDescription} size="small">
                        {showFullDescription ? 'Show Less' : 'Show More'}
                    </Button>
                )}
            </CardContent>
        </Card>
    );
}

export default CourseCard;
