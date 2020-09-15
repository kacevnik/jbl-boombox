import React, {useContext } from 'react'
import { Context } from '../../context';

import './Overloy.css'

function Overloy() {
    const { hideOverloy } = useContext(Context);

    return (
        <div className="Overloy" onClick={() => hideOverloy()}>
            <div className="overloy-message"></div>
        </div>
    )
}

export default Overloy