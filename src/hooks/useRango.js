import {useState, useEffect} from "react";

export const useRango = (rango) => {

    const [flex, setFlex] = useState({
        ranked: "Flex",
        leagueId: "",
        leaguePoints: "",
        losses: "",
        wins: "",
        tier: "",
        rank: "",
        winrate: ""
    });

    const [solo, setSolo] = useState({
        ranked: "Solo",
        leagueId: "",
        leaguePoints: "",
        losses: "",
        wins: "",
        tier: "",
        rank: "",
        winrate: ""
    });

    useEffect(() => {
        rango?.map((ran, i) => {
            if (i === 0){
                const winrate = Math.trunc(ran.wins / (ran.losses + ran.wins) * 100);
                setFlex({
                    ...flex,
                    leagueId: ran.leagueId,
                    leaguePoints: ran.leaguePoints,
                    losses: ran.losses,
                    wins: ran.wins,
                    tier: ran.tier,
                    rank: ran.rank,
                    winrate
                })
            }else{
                const winrate = Math.trunc(ran.wins / (ran.losses + ran.wins) * 100);
                setSolo ({
                    ...solo,
                    leagueId: ran.leagueId,
                    leaguePoints: ran.leaguePoints,
                    losses: ran.losses,
                    wins: ran.wins,
                    tier: ran.tier,
                    rank: ran.rank,
                    winrate
                });
            }

        })
    }, [rango])

    const rangos = {
        flex,
        solo
    }

    return rangos;
}