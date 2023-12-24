import { IconButton, Typography } from "@material-tailwind/react";

const links = [
    {
        title: "Paddling",
        items: ["Dragon Boat", "Canoe", "Outrigger Canoe" ],
    },
    {
        title: "Team",
        items: ["About Us", "Service", "Awards", "Join Us"],
    },
    {
        title: "Info",
        items: ["About", "Events", "Location"],
    },
    {
        title: "Connect",
        items: ["Contact", "Youtube", "Instagram", "Facebook"],
    },
];

const currentYear = new Date().getFullYear();

export const Footer4 = () => {
    return (
        // <footer className="mt-10 px-8 pt-20">
         <footer className="mt-10 bg-gradient-to-tr from-gray-900 to-gray-800 px-8 pt-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
                    <div className="mb-8 md:mb-0">
                        <Typography variant="h6" color="white" className="mb-6">
                            BLAZING PADDLES
                        </Typography>
                        <Typography color="white" className="mb-4 w-10/12 text-base font-normal  md:w-5/12 ">
                            South Florida's Dragon Boat and Canoe Team
                        </Typography>
                        <div className="flex gap-1">
                            <IconButton variant="text" size="sm" color="white">
                                <i className="fa-brands fa-instagram text-lg" />
                            </IconButton>
                            <IconButton variant="text" size="sm" color="white">
                                <i className="fa-brands fa-youtube text-lg" />
                            </IconButton>
                            <IconButton variant="text" size="sm" color="white">
                                <i className="fa-brands fa-facebook text-lg" />
                            </IconButton>
                            <IconButton variant="text" size="sm" color="white">
                                <i className="fa-brands fa-google text-lg" />
                            </IconButton>
                    </div>
                    </div>
                    <div className="grid grid-cols-2 justify-between gap-4 md:grid-cols-4">
                        {links.map(({ title, items }) => (
                            <ul key={title}>
                                <Typography variant="h6" color="white" className="mb-4">
                                    {title}
                                </Typography>
                                {items.map((link) => (
                                    <li key={link}>
                                        <Typography
                                            as="a"
                                            href="#"
                                            color="white"
                                            className="py-1 font-normal text-white/80 transition-colors"
                                        >
                                            {link}
                                        </Typography>
                                    </li>
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
                        All rights reserved. &copy; {currentYear} Material Tailwind
                    </Typography>
                </div>
            </div>
        </footer>
    );
}

