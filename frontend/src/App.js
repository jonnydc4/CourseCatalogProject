import Navbar from "./componants/Navbar/Navbar";
import Home from "./componants/NavbarTabs/Home";
import {Box} from "@mui/material";
import ProjectNavigator from "./componants/DevLandingPage/ProjectNavigator";
import {useRoutes} from "react-router-dom";

function App() {
    const routesArray = [
        {
            path: "*",
            element: <ProjectNavigator/>
        },
        {
            path: "/coursecatalog",
            element: <Navbar/>,
        },
        {
            path: "/studygroups",
            element: <Home/>,
            // Home is a placeholder for the future study groups page.
        }
    ]

    let routesElement = useRoutes(routesArray);

    return (
        <Box>
            {routesElement}
        </Box>
    );
}

export default App;
