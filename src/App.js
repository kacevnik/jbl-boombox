import React, {useState} from 'react';
import './App.css';
import Canvas from './Components/Canvas/Canvas';
import { Context } from './context';

function App() {

  const [mobile, setMobile] = useState(false)
  const getRem = () => {
    if (window.innerWidth < window.innerHeight && window.innerWidth < 768) {
      setMobile(true)
      return window.innerWidth / 37.5
    } else {
      setMobile(false)
    }
    return window.innerWidth / 192
  }

  const levels = [
    'start',
    'level-1'
  ]

  const [rem, setRem] = useState(getRem)
  const [level, setLevel] = useState(0)

  window.addEventListener("resize", () => {
    setRem(getRem)
  })

  let classApp = ['App']
  classApp.push(levels[level])

  const changeLevel = () => {
    let newLevel = level + 1;
    setLevel(newLevel);
  }

  return (
    <Context.Provider value={{
      changeLevel
    }}>
    <div className={classApp.join(' ')} style={{fontSize: rem + 'px'}}>
      <Canvas rem={rem} />
    </div>
    </Context.Provider>
  );
}

export default App;
