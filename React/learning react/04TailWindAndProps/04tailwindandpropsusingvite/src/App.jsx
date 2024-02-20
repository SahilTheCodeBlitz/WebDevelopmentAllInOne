import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Cards'


function App() {
  const [count, setCount] = useState(0)

  

  const array =[67,68,69,70]

  const object ={
    name:"Sahil",
    age:78,
    gender:'Male'
  }    

  return (
    <>


      {/* <Cards channel = "chaiaurcode" myArr = [3,3,5]/>  we cannot pass object and array like these*/}
      {/* <Cards channel = "sahilwithcoffee" object array/>   right syntax*/}
      {/* This is how we pass array and object as the props*/}      
      {/*  here channel and username are props which we can use to dynamically set the contetns of cards */}

      {/* now passing username and displaying it on cards */}

      <Cards username="Sahil"/>

      <Cards username="SMohan"/>

      <Cards />
      


    </>
  )
}

export default App
