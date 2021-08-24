import React from "react";
import "../styles/historial.css"

export const HistorialParticipantes = React.memo(({champion, summoner}) => {
    return (
        <div className="player-img">
            <img src={`https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/${champion}.png`} alt=""/>
            <p>{summoner}</p>
        </div>
    )
})