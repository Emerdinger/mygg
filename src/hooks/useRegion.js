import {useEffect, useState} from "react";

export const useRegion = (reg = "americas") => {

    const [region, setRegion] = useState();

    useEffect(() => {

        if (reg === "la1" || reg === "la2" || reg === "na1" || reg === "br1") {
            setRegion("americas");
        } else if (reg === "euw1" || reg === "eun1" || reg === "tr1" || reg === "ru") {
            setRegion("europe")
        } else if (reg === "jp1" || reg === "kr" || reg === "oc1") {
            setRegion("asia")
        } else {
            setRegion("americas")
        }
    }, [reg])

    return region;
}