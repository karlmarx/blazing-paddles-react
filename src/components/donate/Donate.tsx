import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import {
    LifebuoyIcon,
    MusicalNoteIcon,
    TrashIcon,
    TruckIcon,
} from "@heroicons/react/24/solid";
import soar from "../../assets/images/edited_SOAR.png";
import {ExternalLink} from "../external";
import {PAYPAL_LINK, SOAR_LINK} from "../../constants/constants";


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

export function Donate() {
    return (
        <section className="p-8">
                        <Typography
                variant="h1"
                color="blue-gray"
                className="mb-4 text-3xl !leading-tight lg:text-5xl text-center"
            >
                Donate
            </Typography>
            <div className="container mx-auto">
                <div className="mb-20 grid lg:grid-cols-2">
                    <div className="lg:pr-10 ">
                        <img
                            src={soar}
                            alt="soar logo"
                            className="h-full min-h-[20rem] w-full rounded-lg object-center"
                        />
                    </div>
          <div className="grid items-center py-12 px-2 lg:ml-6 lg:py-20">
              <Icon>
                  <LifebuoyIcon className="h-6 w-6" strokeWidth={2}/>
                                    </Icon>
                        <ExternalLink url={SOAR_LINK}><Typography
                            variant="h3"
                            color="blue-gray"
                            className="mb-4 !text-2xl lg:!text-3xl"
                        >
                            Synergy Outdoor Adventure Resources
                        </Typography>
                        </ExternalLink>
                        <Typography
                            variant="lead"
                            className="mb-10 font-normal !text-gray-900"
                        >
                            Thank you for considering a donation to support our dragonboat team! <ExternalLink url={SOAR_LINK}>Synergy Outdoor
                            Adventure Resources (SOAR)</ExternalLink>, is the 501(c)(3) non-profit organization that owns and maintains
                            the boats. We rely on the generosity of donors like you to maintain and improve our
                            equipment, facilities, and programs. Your contributions directly impact our ability to
                            provide opportunities for paddles of all backgrounds to experience the thrill
                            of dragonboat racing and foster a sense of community.
                        </Typography>
                                      <div className="flex gap-2">

            <div className="w-max ">
                            <ExternalLink url={PAYPAL_LINK}>
                                <Button size="lg" variant="gradient" className="flex items-center gap-3">
                                    Donate

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                         className="w-5 h-5">
                                        <path fillRule="evenodd"
                                              d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
                                              clipRule="evenodd"/>
                                        <path fillRule="evenodd"
                                              d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
                                              clipRule="evenodd"/>
                                    </svg>


                                </Button>
                            </ExternalLink>
            </div>

                                            <ExternalLink url={SOAR_LINK}>
                                <Button size="lg" variant="text" >
                                    SOAR
                                </Button>
                            </ExternalLink>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
);
}

export default Donate;
