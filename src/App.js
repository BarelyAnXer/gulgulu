import './App.css'
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'
import Home from './pages/Home'
import All from './pages/All'
import Projects from "./pages/projects";
import Images from "./pages/Images";
import Blog from "./pages/Blog";

function App() {

    // TODO auto suggestion sa lilitaw pag na seserach?
    // how to implement that and
    // should i implement it in this site

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/all" element={<All/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/images" element={<Images/>}/>
                <Route path="/news" element={<Blog/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
