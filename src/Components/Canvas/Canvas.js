import React from 'react'
import Level1 from '../Level1/Level1'
import MobileTurn from '../MobileTurn/MobileTurn'
import Overloy from '../Overloy/Overloy'
import StartPage from '../StartPage/StartPage'


import './Canvas.css'

function Canvas({rem, mobile}) {
    return (
        <div className="Canvas">
            <StartPage rem={rem} mobile={mobile}/>
            <MobileTurn />
            <Overloy />
            <Level1 />
        </div>
    )
}

export default Canvas