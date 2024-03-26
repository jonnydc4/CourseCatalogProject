import Navbar from "./componants/Navbar/Navbar";
import Home from "./componants/NavbarTabs/Home";
import {Box, createTheme, ThemeProvider} from "@mui/material";
import ProjectNavigator from "./componants/DevLandingPage/ProjectNavigator";
import {useRoutes} from "react-router-dom";

function App() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#228B22'
            }
        }
    });

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
        <ThemeProvider theme={theme}>
            <Box>
                {routesElement}
            </Box>
        </ThemeProvider>
    );
}

export default App;
