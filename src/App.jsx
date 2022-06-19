import { useState } from 'react'
import { Navbar } from './Components/Navbar'
import {HomePage} from "./Pages/HomePage"
import { Footer } from './Components/Footer'
import {Routes,Route} from 'react-router-dom'



import './App.css'
import { AllProducts } from './Pages/AllProducts'
// import { Try } from './Components/Bag'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Try/> */}
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/allproducts' element={<AllProducts/>}></Route>
    </Routes>
    <Footer/>
    
    </div>
  )
}

export default App
