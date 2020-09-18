import React, {useContext } from 'react'
import { Context } from '../../context';

import './Overloy.css'

function Overloy({text}) {
    const { hideOverloy } = useContext(Context);

    return (
        <div className="Overloy" onClick={() => hideOverloy()}>
            <div className="overloy-message">
                <div className="overloy-message-wrap">
                    <div dangerouslySetInnerHTML={text}></div>
                </div>
            </div>
        </div>
    )
}

export default Overloy