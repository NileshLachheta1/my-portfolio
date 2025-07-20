import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import TopNavbar from './components/Navbar/TopNavbar';

function App() {
  return (
    <>
      <TopNavbar/>
      <Outlet/>
    </>
  )
}

export default App
