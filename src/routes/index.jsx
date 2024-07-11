import React from 'react'
import {Route, Routes} from "react-router-dom";
import Home from "./home/Home.jsx";
import NotFound from "./not-found/NotFound.jsx";
import Blog from "./blog/Blog.jsx";
import About from "./about/About.jsx";
import Contact from "./contact/Contact.jsx";
import Navbar from "../components/navbar/Navbar.jsx";

const Index = () => {
    return (
        <Routes>
            <Route element={<Navbar/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Route>
            <Route path="/single-page" element={<Element/>}/>
            <Route path="/notFound" element={<NotFound/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}
export default Index
