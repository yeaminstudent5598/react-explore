import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Count from './Count'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {

  function handleClick (){
    alert('button clicked')
  }
  const handleClick2 = ()=> {
    alert('clicked me 2')
  }
  const FivebuttonClicked = (num) => {
       alert(num + 5)
  }

  return (
    <>
    
      <h3>React Explore</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
     <Count></Count>
      <button onClick={handleClick}>Click me!</button>
      <button onClick={handleClick2}>click me 2!</button>
      <button onClick={()=>{alert('third button clicked')}}>thrid</button>
      <button onClick={() => FivebuttonClicked(99)}>five</button>
    </>
  )
}

export default App
