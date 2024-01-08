import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { UserPlusIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const faqs = [
    {
        title: "What should I wear?",
        desc: "Keep in mind you will warm up quickly after the paddling begins, and you may get wet. Quick-drying fabrics are a good idea.  Sleeveless shirts and tanks can leave you subject to chafing from the PFD, and to sunburn.  Shorts are usually best for your lower body.  Your shoes will very likely get wet.",
    },
    {
        title: "How do I join the Blazing Paddles Team?",
        desc: "You will need to complete a membership application, pay annual dues, and come to practice.  Team members each serve on at least one task force to help the team with such things as recruiting and retention, equipment maintenance and repairs and seeking sponsorships.",
    },
    {
        title: "What level of fitness is needed to join the club?",
        desc: "There is no minimum athletic skill level or dragon boat paddling experience required initially for participation.  We recruit both beginners and experienced paddlers who are open-minded and keen on learning the sport.  Most of our members came to us with no experience and no better than average fitness.  If you are coachable and dedicated, our captain and coaches can help you become an excellent paddler.",
    },
    {
        title: "Do I need to know how to swim?",
        desc: "You do not need to know how to swim in order to participate in this sport.  All members are required to wear a personal flotation device (PFD).  Accidental capsizes are very rare.  Several members of the team are certified as lifeguards.",
    },
    {
        title: "Is it safe to be on a dragon boat?",
        desc: "All activities on the water include some inherent risks.  However, dragon boat racing is enjoyed all over the world by people of very varied fitness, knowledge and skills.  Here in South Florida we usually have warm water and mild air temperatures, making the activity even safer than it would be in a colder climate.",
    },
    {
        title: "When and where are the races?",
        desc: "There are dozens of races around the world.  We try to participate in as many races as we can in Florida, and at least one race outside the area each year.   We most commonly race in Deerfield Beach, Wilton Manors and Key Biscayne.  Members of the team have participated in races (in dragon boats or other paddlecraft) in many other locations in Florida, plus Washington, DC; Houston, Texas; Memphis, Chattanooga and Knoxville, Tennessee; Decatur, Alabama; and Cardiff, Wales. In 2010, members of the team were on the crew that set the World Record for Longest Race Completed by Dragon Boat when they paddled from Kansas City to St. Charles, Missouri — 340 miles — in 38 hours and 5 minutes.",
    },
];

export function Faq() {
    const [open, setOpen] = React.useState(0);
    const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

    return (
        <section className="py-8 px-8 lg:py-20">
            <div className="container mx-auto">
                <div className="mb-24 text-center">
                    <Typography
                        variant="h1"
                        color="blue-gray"
                        className="mb-4 text-4xl !leading-snug lg:text-5xl"
                    >
                        Newbie FAQ
                    </Typography>
                    <Typography
                        variant="lead"
                        className="mx-auto !text-gray-500 lg:w-3/5"
                    >
                        If you have any other questions, please{" "}
                        <Link
                            to="/contact"
                            className="font-semibold hover:font-extrabold"
                        >
                            Contact Us
                        </Link>{" "}
                        and we will get back to you soon.
                    </Typography>
                </div>
                <div className="mx-auto lg:max-w-screen-lg lg:px-20">
                    <Accordion
                        key={7823}
                        open={open === 7823 + 1}
                        onClick={() => handleOpen(7823 + 1)}
                    >
                        <AccordionHeader className="text-left text-gray-900">
                            When are practices for newbies?
                        </AccordionHeader>
                        <AccordionBody>
                            <Typography
                                color="blue-gray"
                                className="font-normal text-gray-500"
                            >
                                They are held almost every Saturday at 8:15 AM
                                at Holland Park in Hollywood. The only exception
                                is the Synergy Series race days that we help
                                host at TY Park listed on the{" "}
                                <Link
                                    to="/events"
                                    className="font-semibold hover:font-extrabold"
                                >
                                    Event Calendar
                                </Link>{" "}
                                . Please click{" "}
                                <Link
                                    to="/contact"
                                    className="font-semibold hover:font-extrabold"
                                >
                                    Sign Up
                                </Link>{" "}
                                to let us know you are coming.
                            </Typography>
                            <div className="flex flex-row-reverse justify-center items-center gap-4">
                                <Link to="/contact">
                                    <Button
                                        variant="filled"
                                        color="gray"
                                        className="flex items-center gap-3"
                                    >
                                        <UserPlusIcon className="h-5 w-5" />
                                        Sign Up
                                    </Button>
                                </Link>
                                <Link to="/events">
                                    <Button
                                        variant="filled"
                                        color="white"
                                        className="flex items-center gap-3"
                                    >
                                        <CalendarDaysIcon className="h-5 w-5" />
                                        Event Calendar
                                    </Button>
                                </Link>
                            </div>
                        </AccordionBody>
                    </Accordion>
                </div>
                <div className="mx-auto lg:max-w-screen-lg lg:px-20">
                    {faqs.map(({ title, desc }, key) => (
                        <Accordion
                            key={key}
                            open={open === key + 1}
                            onClick={() => handleOpen(key + 1)}
                        >
                            <AccordionHeader className="text-left text-gray-900">
                                {title}
                            </AccordionHeader>
                            <AccordionBody>
                                <Typography
                                    color="blue-gray"
                                    className="font-normal text-gray-500"
                                >
                                    {desc}
                                </Typography>
                            </AccordionBody>
                        </Accordion>
                    ))}
                </div>
            </div>
        </section>
    );
}
