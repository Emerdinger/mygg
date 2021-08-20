import React from "react";
import {useParams} from "react-router-dom";
import { HashRouter as Router, Link } from "react-router-dom"
import "./syles/notFound.css"

export const UserNotFound = () => {

    const {user} = useParams();

    return (
        <>
            <div id="noUsuario">
                <div className="noUsuario">
                    <div className="noUsuario-lol">
                        <h1>Usuario no encontrado!</h1>
                    </div>
                    <h2>lo siento pero no hemos encontrado ningún usuario con {user}</h2>
                    <Router>
                        <Link to="/">Ve a la página principal</Link>
                    </Router>
                </div>
            </div>
        </>
    )
}