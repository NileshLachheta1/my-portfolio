import React from 'react'
import './Home.css'
import { About, Banner, Contact, Projects, Resume } from './index'

const Home = () => {
  return (
    <div>
        <Banner />
        <About/>
        <Projects/>
        <Resume/>
        <Contact/>
    </div>
  )
}

export default Home