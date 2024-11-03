import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Searchbar from './components/searchbar'
import Topbar from './components/Topbar'
import Showservice from './components/Showservice'
import cleaning from './images/cleaning-service.png'
import landscaping from './images/landscaping.png'
import fan from './images/fan.png'
import bath from './images/bath.png'
import washing from './images/washing.png'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Topbar/>
    <Searchbar/>
    <Showservice
        image={cleaning}
        title="Home Cleaning Service"
        price="Rs 2000"
      />
    <Showservice
        image={landscaping}
        title="Landscaping service"
        price="Rs 1000/sq-feet"
      />
    <Showservice
        image={fan}
        title="Fan installation"
        price="Rs 500"
      />
    <Showservice
        image={bath}
        title="Bathroom installation"
        price="Rs 5000"
      />
      <Showservice
        image={washing}
        title="Washing machine installation"
        price="Rs 899"
      />
      <Showservice
        image={cleaning}
        title="Home Cleaning Service"
        price="Rs 2000"
      />
    <Navbar/>
    </>
  )
}

export default App
