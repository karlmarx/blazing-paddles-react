import React, { ChangeEvent } from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Alert,
} from "@material-tailwind/react";
import logo from "../../assets/images/logoblazingpaddles.jpg";

import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import {
    ChevronRightIcon,
    ChevronDownIcon,
    CubeTransparentIcon,
} from "@heroicons/react/24/outline";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import type { TabProps } from "@material-tailwind/react";
import type { TabsHeaderProps } from "@material-tailwind/react";
import type { TabsBodyProps } from "@material-tailwind/react";
import type { TabPanelProps } from "@material-tailwind/react";


// @ts-ignore
function importAll(r) {
    // @ts-ignore
    console.log(r)
    return r.keys().map(r);
}

// @ts-ignore
let galleries : {name: string, images: string[]}[] =[
    {
        "name": "Wilton Manors 2023",
        "images": importAll(require.context(`../../../public/galleries/wiltonManors2023`, false, /\.(png|jpe?g)$/))
    },
    {
        "name": "Wilton Manors 2022",
        "images": importAll(require.context(`../../../public/galleries/wiltonManors2022`, false, /\.(png|jpe?g)$/))
    }
]





// @ts-ignore
// const images = importAll(require.context('../../../public/galleries', true, /\.(png|jpe?g)$/));
// galleries.forEach((gallery) => {
//     // @ts-ignore
//     gallery.images = importAll(require.context(`../../../public/galleries/${gallery.dir}`, false, /\.(png|jpe?g)$/));
// })
console.log(galleries)
export function Tabbar() {
    const [open, setOpen] = React.useState(0);
    const [openAlert, setOpenAlert] = React.useState(true);
    const [displayedImages, setDisplayedImages ] = React.useState([]);
    const [active, setActive] = React.useState(
    );

    // @ts-ignore
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    // @ts-ignore
    function updateImages(event, images)  {
        setDisplayedImages(images);
    };

    // @ts-ignore
    return (
        <>
        <Tabs value="html" orientation="vertical">
            <TabsHeader className="w-32">
                {galleries.map(( { name, images }) => (
                    <Tab key={name} value={name}>
                        {name}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {galleries.map(({ name, images }) => (
                    <TabPanel key={name} value={name} className="py-0">
                        <section className="py-8 px-8 lg:py-20">
                            <div className="container mx-auto h-[80vh]">
                                <div className="grid gap-4 ">
                                    <div>
                                        <img
                                            className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                                            src={active}
                                            alt=""
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-8 justify-items-center">
                                        {images.map((currentImage, index) => (
                                            <div key={index}>
                                                <img
                                                    // onClick={() => setActive(currentImage)}
                                                    src={currentImage}
                                                    className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                                                    alt="gallery-image"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>

            </>
    );
}