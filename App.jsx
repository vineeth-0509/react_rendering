import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    //react fragment will be the parent for those elements that was in the react.Fragment
    <div>
      <HeaderWithButton/>
      <Header title="vineeth2"></Header>

    </div>
  )
}
function HeaderWithButton(){
  const [title,setTitle]=useState("my name is vineeth1");
  function updateTitle(){
    setTitle("my name is "+Math.random());
  }
  return <div>
    <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
  </div>
}
function Header({title}){
  return <div>
  {title}
  </div>
}

export default App
//re renders means that 
/**
 1.react did some work to calculate what all should update in this component
 2.The component actually got called (you can put a log to confirm this)
 3.The insepector shows you a bounding box around the component

 it happens when
 1.A state variable that is being used inside a component changes
 2. A parent component re-render triggers all children re-rendering
 */