import React from "react";
import "./syles/infoUsuario.css"
import {Emblems} from "./Emblems";

export const CardClass = ({flex, solo}) => {
    return (
        <>
            {
                flex.tier ?
                    <div className="card-class">
                        <div className="card-title">
                            <p>Estadísticas de flex</p>
                        </div>
                        <div className="card-body">
                            <div className="card-body-image">
                                <Emblems
                                    tier={flex.tier}
                                />
                            </div>
                            <div className="card-body-info">
                                <p>{flex.tier} {flex.rank}</p>
                                <p>{flex.leaguePoints} lp</p>
                                <p>{flex.wins} victorias - {flex.losses} derrotas</p>
                            </div>
                        </div>
                    </div> : <p style={{textAlign: "center"}}>Aún no tiene una clasificación</p>
            }
            <div className="card-class">
                <div className="card-title">
                    <p>Estadísticas de SoloQ</p>
                </div>
                {
                    solo.tier ?
                        <div className="card-body">
                            <div className="card-body-image">
                                <Emblems
                                    tier={solo.tier}
                                />
                            </div>
                            <div className="card-body-info">
                                <p>{solo.tier} {solo.rank}</p>
                                <p>{solo.leaguePoints} lp</p>
                                <p>{solo.wins} victorias - {solo.losses} derrotas</p>
                            </div>
                        </div> : <p style={{textAlign: "center"}}>Aún no tiene una clasificación</p>
                }
            </div>

        </>
    )
}