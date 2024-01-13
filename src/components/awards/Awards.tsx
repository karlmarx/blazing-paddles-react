import { ValidationError, useForm } from "@formspree/react";
import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";
import {
    Button,
    Typography,
    Card,
    Input,
    Textarea,
    Checkbox,
} from "@material-tailwind/react";
import type { CheckboxStylesType } from "@material-tailwind/react";
import type { InputProps } from "@material-tailwind/react";
import type { InputStylesType } from "@material-tailwind/react";
import Timeline, {
    TimelineBody,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineItem,
} from "@material-tailwind/react/components/Timeline";

interface AwardTimelineItemType {
    header: string;
    location: string;
    text: string;
}

let awardTimelineItems: Array<AwardTimelineItemType> = [
    {
        header: "2001 - 2023: Island City Canoe Relay Race",
        location: "Wilton Manors, FL",
        text: "Blazing Paddles has secured the Coed Division Championship since the race’s creation in 2001, 15 times. Our coed team was the overall winner (beating the men’s teams) in 2006, 2007, 2009, 2010, 2012, 2013, 2015, and 2023. Our women’s crew has entered their division twice, taking first place on both occasions.",
    },
    {
        header: "2010, 2013: MR340",
        location: "Missouri River",
        text: "Known at the time as ‘Beauties ‘n’ Barnacles,’ and with many crew members from places other than Florida, the team completed the MR340, a 340-mile, nonstop race down the Missouri River. In 2010 they set a world record for a dragon boat and placed 3rd overall in a field of more than 200 boats, beating some of the best ultra-marathon paddlers in the world. Along the way they raised funds and awareness for the Shriner’s Hospital in St. Louis, which treats children – free of charge – by virtue of private donations. Blazing Paddles Captain “Iron” Will Murphy and Boatswain Ryan Mason steered and paddled in the effort. The team successfully defended their divisional title in 2013, despite being pinned to a wing dike in fog and darkness for two hours, and losing a teammate to medical disqualification.",
    },
    {
        header: "2009: International Dragon Boat Federation Community Division World Championship",
        location: "Virginia Key, FL",
        text: "First Place in Community Division",
    },
    // TODO: finish these
    // {
    //     header: "2013, 2015: Miami Winter Nationals",
    //     location: "Virginia Key, FL",
    //     text: "First Place in Community Division",
    // },
    // {
    //     header: "2009: International Dragon Boat Federation Community Division World Championship",
    //     location: "Virginia Key, FL",
    //     text: "First Place in Community Division",
    // },
];
export default function Awards() {
    return (
        // <div className="py-8 px-8 flex items-center justify-center">

        <section className="py-8 px-8 flex items-center justify-center">
            <div className="w-[32rem]">
                <Timeline>
                    {awardTimelineItems.map(
                        (awardTimelineItem, index, awardTimelineItems) => (
                            <TimelineItem key={awardTimelineItem.header}>
                                {index < awardTimelineItems.length - 1 ? (
                                    <TimelineConnector />
                                ) : null}
                                <TimelineHeader className="h-4">
                                    <TimelineIcon />
                                    <Typography
                                        variant="h6"
                                        color="blue-gray"
                                        className="leading-none"
                                    >
                                        {awardTimelineItem.header}
                                    </Typography>
                                </TimelineHeader>
                                <TimelineBody className="pb-9">
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="font-normal text-gray-601"
                                    >
                                        <i>{awardTimelineItem.location}</i>{" "}
                                        <br />
                                        {awardTimelineItem.text}
                                    </Typography>
                                </TimelineBody>
                            </TimelineItem>
                        ),
                    )}
                </Timeline>
            </div>
        </section>
    );
}
