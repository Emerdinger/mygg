import React, {useEffect, useState} from "react";
import "../styles/historial.css"
import {useFetch} from "../../../hooks/useFetch";
import {HistorialParticipantes} from "./HistorialParticipantes";
import {useRegion} from "../../../hooks/useRegion";
import {useParams} from "react-router-dom";

export const Historial = React.memo(({idGame, personalData, reg}) => {

    const [player, setPlayer] = useState({
        championName: "",
        assists: "",
        deaths: "",
        kills: "",
        lane: "",
        champLevel: "",
        item0: "",
        item1: "",
        item2: "",
        item3: "",
        item4: "",
        item5: "",
        item6: "",
        summoner1Id: "",
        summoner2Id: "",
        neutralMinionsKilled: "",
        win: ""
    });

    const {data} = useFetch(`https://${reg}.api.riotgames.com/lol/match/v5/matches/${idGame}?api_key=${process.env.REACT_APP_API_RIOT_KEY}`);
    const {data: summ} = useFetch("https://ddragon.leagueoflegends.com/cdn/11.16.1/data/es_MX/summoner.json");
    const {info} = !!data && data
    const {gameDuration, gameMode, participants} = !!info && info

    useEffect(() => {
        userData();
    }, [info])

    const userData = () => {
        participants?.map(participant => {
            if (personalData.name === participant.summonerName) {
                setPlayer({
                    championName: participant.championName,
                    assists: participant.assists,
                    deaths: participant.deaths,
                    kills: participant.kills,
                    lane: participant.lane,
                    champLevel: participant.champLevel,
                    item0: participant.item0,
                    item1: participant.item1,
                    item2: participant.item2,
                    item3: participant.item3,
                    item4: participant.item4,
                    item5: participant.item5,
                    item6: participant.item6,
                    summoner1Id: participant.summoner1Id,
                    summoner2Id: participant.summoner2Id,
                    neutralMinionsKilled: participant.neutralMinionsKilled,
                    win: participant.win
                });
            }
            return "";
        })

    }

    const spell = (spell) => {
        const {data} = !!summ && summ;
        for (let clave in data) {
            if (data[clave].key == spell) {
                return (
                    <img src={`https://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/${data[clave].image.full}`}
                         alt=""/>
                )
            }
        }
    }

    return (
        <>
            <div className="historial-title">
                <p>{gameMode} {(gameDuration / 60000).toFixed()} Minutos: { player.win ? <span>Victoria</span> : <span>Derrota</span>}</p>
            </div>
            <div className="historial-card">
                <div className="rs-ckdaline">
                    <div className="card-body-cSmm">
                        <img
                            src={`https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/${player.championName}.png`}
                            alt="" className="c-img"/>
                        <div className="body-smm">
                            {spell(player.summoner1Id)}
                            {spell(player.summoner2Id)}
                        </div>
                    </div>
                    <div className="card-body-kda">
                        <p className="kda">{player.kills} / <span>{player.deaths}</span> / {player.assists}</p>
                        <p className="kda-p">{(player.kills + player.assists) / player.deaths} KDA</p>
                    </div>
                    <div className="card-body-line">
                        <p className="rol">{player.lane}</p>
                        <p>lv {player.champLevel}</p>
                        <p>{player.neutralMinionsKilled} cs</p>
                    </div>
                </div>
                <div className="rs-ip">
                    <div className="card-body-items">
                        <img src={`https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/${player.item0}.png`}
                             alt=""/>
                        <img src={`https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/${player.item1}.png`}
                             alt=""/>
                        <img src={`https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/${player.item2}.png`}
                             alt=""/>
                        <img src={`https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/${player.item3}.png`}
                             alt=""/>
                        <img src={`https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/${player.item4}.png`}
                             alt=""/>
                        <img src={`https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/${player.item5}.png`}
                             alt=""/>
                        <img src={`https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/${player.item6}.png`}
                             alt=""/>
                    </div>
                    <div className="card-body-players">
                        <div className="player-team m">
                            {
                                participants?.map((participant, i) => {
                                    if (participant.teamId === 100) {
                                        return (
                                            <HistorialParticipantes key={i}
                                                                    champion={participant.championName}
                                                                    summoner={participant.summonerName}
                                            />
                                        )
                                    }
                                    return "";
                                })
                            }
                        </div>
                        <div className="player-team">
                            {
                                participants?.map((participant, i) => {
                                    if (participant.teamId === 200) {
                                        return (
                                            <HistorialParticipantes key={i}
                                                                    champion={participant.championName}
                                                                    summoner={participant.summonerName}
                                            />
                                        )
                                    }
                                    return ""
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})