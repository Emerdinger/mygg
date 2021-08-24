import React from "react";
import {useFetch} from "../../hooks/useFetch";
import {useParams} from "react-router-dom";
import "./styles/perfilUsuario.css"
import {useRango} from "../../hooks/useRango";

export const PerfilUsuario = React.memo(({personalData}) => {

    const {region} = useParams();

    const {
        data: rango
    } = useFetch(`https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${personalData.id}?api_key=${process.env.REACT_APP_API_RIOT_KEY}`)

    const {flex, solo} = useRango(rango);

    return (
        <div id="perfilUsuario">
            <div className="icono-datos">
                <img src={`http://ddragon.leagueoflegends.com/cdn/11.16.1/img/profileicon/${personalData.profileIconId}.png`} alt="profle-icon"/>
                <div className="icono-datos-info">
                    <h1>{personalData.name}</h1>
                    <h2>Nivel {personalData.summonerLevel}</h2>
                    <div className="flex-ranked">
                        {flex.tier ? <button className="flex-solo-button flex">Flexible: {flex.tier} {flex.rank}</button> : ""}
                        {flex.tier ? <button className="flex-solo-button-lp flex">{flex.leaguePoints} lp</button> : ""}
                    </div>
                    <div className="solo-ranked">
                        {solo.tier ? <button className="flex-solo-button solo">SoloQ: {solo.tier} {solo.rank}</button> : ""}
                        {solo.tier ? <button className="flex-solo-button-lp solo">{solo.leaguePoints} lp</button> : ""}
                    </div>
                </div>
            </div>
        </div>

    )
})