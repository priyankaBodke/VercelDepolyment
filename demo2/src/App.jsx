import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
function dothis(){
  window.alert("hello");
}
  return (
    <>
      <h1>hii there,i am developer</h1>
      <button onClick={dothis}>click me</button>
    </>
  )
}

export default App
