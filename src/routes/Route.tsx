import { createBrowserRouter, createRoutesFromElements,  Route } from 'react-router-dom';

import App from '../App.js';
import { Home, About, Contact, Resume, Projects } from '../pages/index.ts'

const AppRoutes = (
    createBrowserRouter(
        createRoutesFromElements(
        <Route path="my-portfolio/" element={<App/>}>
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