import React from "react";
import {useFetch} from "../../../hooks/useFetch";
import {useParams} from "react-router-dom";
import {ParticipantesGame} from "./ParticipantesGame";
import "../styles/activeGame.css"

export const ActiveGame = React.memo(({personalData}) => {

    const {region} = useParams()

    const {data} = useFetch(`https://${region}.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${personalData.id}?api_key=${process.env.REACT_APP_API_RIOT_KEY}`)

    const { status, bannedChampions, participants} = !!data && data;

    return (
        <>
            {
                status ?
                ""
                :
                    <div className="active-game">
                        <div className="active-title">
                            <h1>Partida en vivo</h1>
                        </div>
                        <div className="active-body">
                            <div className="card-active">
                                <div className="card-active-team">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th scope="col">Equipo Azul</th>
                                            <th scope="col">Liga</th>
                                            <th scope="col">Win ratio</th>
                                            <th scope="col">Ban</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {participants?.map((participant, i) => {
                                            if (participant.teamId === 100){
                                                return (
                                                    <ParticipantesGame key={participant.summonerId}
                                                        championId={participant.championId}
                                                        profileIcon={participant.profileIconId}
                                                        spell1={participant.spell1Id}
                                                        spell2={participant.spell2Id}
                                                        summId={participant.summonerId}
                                                        name={participant.summonerName}
                                                        bannedChampions={bannedChampions}
                                                        idBan={i}
                                                    />
                                                )
                                            }
                                            return "";
                                        })}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="card-active-team">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th scope="col">Equipo Rojo</th>
                                            <th scope="col">Liga</th>
                                            <th scope="col">Win ratio</th>
                                            <th scope="col">Ban</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {participants?.map((participant, i) => {
                                            if (participant.teamId === 200){
                                                return (
                                                    <ParticipantesGame key={participant.summonerId}
                                                                       championId={participant.championId}
                                                                       profileIcon={participant.profileIconId}
                                                                       spell1={participant.spell1Id}
                                                                       spell2={participant.spell2Id}
                                                                       summId={participant.summonerId}
                                                                       name={participant.summonerName}
                                                                       bannedChampions={bannedChampions}
                                                                       idBan={i}
                                                    />
                                                )
                                            }
                                            return "";
                                        })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
})