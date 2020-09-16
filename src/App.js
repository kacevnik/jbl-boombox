import React, {useState} from 'react';
import './App.css';
import Canvas from './Components/Canvas/Canvas';
import { Context } from './context';

function App() {

  const [mobile, setMobile] = useState(false)
  const getRem = () => {
    if (window.innerWidth < window.innerHeight && window.innerWidth < 768) {
      setMobile(true)
      return window.innerWidth / 32
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
  const [overloy, setOverloy] = useState(false)

  window.addEventListener("resize", () => {
    setRem(getRem)
  })

  let classApp = ['App']
  classApp.push(levels[level])

  const changeLevel = () => {
    let newLevel = level + 1;
    setLevel(newLevel);
    if (newLevel === 1) {
      setOverloy(true);
    }
  }

  const hideOverloy = () => {
    console.log(1)
    setOverloy(false);
  }

  if ( mobile )  {
    classApp.push('amobile')
  }

  if ( overloy )  {
    classApp.push('overloyshow')
  }

  return (
    <Context.Provider value={{
      changeLevel, hideOverloy
    }}>
    <div className={classApp.join(' ')} style={{fontSize: rem + 'px'}}>
      <Canvas rem={rem} mobile={mobile}/>
    </div>
    </Context.Provider>
  );
}

export default App;
