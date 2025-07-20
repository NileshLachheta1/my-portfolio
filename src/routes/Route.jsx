import React from 'react';
import { createBrowserRouter, createRoutesFromElements,  Route } from 'react-router-dom';

import App from './../App.jsx';
import { Home, About, Contact, Resume, Projects } from './../pages'

const AppRoutes = (
    createBrowserRouter(
        createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="resume" element={<Resume/>}/>
            <Route path="projects" element={<Projects/>}/>
        </Route>
        )
    )
  )


export default AppRoutes