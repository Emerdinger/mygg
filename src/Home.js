import React from "react";
import {
    HashRouter as Router, Switch, Route
} from "react-router-dom";
import {NavBar} from "./components/NavBar";
import {Inicio} from "./components/inicio/Inicio";
import {Username} from "./components/UsersBusqueda/Username";

function Home() {
    return (
        <>
            <NavBar />
            <Router>
                <Switch>
                    <Route path="/:region/user/:user">
                        <Username />
                    </Route>
                    <Route path="/">
                        <Inicio />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default Home;
