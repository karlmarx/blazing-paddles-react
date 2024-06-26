import type { NavbarProps } from "@material-tailwind/react";

import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Card,
    IconButton,
    Collapse,
} from "@material-tailwind/react";
import {
    CubeTransparentIcon,
    UserCircleIcon,
    CodeBracketSquareIcon,
    Square3Stack3DIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
    RocketLaunchIcon,
    Bars2Icon,
    PhotoIcon,
    Bars3Icon,
    XMarkIcon,
    CalendarDaysIcon,
    MapPinIcon,
    GiftIcon,
    ChatBubbleLeftRightIcon,
    QuestionMarkCircleIcon,
    InformationCircleIcon,
    UserGroupIcon,
    TrophyIcon,
} from "@heroicons/react/24/outline";
import logo from "../../assets/images/logoblazingpaddles.jpg";
function CircularLogo() {
    return (
        <img
            className="h-12 w-12 rounded-full object-cover object-center mb-6"
            src={logo}
            alt="bp logo"
        />
    );
}
const profileMenuItems = [
    {
        label: "My Profile",
        icon: UserCircleIcon,
    },
    {
        label: "Edit Profile",
        icon: Cog6ToothIcon,
    },
    {
        label: "Inbox",
        icon: InboxArrowDownIcon,
    },
    {
        label: "Help",
        icon: LifebuoyIcon,
    },
    {
        label: "Sign Out",
        icon: PowerIcon,
    },
];
interface NavItemPropsType {
    icon: React.ReactNode;
    label: string;
    link: string;
}
function NavItem({ icon, label, link }: NavItemPropsType) {
    return (
        <a href={link}>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-1.5 p-1 font-normal"
            >
                {icon}
                {label}
            </Typography>
        </a>
    );
}
function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border border-gray-900 p-0.5"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${
                            isMenuOpen ? "rotate-180" : ""
                        }`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="p-1">
                {profileMenuItems.map(({ label, icon }, key) => {
                    const isLastItem = key === profileMenuItems.length - 1;
                    return (
                        <MenuItem
                            key={label}
                            onClick={closeMenu}
                            className={`flex items-center gap-2 rounded ${
                                isLastItem
                                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                    : ""
                            }`}
                        >
                            {React.createElement(icon, {
                                className: `h-4 w-4 ${
                                    isLastItem ? "text-red-500" : ""
                                }`,
                                strokeWidth: 2,
                            })}
                            <Typography
                                as="span"
                                variant="small"
                                className="font-normal"
                                color={isLastItem ? "red" : "inherit"}
                            >
                                {label}
                            </Typography>
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
}

// nav list menu
const navListMenuItems = [
    {
        title: "Dragonboat",
        link: "#/dragonboat",
        description:
            "Learn how to use @material-tailwind/react, packed with rich components for React.",
    },
    {
        title: "Outrigger Canoe",
        link: "#/oc",
        description:
            "A complete set of UI Elements for building faster websites in less time.",
    },
    {
        title: "Canoe",
        link: "#/canoe",
        description:
            "A complete set of UI Elements for building faster websites in less time.",
    },
];

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const renderItems = navListMenuItems.map(({ title, link, description }) => (
        <a href={link} key={title}>
            <MenuItem>
                <Typography variant="h6" color="blue-gray" className="mb-1">
                    {title}
                </Typography>
                <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                >
                    {description}
                </Typography>
            </MenuItem>
        </a>
    ));

    return (
        <React.Fragment>
            <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
                <MenuHandler>
                    <Typography
                        as="a"
                        href="#"
                        variant="small"
                        className="font-normal"
                    >
                        <MenuItem className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full">
                            <Square3Stack3DIcon className="h-[18px] w-[18px]" />
                            Paddling{" "}
                            <ChevronDownIcon
                                strokeWidth={2}
                                className={`h-3 w-3 transition-transform ${
                                    isMenuOpen ? "rotate-180" : ""
                                }`}
                            />
                        </MenuItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
                    <Card
                        color="blue"
                        shadow={false}
                        variant="gradient"
                        className="col-span-3 grid h-full w-full place-items-center rounded-md"
                    >
                        <RocketLaunchIcon
                            strokeWidth={1}
                            className="h-28 w-28"
                        />
                    </Card>
                    <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
                <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Paddle{" "}
            </MenuItem>

            <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
                {renderItems}
            </ul>
        </React.Fragment>
    );
}

const teamNavListMenuItems = [
    {
        title: "About Us",
        link: "#/about",
        description:
            "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
    },
    {
        title: "Community Service",
        link: "#/service",
        description:
            "Learn how to use @material-tailwind/react, packed with rich components for React.",
    },
    {
        title: "Awards and Recognition",
        link: "#/awards",
        description:
            "A complete set of UI Elements for building faster websites in less time.",
    },
];
function TeamNavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const renderItems = teamNavListMenuItems.map(
        ({ title, link, description }) => (
            <a href={link} key={title}>
                <MenuItem>
                    <Typography variant="h6" color="blue-gray" className="mb-1">
                        {title}
                    </Typography>
                    <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                    >
                        {description}
                    </Typography>
                </MenuItem>
            </a>
        ),
    );

    return (
        <React.Fragment>
            {/*<Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>*/}
            {/*    <MenuHandler>*/}
            {/*        <Typography*/}
            {/*            as="a"*/}
            {/*            href="#"*/}
            {/*            variant="small"*/}
            {/*            className="font-normal"*/}
            {/*        >*/}
            {/*            <MenuItem className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full">*/}
            {/*                <Square3Stack3DIcon className="h-[18px] w-[18px]" />{" "}*/}
            {/*                Team{" "}*/}
            {/*                <ChevronDownIcon*/}
            {/*                    strokeWidth={2}*/}
            {/*                    className={`h-3 w-3 transition-transform ${*/}
            {/*                        isMenuOpen ? "rotate-180" : ""*/}
            {/*                    }`}*/}
            {/*                />*/}
            {/*            </MenuItem>*/}
            {/*        </Typography>*/}
            {/*    </MenuHandler>*/}
            {/*    <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">*/}
            {/*        <Card*/}
            {/*            color="blue"*/}
            {/*            shadow={false}*/}
            {/*            variant="gradient"*/}
            {/*            className="col-span-3 grid h-full w-full place-items-center rounded-md"*/}
            {/*        >*/}
            {/*            <RocketLaunchIcon*/}
            {/*                strokeWidth={1}*/}
            {/*                className="h-28 w-28"*/}
            {/*            />*/}
            {/*        </Card>*/}
            {/*        <ul className="col-span-4 flex w-full flex-col gap-1">*/}
            {/*            {renderItems}*/}
            {/*        </ul>*/}
            {/*    </MenuList>*/}
            {/*</Menu>*/}
            {/*<MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">*/}
            {/*    <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Team{" "}*/}
            {/*</MenuItem>*/}

            <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
                {renderItems}
            </ul>
        </React.Fragment>
    );
}

// nav list component
const navListItems = [
    {
        label: "Community",
        link: "#/service",
        icon: UserGroupIcon,
    },
    {
        label: "Awards",
        link: "#/awards",
        icon: TrophyIcon,
    },
    {
        label: "Gallery",
        link: "#/gallery",
        icon: PhotoIcon,
    },
    {
        label: "Location",
        link: "#/location",
        icon: MapPinIcon,
    },
    {
        label: "Events",
        link: "#/events",
        icon: CalendarDaysIcon,
    },
    {
        label: "Donate",
        link: "#/donate",
        icon: GiftIcon,
    },
    // {
    //     label: "Sign-Up",
    //     link: "#/contact",
    //     icon: ChatBubbleLeftRightIcon,
    // },
    {
        label: "FAQ",
        link: "#/faq",
        icon: InformationCircleIcon,
    },
];

function NavList() {
    return (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            {navListItems.map(({ label, link, icon }) => (
                <NavItem
                    icon={React.createElement(icon, {
                        className: "h-5 w-5",
                    })}
                    label={label}
                    link={link}
                    key={label}
                />
            ))}
        </ul>
    );
}

export const MaterialNavbar = () => {
    const [isNavOpen, setIsNavOpen] = React.useState(false);

    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavOpen(false),
        );
    }, []);

    return (
        // <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
        // <Navbar className="sticky mx-auto">
        <div className="sticky top-4 z-[999] flex w-full items-center px-4">
            {/*<div className="h-full min-h-screen p-4">*/}
            {/*<Navbar*/}
            {/*    className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4"*/}
            {/*    shadow={false}*/}
            {/*>*/}
                <Navbar
                    className="mx-auto"
                    shadow={false}
                >

                {/*<Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">*/}
                {/*<div className="relative mx-auto flex flex-wrap justify-between items-center text-blue-gray-900">*/}
                <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="/"
                        color="blue-gray"
                        className="mr-4 ml-2 cursor-pointer py-1.5 font-pirata text-3xl"
                    >
                        Blazing Paddles
                    </Typography>
                    {/*<div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">*/}
                    <div className="hidden lg:block">
                        {/*<div className="flex items-center gap-4">*/}
                        {/*<div className="hidden lg:block">*/}
                        <NavList />
                    </div>
                    <a href="#/contact" className=" hidden lg:inline-block">
                        <Button
                            color="gray"
                            // size="sm"
                            variant="gradient"
                            className="flex items-center gap-3"
                            fullWidth
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M13.5 4.938a7 7 0 11-9.006 1.737c.202-.257.59-.218.793.039.278.352.594.672.943.954.332.269.786-.049.773-.476a5.977 5.977 0 01.572-2.759 6.026 6.026 0 012.486-2.665c.247-.14.55-.016.677.238A6.967 6.967 0 0013.5 4.938zM14 12a4 4 0 01-4 4c-1.913 0-3.52-1.398-3.91-3.182-.093-.429.44-.643.814-.413a4.043 4.043 0 001.601.564c.303.038.531-.24.51-.544a5.975 5.975 0 011.315-4.192.447.447 0 01.431-.16A4.001 4.001 0 0114 12z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Sign Up
                        </Button>
                    </a>
                    <IconButton
                        size="sm"
                        color="blue-gray"
                        variant="text"
                        onClick={toggleIsNavOpen}
                        className="ml-auto mr-2 lg:hidden inline-block"
                    >
                        {isNavOpen ? (
                            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                        ) : (
                            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                        )}
                        {/*<Bars2Icon className="h-6 w-6" />*/}
                    </IconButton>

                    {/*<a href="try">*/}
                    {/*TODO: this try button*/}
                    {/*    <Button*/}
                    {/*        variant="gradient"*/}
                    {/*        size="sm"*/}
                    {/*        fullWidth*/}
                    {/*        className="items-center flex w-full gap-2 md:w-max"*/}
                    {/*        // flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto*/}
                    {/*    >*/}
                    {/*    </Button>*/}
                    {/*</a>*/}
                </div>
                <Collapse open={isNavOpen}>
                    <NavList />
                    <a href="#/contact">
                        <Button
                            color="gray"
                            size="sm"
                            variant="gradient"
                            className="flex items-center gap-3"
                            fullWidth
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M13.5 4.938a7 7 0 11-9.006 1.737c.202-.257.59-.218.793.039.278.352.594.672.943.954.332.269.786-.049.773-.476a5.977 5.977 0 01.572-2.759 6.026 6.026 0 012.486-2.665c.247-.14.55-.016.677.238A6.967 6.967 0 0013.5 4.938zM14 12a4 4 0 01-4 4c-1.913 0-3.52-1.398-3.91-3.182-.093-.429.44-.643.814-.413a4.043 4.043 0 001.601.564c.303.038.531-.24.51-.544a5.975 5.975 0 011.315-4.192.447.447 0 01.431-.16A4.001 4.001 0 0114 12z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Sign Up
                        </Button>
                    </a>
                </Collapse>
                {/*<MobileNav open={isNavOpen} className="overflow-scroll">*/}
                {/*</MobileNav>*/}
            </Navbar>
        </div>
    );
};
