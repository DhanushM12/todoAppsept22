import React, {useState} from 'react'
import '../App.css'
import TodoMain from './TodoMain';

function App() {
  let time  = new Date().toLocaleTimeString();
  // const [stateName, setStateName] = useState(initialValue);
  const [currentTime, setCurrentime] = useState(time);
  const updateTime = () => {
    time  = new Date().toLocaleTimeString();
    setCurrentime(time);
  }
  setInterval(updateTime, 1000)
  return (
    <div className='App'>
      <h1>{currentTime}</h1>
      <TodoMain />
    </div>
  )
}

export default App