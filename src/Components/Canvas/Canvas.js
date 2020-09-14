import React from 'react'
import Level1 from '../Level1/Level1'
import StartPage from '../StartPage/StartPage'


import './Canvas.css'

function Canvas({rem}) {
    return (
        <div className="Canvas">
            <StartPage rem={rem} />
            <Level1 />
        </div>
    )
}

export default Canvas