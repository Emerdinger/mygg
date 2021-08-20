import React from "react";
import {CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./syles/winrateBars.css"

export const WinrateBars = ({flex, solo}) => {

    return (
        <>
            <div className="porcentaje">
                {
                    flex.tier ?
                        <div className="porcentaje-ranked mr">
                            <div className="circulo-porcentaje">
                                <CircularProgressbarWithChildren value={flex.winrate}>
                                    <div className="barra-texto">
                                        <p>{flex.winrate}%</p>
                                        <p>Win Rate</p>
                                    </div>
                                </CircularProgressbarWithChildren>
                            </div>
                            <h3>Flexible</h3>
                        </div> : ""
                }
                {
                    solo.tier ?
                        <div className="porcentaje-ranked">
                            <div className="circulo-porcentaje">
                                <CircularProgressbarWithChildren value={solo.winrate}>
                                    <div className="barra-texto">
                                        <p>{solo.winrate}%</p>
                                        <p>Win Rate</p>
                                    </div>
                                </CircularProgressbarWithChildren>
                            </div>
                            <h3>SoloQ</h3>
                        </div> : ""
                }
            </div>
            <hr/>
        </>
    )
}