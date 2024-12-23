import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router'
import Dashboard from './Components/Dashboard'
import AddProduct from './Components/AddProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/dash" element={<Dashboard/>}/>
        <Route path="/add" element={<AddProduct/>}/>
      </Routes>
    </>
  )
}

export default App
