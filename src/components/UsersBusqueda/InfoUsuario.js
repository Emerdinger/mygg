import React from "react";
import "./syles/infoUsuario.css"
import diamond from "../../images/emblemas/Emblem_Diamond.png"
import {CardClass} from "./CardClass";
import {useParams} from "react-router-dom";
import {useFetch} from "../../hooks/useFetch";
import {useRango} from "../../hooks/useRango";
import {WinrateBars} from "./WinrateBars";

export const InfoUsuario = ({personalData}) => {

    const {region} = useParams();

    const {
        data: rango
    } = useFetch(`https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${personalData.id}?api_key=RGAPI-840e1df5-faf3-4d81-8eea-6bf32b1f860b`)

    const {flex, solo} = useRango(rango);

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
                Historial
            </div>
        </div>
    )
}