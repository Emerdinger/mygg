import React from "react";
import {useForm} from "../../hooks/useForm";
import "../../styles/inicio.css"

export const FormUsername = () => {

    const [{username}, handleInputChange] = useForm({
        username: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username.trim().length <= 3) {
            return;
        }

        window.location.assign(`/#/${document.querySelector("#region").value}/user/${username}`);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="search-bar">
                <input type="text" value={username} name="username" onChange={handleInputChange}
                       placeholder="Nombre de usuario"/>
                <div className="region">
                    <p>
                        Región:
                        <select name="region" id="region">
                            <option value="la1">LAN</option>
                            <option value="la2">LAS</option>
                            <option value="euw1">EUW</option>
                            <option value="br1">BR</option>
                            <option value="eun1">EUNE</option>
                            <option value="jp1">JP</option>
                            <option value="kr">KR</option>
                            <option value="na1">NA</option>
                            <option value="oc1">OCE</option>
                            <option value="ru">RU</option>
                            <option value="tr1">TR</option>
                        </select>
                    </p>
                    <button type="submit" className="btn">Buscar</button>
                </div>
            </form>
        </>
    )
}