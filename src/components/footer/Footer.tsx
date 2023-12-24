
import { Typography, Button, IconButton } from "@material-tailwind/react";

const links = ["About Us", "Careers", "Press", "Blog", "Pricing"];
const currentYear = new Date().getFullYear();

const links2 = [
    {
        title: "Company",
        items: ["About Us", "Careers", "Premium Tools", "Blog"],
    },
    {
        title: "Pages",
        items: ["Login", "Register", "Add List", "Contact"],
    },
    {
        title: "Legal",
        items: ["Terms", "Privacy", "Team", "About Us"],
    },
    {
        title: "Resourced",
        items: ["Blog", "Services", "Product", "Pricing"],
    },
];

export const Footer = () => {
    return (
        <footer className="mt-10 bg-gradient-to-tr from-gray-900 to-gray-800 px-8 pt-12">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center gap-8 md:justify-between">
                    <div className="text-center md:text-left">
                        <Typography variant="h5" color="white" className="mb-4">
                            Blazing Paddles
                        </Typography>
                        <Typography color="white" className="mb-12 font-normal">
                            The reward for getting on the stage is fame.
                        </Typography>
                        <ul className="flex flex-wrap items-center justify-center md:justify-start">
                            {links.map((link, idx) => (
                                <li key={link}>
                                    <Typography
                                        as="a"
                                        href="#"
                                        color="white"
                                        className={`py-1 font-medium transition-colors ${
                                            idx === 0 ? "pr-3" : "px-3"
                                        }`}
                                    >
                                        {link}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-8 w-full md:mt-0 md:w-auto">
                        <Typography variant="h6" color="white" className="mb-3">
                            Get the app
                        </Typography>
                        <div className="flex flex-col gap-2">
                            <Button
                                color="white"
                                className="flex items-center justify-center"
                            >
                                <img
                                    src={`/img/logos/logo-apple.png`}
                                    className="-mt-0.5 mr-2 h-6 w-6"
                                    alt="ios"
                                />
                                App Store
                            </Button>
                            <Button
                                color="white"
                                className="flex items-center justify-center"
                            >
                                <img
                                    src={`/img/logos/logo-google-2.png`}
                                    className="-mt-0.5 mr-2 h-6 w-6"
                                    alt="ios"
                                />
                                Google Play
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
                    <Typography
                        color="white"
                        className="text-center font-normal opacity-75"
                    >
                        &copy; {currentYear} Blazing Paddles
                    </Typography>

                    <div className="flex gap-2">
                        <IconButton variant="text" color="white">
                            <i className="fa-brands fa-facebook text-2xl not-italic opacity-75"></i>
                        </IconButton>
                        <IconButton variant="text" color="white">
                            <i className="fa-brands fa-instagram text-2xl not-italic opacity-75"></i>
                        </IconButton>
                        <IconButton variant="text" color="white">
                            <i className="fa-brands fa-youtube text-2xl not-italic opacity-75"></i>
                        </IconButton>

                    </div>
                </div>
            </div>
        </footer>
    );
}

