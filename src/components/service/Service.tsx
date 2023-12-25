import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { UsersIcon, MusicalNoteIcon, TrashIcon, TruckIcon } from "@heroicons/react/24/solid";
import flct from "../../assets/images/flct.jpg";
import bbbs from "../../assets/images/bbbs.jpg";
import dtd from "../../assets/images/dtd.png";
import wwc from "../../assets/images/wwc.jpg";

interface IconPropsType {
    children: React.ReactNode;
}

function Icon({ children }: IconPropsType) {
    return (
        <div className="mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow-md">
            {children}
        </div>
    );
}

export function Service() {
    return (
        <section className="p-8">
            <Typography
                variant="h1"
                color="blue-gray"
                className="mb-4 text-3xl !leading-tight lg:text-5xl text-center"
            >
                Community Service
            </Typography>
            <div className="container mx-auto">
                <div className="mb-20 grid lg:grid-cols-2">
                    <div className="lg:pr-10">
                        <img
                            src={bbbs}
                            alt="background image"
                            className="h-full min-h-[20rem] w-full rounded-xl object-contain"
                        />
                    </div>
                    <div className="grid items-center py-12 px-2 lg:ml-6 lg:py-20">
                        <Icon>
                            <UsersIcon  className="h-6 w-6" strokeWidth={2} />
                        </Icon>
                        <Typography
                            variant="h3"
                            color="blue-gray"
                            className="mb-4 !text-2xl lg:!text-3xl"
                        >
                            Big Brothers/Big Sisters
                        </Typography>
                        <Typography
                            variant="lead"
                            className="mb-10 font-normal !text-gray-500"
                        >
                            Big Brothers Big Sisters is the oldest and largest youth mentoring organization in the United States. For more than a century, BB/BS has been developing positive relationships that have a direct and lasting impact on the lives of young people. Big Brothers Big Sisters serves children ages 5 through 18, helping them reach their potential through professionally supported, one-to-one relationships with measurable impact.
                            National research has shown that positive relationships between youth and their Big Brothers and Big Sisters have a direct and measurable impact on children’s lives.                             Blazing Paddles members provide volunteer services so that BB/BS pairs can enjoy dragon boat outings free of charge.

                        </Typography>
                        <div className="w-max">
                            <a href="https://www.bbbsbroward.org/">
                                <Button size="lg" color="white">
                                BBBS
                            </Button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mb-20 grid lg:grid-cols-2">
                    <div className="grid items-center py-12 px-2 lg:mr-16 lg:py-20">
                        <Icon>
                            <MusicalNoteIcon className="h-6 w-6" strokeWidth={2} />
                        </Icon>
                        <Typography
                            variant="h3"
                            color="blue-gray"
                            className="mb-4 !text-2xl lg:!text-3xl"
                        >
                            Fort Lauderdale Children’s Theatre
                        </Typography>
                        <Typography
                            variant="lead"
                            className="mb-10 font-normal !text-gray-500"
                        >
                            The Fort Lauderdale Children’s Theatre is a 501(c)(3), established in 1952. It provides cultural and educational opportunities for children, ages 3 ½ through 18. Through year-round classes, camps, productions and outreach programs, FLCT gives children of all abilities the chance to develop creativity, problem solving skills and self-esteem. FLCT is the oldest documented children’s theatre in the state of Florida and one of the few theatres in the nation whose performances use students as actors, assistant directors, backstage crew and technicians. FLCT’s programs touch more than 25,000 children and adults every year. All young people, regardless of economic, cultural or ethnic background, are invited to participate, thanks to the generous support of local individuals, corporations, foundations and Blazing Paddles, which provides volunteer services for FLCT fundraisers, such as the Synergy Series dragon boat racing series and the West Lake Challenge Adventure Race.
                        </Typography>
                        <div className="w-max">
                            <a href="https://flct.org/">
                            <Button size="lg" color="white">
                                FLCT
                            </Button>
                            </a>
                        </div>
                    </div>
                    <div className="row-start-1 lg:row-auto lg:pl-10">
                        <img
                            src={flct}
                            alt="background image"
                            className="h-full min-h-[20rem] w-full rounded-xl object-contain"
                        />
                    </div>
                </div>
                <div className="mb-20 grid lg:grid-cols-2">
                    <div className="lg:pr-10">
                        <img
                            src={wwc}
                            alt="background image"
                            className="h-full min-h-[20rem] w-full rounded-xl object-contain"
                        />
                    </div>
                    <div className="grid items-center py-12 px-2 lg:ml-6 lg:py-20">
                        <Icon>
                            <TrashIcon  className="h-6 w-6" strokeWidth={2} />
                        </Icon>
                        <Typography
                            variant="h3"
                            color="blue-gray"
                            className="mb-4 !text-2xl lg:!text-3xl"
                        >
                            Broward County Waterway Cleanup
                        </Typography>
                        <Typography
                            variant="lead"
                            className="mb-10 font-normal !text-gray-500"
                        >
                            In addition to participation in large clean up efforts like Broward County Waterway Cleanup, Blazing Paddles removes trash from the waterways it uses on virtually every outing. The team paddles three times per week, year-round, and estimates that it removes over 300 pounds of trash per year.                        </Typography>
                        <div className="w-max">
                            <a href="https://waterwaycleanup.org/">

                            <Button size="lg" color="white">
                                Waterway Cleanup
                            </Button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mb-20 grid lg:grid-cols-2">
                    <div className="grid items-center py-12 px-2 lg:mr-16 lg:py-20">
                        <Icon>
                            <TruckIcon className="h-6 w-6" strokeWidth={2} />
                        </Icon>
                        <Typography
                            variant="h3"
                            color="blue-gray"
                            className="mb-4 !text-2xl lg:!text-3xl"
                        >
                            Deliver the Dream
                        </Typography>
                        <Typography
                            variant="lead"
                            className="mb-10 font-normal !text-gray-500"
                        >
                            Deliver the Dream helps families suffering from a serious illness or crisis. DTD invites up to 15 families, free of charge, to one of their retreat locations. Each family that attends has a member – whether it’s a child or parent – living with an illness such as Cancer, Autism, HIV/AIDS or Cerebral Palsy. Our retreats allow families to relax, enjoy time together, forge new friendships and create support groups with other families suffering from the same disease. When one person in a family is sick, the entire family is impacted and there are very few organizations nationwide that focus on the whole family unit like Deliver the Dream. Blazing Paddles has provided the volunteers needed to provide dragon boat outings which DTD auctions to raise funds to support their worthy cause.                        </Typography>
                        <div className="w-max">
                            <a href="https://deliverthedream.org/">
                                <Button size="lg" color="white">
                                    Deliver the Dream
                                </Button>
                            </a>
                        </div>
                    </div>
                    <div className="row-start-1 lg:row-auto lg:pl-10">
                        <img
                            src={dtd}
                            alt="background image"
                            className="h-full min-h-[20rem] w-full rounded-xl object-contain"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Service;