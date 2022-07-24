import './App.css'
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'
import Home from './pages/Home'
import All from './pages/All'
import Projects from "./pages/Projects";
import Images from "./pages/Images";
import Blog from "./pages/Blog";

function App() {

    // TODO auto suggestion sa lilitaw pag na seserach?
    // how to implement that and
    // should i implement it in this site

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/all" element={<All/>}/>
                <Route exact path="/projects" element={<Projects/>}/>
                <Route exact path="/images" element={<Images/>}/>
                <Route exact path="/blog" element={<Blog/>}/>
                {/*<Route path="*" element={<NotFound />} />*/}
            </Routes>
        </BrowserRouter>
    )
}

export default App
