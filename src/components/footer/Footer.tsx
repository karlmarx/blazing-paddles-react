import { IconButton, Typography } from "@material-tailwind/react";
import logo from "../../assets/images/logoblazingpaddles.jpg";
import { Link } from "react-router-dom";
import { ExternalLink } from "../external";
import {
    FB_LINK,
    INSTAGRAM_LINK,
    MAPS_LINK,
    YOUTUBE_LINK,
} from "../../constants/constants";

type footer_item = {
    label: string;
    link: string;
};

type footer_link = {
    title: string;
    items: footer_item[];
};

const links: footer_link[] = [
    {
        title: "Team",
        items: [
            { label: "About Us", link: "/about" },
            { label: "Community Service", link: "/service" },
            { label: "Awards", link: "/awards" },
            { label: "Join Us", link: "/contact" },
        ],
    },
    // { Already Done
    //     title: "Paddling",
    //     items: [
    //         "Dragon Boat",
    //         "Canoe",
    //         "Outrigger Canoe",
    //     ],
    // },
    {
        title: "Info",
        items: [
            { label: "Events", link: "/events" },
            { label: "Location", link: "/location" },
            { label: "FAQ", link: "/faq" },
            { label: "Waiver", link: "/waiver" },
        ],
    },
    {
        title: "Connect",
        items: [
            { label: "Contact", link: "/contact" },
            { label: "Youtube", link: YOUTUBE_LINK },
            { label: "Instagram", link: INSTAGRAM_LINK },
            { label: "Facebook", link: FB_LINK },
        ],
    },
];

const currentYear = new Date().getFullYear();
function CircularLogo() {
    return (
        <img
            className="h-52 w-52 rounded-full object-cover object-center mb-6"
            src={logo}
            alt="bp logo"
        />
    );
}

export const Footer = () => {
    return (
        // <footer className="mt-10 px-8 pt-20">
        <footer className="mt-10 bg-gradient-to-tr from-gray-900 to-gray-800 px-8 pt-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
                    <div className="mb-8 md:mb-0">
                        <Typography variant="h6" color="white" className="mb-6">
                            BLAZING PADDLES
                        </Typography>
                        <Typography
                            color="white"
                            className="mb-4 w-10/12 text-base font-normal  md:w-5/12 "
                        >
                            Dragon Boat and Canoe Team based in South Florida
                        </Typography>
                        <div className="flex gap-1">
                            <ExternalLink url={INSTAGRAM_LINK}>
                                <IconButton
                                    variant="text"
                                    size="sm"
                                    color="white"
                                >
                                    <i className="fa-brands fa-instagram text-lg" />
                                </IconButton>
                            </ExternalLink>

                            <ExternalLink url={YOUTUBE_LINK}>
                                <IconButton
                                    variant="text"
                                    size="sm"
                                    color="white"
                                >
                                    <i className="fa-brands fa-youtube text-lg" />
                                </IconButton>
                            </ExternalLink>

                            <ExternalLink url={FB_LINK}>
                                <IconButton
                                    variant="text"
                                    size="sm"
                                    color="white"
                                >
                                    <i className="fa-brands fa-facebook text-lg" />
                                </IconButton>
                            </ExternalLink>
                            <ExternalLink url={MAPS_LINK}>
                                <IconButton
                                    variant="text"
                                    size="sm"
                                    color="white"
                                >
                                    <i className="fa-brands fa-google text-lg" />
                                </IconButton>
                            </ExternalLink>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 justify-between gap-4 md:grid-cols-4">
                        {links.map(({ title, items }) => (
                            <ul key={title}>
                                <Typography
                                    variant="h6"
                                    color="white"
                                    className="mb-4"
                                >
                                    {title}
                                </Typography>
                                {items.map((item) => (
                                    <ExternalLink url={item.link}>
                                        <li key={item.link}>
                                            <Typography
                                                // as="a"
                                                // href="#"
                                                color="white"
                                                className="py-1 font-normal text-white/80 transition-colors"
                                            >
                                                {item.label}
                                            </Typography>
                                        </li>
                                    </ExternalLink>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
                <div className="mt-16 flex flex-wrap justify-center py-6 md:justify-center">
                    <Typography
                        color="blue-gray"
                        className="text-center font-normal !text-gray-700"
                    >
                        All rights reserved. &copy; {currentYear} Blazing
                        Paddles
                    </Typography>
                </div>
                <div className="mt-3 flex flex-wrap justify-center py-6 md:justify-center">
                    <CircularLogo />
                </div>
            </div>
        </footer>
    );
};
