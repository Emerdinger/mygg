import React from "react";
import iron from "../../../images/emblemas/Emblem_Iron.png";
import bronze from "../../../images/emblemas/Emblem_Bronze.png";
import silver from "../../../images/emblemas/Emblem_Silver.png";
import gold from "../../../images/emblemas/Emblem_Gold.png";
import platinum from "../../../images/emblemas/Emblem_Platinum.png";
import diamond from "../../../images/emblemas/Emblem_Diamond.png";
import master from "../../../images/emblemas/Emblem_Master.png";
import grandMaster from "../../../images/emblemas/Emblem_Grandmaster.png";
import challenger from "../../../images/emblemas/Emblem_Challenger.png";

export const Emblems = ({tier}) => {
    if (tier === "IRON") {
        return (
            <img src={iron} alt="iron-emblem"/>
        );
    } else if (tier === "BRONZE") {
        return (
            <img src={bronze} alt="bronze-emblem"/>
        );
    } else if (tier === "SILVER") {
        return (
            <img src={silver} alt="silver-emblem"/>
        );
    } else if (tier === "GOLD") {
        return (
            <img src={gold} alt="gold-emblem"/>
        );
    } else if (tier === "PLATINUM") {
        return (
            <img src={platinum} alt="platinum-emblem"/>
        );
    } else if (tier === "DIAMOND" ) {
        return (
            <img src={diamond} alt="diamond-emblem"/>
        );
    } else if (tier === "MASTER") {
        return (
            <img src={master} alt="master-emblem"/>
        );
    } else if (tier === "GRAND MASTER") {
        return (
            <img src={grandMaster} alt="grandMaster-emblem"/>
        );
    } else if (tier === "CHALLENGER") {
        return (
            <img src={challenger} alt="challenger-emblem"/>
        )
    }
}