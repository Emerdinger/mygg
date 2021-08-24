import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useFetch} from "../../hooks/useFetch";
import "../../styles/profileUser.css"
import {PerfilUsuario} from "./PerfilUsuario";
import {UserNotFound} from "./UserNotFound";
import {InfoUsuario} from "./InfoUsuario";

export const Username = () => {

    const {user, region} = useParams();

    const url = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${user}?api_key=${process.env.REACT_APP_API_RIOT_KEY}`

    useEffect(() => {

    }, [url])

    const {
        loading,
        data
    } = useFetch(url);

    const datosMostrar = () => {
        if (data.status){
            return (
                <div>
                    <UserNotFound />
                </div>
            )
        } else {
            return (
                <div className="user-perfil-gg">
                    <PerfilUsuario
                        personalData={data}
                    />
                    <InfoUsuario
                        personalData={data}
                    />
                </div>
            )
        }
    }

    return (
        <div>
            <div>
                {
                    loading ?
                        (
                            <div className="lds-hourglass text-center"></div>
                        )
                        :
                        (
                            datosMostrar()
                        )
                }
            </div>
        </div>
    )
}