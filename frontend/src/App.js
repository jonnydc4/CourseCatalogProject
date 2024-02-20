import Home from "./views/Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Courses from "./views/Courses";
import Degrees from "./views/Degrees";
import Games from "./views/Games";
import About from "./views/About";

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='courses' element={<Courses/>}/>
                <Route path='degrees' element={<Degrees/>}/>
                <Route path='games' element={<Games/>}/>
                <Route path='about' element={<About/>}/>
            </Routes>
        </Router>
    );
}

export default App;
