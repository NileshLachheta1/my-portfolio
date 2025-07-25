import './App.css'
import { Outlet } from 'react-router-dom'
import TopNavbar from './components/Navbar/TopNavbar.tsx';

function App() {
  return (
    <>
      <TopNavbar/>
      <Outlet/>
    </>
  )
}

export default App
