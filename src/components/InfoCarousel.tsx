import { Carousel, Typography, Button } from "@material-tailwind/react";
import type { CarouselProps } from "@material-tailwind/react";
import teamPic from "../assets/images/teamPic.jpg";
import ccnc from "../assets/images/ccnc.jpg";
import gardenOfLife from "../assets/images/gardenOfLife.jpg";
import wiltonManors from "../assets/images/wiltonManors.jpg";
import nishPic from "../assets/images/nishPic.jpg";

export default function  InfoCarousel() {
    return (
        // <section className="py-4 px-8 lg:py-10">
        //  <div className=" container mx-auto">
        // <section className="p-8">
        //     <div className="max-w-screen-xl mx-auto">
        // <div className="w-full lg:container lg:mx-auto">
        <section className="py-8 px-8 lg:py-20">
            <div className="container mx-auto">
                {/*<div className="rounded-xl bg-gray-900 bg-gradient-to-tr py-24 px-10">*/}
                    <Carousel className="rounded-xl
                    bg-gray-900
                    bg-gradient-to-t
"
                  // autoplay={true}
                  loop={true} autoplayDelay={3000}>
            <div className="relative h-full w-full">
                <img
                    src={teamPic}
                    alt="teamPic"
                    className="h-full w-full   object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70 ">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            Paddle or Be Paddled
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80 "
                        >
                            Blazing Paddles is a Dragon Boat team with members of all ages and from every walk of life. We are located in Broward County, Florida, and practice year-round in Hollywood, FL. What really sets us apart is that we have fun doing it and we like teaching new paddlers: No experience needed!
                        </Typography>
                        <div className="flex justify-center gap-2">
                            <Button size="lg" color="white">
                                Join Us
                            </Button>
                            <Button size="lg" color="white" variant="text">
                                Gallery
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src= {ccnc}
                    alt="ccnc"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-start bg-black/50">
                    <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                        <Typography
                            variant="h1"
                            color="white"
                            className="pt-10 mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            Dragonboat
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            Blazing Paddles sent out two crews for the 2021 Club Crew National Championships at Sarasota, Orlando in  October 1-3, 2021: Senior B and Senior C Small Boat.
                            Day 1 is 200m, the pirates both got a bronze medal! Day 2 is 500m where Senior C took home a bronze medal and Senior B had to do a re-run of the 500m and the pirates placed 3rd! Day 3 2000m where BP Senior C placed 3rd and BP Senior B in 5th place.
                            Congratulations to all the teams that participated and earned their berth for the to the 2022 IDBF Club Crew World Championships!
                        </Typography>
                        <div className="flex  justify-center gap-2">
                            <Button size="lg" color="white">
                                Join Us
                            </Button>
                            <Button size="lg" color="white">
                                Gallery
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src={nishPic}
                    alt="nishPic"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                    <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            Outrigger Canoe (OC-6)
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            The team has a 6-person outrigger canoe that we paddle and race in.  The team sent two teams
                            to Nish Outrigger Challenge 2023 securing 3rd and 5th (?) place overall.
                        </Typography>
                        <div className="flex gap-2">
                            <Button size="lg" color="white">
                                OC-6
                            </Button>
                            <Button size="lg" color="white" variant="text">
                                Join Us
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src={wiltonManors}
                    alt="wiltonManors"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                    <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            Canoe
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            TODO: UPDATE THIS OUTDATED INFO AND SHORTEN IT
                            Blazing Paddles has secured the Wilton Manors Island City Canoe Race Coed Division
                            Championship since the race’s creation in 2001, 15 times. Our coed team was the overall
                            winner (beating the men’s teams) in 2006, 2007, 2009, 2010, 2012, 2013 and 2015. Our women’s
                            crew has entered their division twice, taking first place on both occasions.
                        </Typography>
                        <div className="flex gap-2">
                            <Button size="lg" color="white">
                                Explore
                            </Button>
                            <Button size="lg" color="white" variant="text">
                                Gallery
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src={gardenOfLife}
                    alt="gardenOfLife"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                    <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4"
                        >
                            Garden of Life
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="opacity-80"
                        >
                            Garden of Life is a proud sponsor of Blazing Paddles. They are a certified B-Corp and make
                            wide variety of excellent, organic, non-GMO products.
                        </Typography>
                        <div className="flex gap-2 invisible md:visible">
                            <Button size="lg" color="white">
                                Garden of Life
                            </Button>
                            <Button size="lg" color="white" variant="text">
                                Gallery
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
                {/*</div>*/}
        </div>
</section>
    );
}