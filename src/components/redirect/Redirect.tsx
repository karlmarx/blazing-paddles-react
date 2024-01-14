import React, { useEffect } from "react";
import InfoCarousel from "../InfoCarousel";

interface RedirectProps {
    url: string;
}

export const Redirect = ({ url }: RedirectProps) => {
    useEffect(() => {
        window.open(url);
    }, [url]);
    return <h5 />;
};
