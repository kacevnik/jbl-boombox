import React, {useContext, useState } from 'react'
import { Context } from '../../context';

import './StartPage.css'

import logo from '../../img/logo.svg'

function StartPage({rem, mobile}) {

    const { changeLevel } = useContext(Context);
    const [bp1, setBp1] = useState('left, center')
    const [bp2, setBp2] = useState('right, center')

    const paralax = (e) => {
        if (!mobile){
            setBp1((e.pageX * -1 / 100) + 'px ' + (e.pageY * -1 / 100 +5 ) + 'px');
            setBp2((e.pageX * -1 / 100 + (rem * 159)) + 'px ' + (e.pageY * -1 / 100 +5 ) + 'px');
        }
    }

    return (
        <div className="StartPage" onMouseMove={(e) => paralax(e)}>
            <div className="start-bg-left" style={{backgroundPosition: bp1}}>
                <div className="start-bg-right" style={{backgroundPosition: bp2}}>
                    <div className="start-bg-center">
                        <div className="app-container">
                            <div className="start-content">
                                <div className="start-content-top">
                                    <span>Игра</span>
                                    <img src={logo} alt="JBL" />
                                </div>
                                <h1><spna>Заряди жизнь музыкой!</spna></h1>
                                <p>
                                    <span>
                                    Сейчас у каждого из нас в смартфоне целая музыкальная вселенная. Но с помощью одного только телефона настоящий праздник не устроить! Вместе с JBL, представившим новинку <a href="https://harman.club/jblboombox2blkeu-jbl-boombox-2?utm_source=google&utm_medium=cpc&utm_campaign=krg_po_modelyam_rf_poisk&utm_content=ch_google_adwords%7Ctrg_kwd-447774786368%7Ccrt_449246756078%7Ckwmt_b%7Cps_%7Csrct_g%7Ctrgt_%7Csrc_%7Cdevt_c%7Cdevm_%7Ccid_10202635645%7Clcl_9047022%7Cfdi_%7Cmrlid_13813%7Cdop_&utm_term=%2Bjbl%20%2Bboombox%20%2B2&gclid=EAIaIQobChMIzoCQvffo6wIVmqiyCh0PUAEXEAAYASAAEgLaBvD_BwE" target="blank">JBL Boombox 2</a> — беспроводную акустическую систему с мощным звуком и взрывными басами, мы предлагаем тебе отправиться в идеальное музыкальное приключение. Найди все части устройства в нашей игре, а мы расскажем, как бумбокс помогает задать настроение любому мероприятию!
                                    </span>
                                </p>
                                <span className="app-btn" onClick={() => changeLevel()}><span>Начать</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartPage