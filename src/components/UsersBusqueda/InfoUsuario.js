import React from "react";
import "./styles/infoUsuario.css"
import {CardClass} from "./containers/CardClass";
import {useParams} from "react-router-dom";
import {useFetch} from "../../hooks/useFetch";
import {useRango} from "../../hooks/useRango";
import {WinrateBars} from "./containers/WinrateBars";
import {ActiveGame} from "./containers/ActiveGame";
import {Historial} from "./containers/Historial";
import {useRegion} from "../../hooks/useRegion";

export const InfoUsuario = React.memo(({personalData}) => {

    const {region} = useParams();

    const reg = useRegion(region);

    const {
        data: rango
    } = useFetch(`https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${personalData.id}?api_key=${process.env.REACT_APP_API_RIOT_KEY}`)

    const {flex, solo} = useRango(rango);

    const {data: idGame} =  useFetch(`https://${reg}.api.riotgames.com/lol/match/v5/matches/by-puuid/${personalData.puuid}/ids?start=0&count=10&api_key=${process.env.REACT_APP_API_RIOT_KEY}`);

    return (
        <div id="infoUsuario">
            <div className="datos-clasificatoria">
                <WinrateBars
                    flex={flex}
                    solo={solo}
                />
                <CardClass
                    flex={flex}
                    solo={solo}
                />
            </div>
            <div className="datos-historial">
                <ActiveGame
                    personalData={personalData}
                />
                <h1 className="historial-h1">
                    Historial
                </h1>
                {
                    idGame?.map((game, i) => {
                        return (
                            <div className="historial-game" key={i}>
                                <Historial
                                           personalData={personalData}
                                           idGame = {game}
                                           reg={reg}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
})