import React, { ReactNode, useEffect } from "react";
import InfoCarousel from "../InfoCarousel";
import { Link } from "react-router-dom";

interface RedirectProps {
    url: string;
    children: ReactNode;
}

export const ExternalLink = ({ url, children }: RedirectProps) => {
    // useEffect(() => {
    //     window.open(url);
    // }, [url]);
    const isExternal = url.startsWith("http");
    if (isExternal) {
        return (
            <a href={url} target="_blank" rel="noreferrer">
                {children}
            </a>
        );
    }
    // if (url.indexOf("#") != 0) {
    //     url = `#${url}`;
    // }
    // return <a href={url}>children</a>;
    // if (url.indexOf("#") !== 0) {
    //     url = `#${url}`;
    // }
    return <Link to={url}>{children}</Link>;
};
