import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Chai.css'  


function App() {
  const [color, setColor] = useState("olive") // using usestate hook to change the state of ui on updation of varialbe


  return (
    <>
    <div className='container' style={{backgroundColor: color}}> 
      <div className='pallete'>
        <button className='bt'  onClick={() =>setColor("Red")} style={{backgroundColor: "Red"}}> Red</button>
        <button className='bt' onClick={() =>setColor("Orange")} style={{backgroundColor: "Orange"}}>Orange</button>
        <button className='bt' onClick={() =>setColor("Gray")} style={{backgroundColor: "Gray"}}>Gray</button>
        <button className='bt' onClick={() =>setColor("Pink")} style={{backgroundColor:"Pink"}}>Pink</button>
      </div>
    </div>
      
    </>
  )
}

export default App
