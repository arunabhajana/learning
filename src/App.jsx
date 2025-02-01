import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const Name = 'Arun';
const multiply = (a,b) => { return a*b;}
const specialClass = 'simple-class';
const App = () => {
  return (
    <div className='Content'>
      <p>2+2 = {2+2}</p>
      <p>Hi, {Name}</p>
      <p>My Friends {["A", "B", "C"]}</p>
      <p>2 * 3 = {multiply(2,3)}</p>
      <p className = {specialClass}>This is a special class</p>
    </div>
  )
}
export default App;
