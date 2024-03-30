import React from "react";
import { Typography, Button } from "@material-tailwind/react";
export function Error404() {
    return (
        <section>
            <div className="relative min-h-screen w-full">
                <div className="grid min-h-screen px-8">
                    <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
                        <Typography
                            variant="h1"
                            color="blue-gray"
                            className="text-4xl !leading-snug lg:text-5xl"
                        >
                            404 😢
                        </Typography>
                        <Typography
                            variant="h1"
                            color="blue-gray"
                            className="mt-6 text-4xl !leading-snug lg:text-4xl"
                        >
                            Lost in the Digital Wilderness
                        </Typography>
                        <Typography
                            variant="lead"
                            color="gray"
                            className="mt-4 mb-6 w-full md:max-w-full lg:mb-12 lg:max-w-3xl"
                        >
                            You&apos;ve ventured into uncharted digital territory. The page
                            you seek has eluded us. Let&apos;s guide you back to familiar
                            paths.
                        </Typography>
                        <Button color="gray" className="w-full px-4 md:w-[9rem]">
                            back to home
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}