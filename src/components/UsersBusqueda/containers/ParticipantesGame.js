import React from "react";
import {useFetch} from "../../../hooks/useFetch";
import "../styles/participantesGame.css"
import {useParams} from "react-router-dom";
import {useRango} from "../../../hooks/useRango";

export const ParticipantesGame = React.memo(({championId, spell1,spell2,summId,name, bannedChampions, idBan}) =>{
    //57
    const {region} = useParams();

    const {data: champions} = useFetch("https://ddragon.leagueoflegends.com/cdn/11.16.1/data/es_MX/champion.json");
    const {data: spells} = useFetch("https://ddragon.leagueoflegends.com/cdn/11.16.1/data/es_MX/summoner.json");
    const {data: rango} = useFetch(`https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${summId}?api_key=${process.env.REACT_APP_API_RIOT_KEY}`)
    const {flex, solo} = useRango(rango);

    const championImg = () => {
        const {data} = !!champions && champions;
        for (let clave in data) {
            if (data[clave].key == championId) {
                return (
                    <img src={`https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/${data[clave].image.full}`} alt=""/>
                )
            }
        }
    }

    const spellImg = (spell) => {
        const {data} = !!spells && spells;
        for (let clave in data) {
            if (data[clave].key == spell) {
                return (
                    <img src={`https://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/${data[clave].image.full}`} alt=""/>
                )
            }
        }
    }

    const rangoElegir = () => {
        if (solo.tier) {
            return (
                <p title="SoloQ">{solo.tier} {solo.rank}</p>
            )
        } else if (flex.tier) {
            return (
                <p title="Flexible">{flex.tier} {flex.rank}</p>
            )
        } else {
            return (
                <p>Sin clasificación</p>
            )
        }
    }

    const winrateElegir = () => {
        if (solo.winrate) {
            return (
                <p title="Win rate SoloQ">{solo.winrate}%</p>
            )
        } else if (flex.tier) {
            return (
                <p title="Win rate Flexible">{flex.winrate}%</p>
            )
        }
    }

    const banImg = () => {
        const {data} = !!champions && champions;
        for (let clave in data) {
            if (data[clave].key == bannedChampions[idBan].championId) {
                return (
                    <img className="img-ban" src={`https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/${data[clave].image.full}`} alt=""/>
                )
            }
        }
    }

    return (
        <tr>
            <td>
                <div className="c-p">
                    <div className="c">
                        <div className="c-icon">
                            {championImg()}
                        </div>
                        <div className="p-spell">
                            {spellImg(spell1)}
                            {spellImg(spell2)}
                        </div>
                    </div>
                    <div className="p">
                        {name}
                    </div>
                </div>
            </td>
            <td>{rangoElegir()}</td>
            <td>{winrateElegir()}</td>
            <td>{banImg()}</td>
        </tr>
    )
})