
import InfoCarousel from "./InfoCarousel";
import {useEffect} from "react";
import axios from "axios";

export const Home = () => {
    // @ts-ignore
    useEffect( () => {
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

        const url = "https://classroom-tracker-gu6t24lssq-uk.a.run.app/ical"
        const response =  axios.get(url)
    }, []);

    return (
        <>


<InfoCarousel/>
        </>

    );
}