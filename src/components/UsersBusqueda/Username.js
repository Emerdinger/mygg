import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useFetch} from "../../hooks/useFetch";
import "../../styles/profileUser.css"
import {PerfilUsuario} from "./PerfilUsuario";
import {UserNotFound} from "./UserNotFound";
import {InfoUsuario} from "./InfoUsuario";

export const Username = () => {

    const {user, region} = useParams();

    const url = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${user}?api_key=RGAPI-840e1df5-faf3-4d81-8eea-6bf32b1f860b`

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
                <div>
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