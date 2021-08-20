import React from "react";
import {useFetch} from "../../hooks/useFetch";
import {useParams} from "react-router-dom";
import "./syles/perfilUsuario.css"
import {useRango} from "../../hooks/useRango";

export const PerfilUsuario = ({personalData}) => {

    const {region} = useParams();

    const {
        data: rango
    } = useFetch(`https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${personalData.id}?api_key=RGAPI-840e1df5-faf3-4d81-8eea-6bf32b1f860b`)

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
}