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
    CardHeader,
    CardBody,
} from "@material-tailwind/react";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";

import logo from "../../assets/images/logoblazingpaddles.jpg";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Download from "yet-another-react-lightbox/plugins/download";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";

import { PhotoIcon } from "@heroicons/react/24/solid";
import {
    ChevronRightIcon,
    ChevronDownIcon,
    CubeTransparentIcon,
} from "@heroicons/react/24/outline";
// @ts-ignore
function importAll(r) {
    // @ts-ignore
    console.log(r);
    return r.keys().map(r);
}

// @ts-ignore
let galleries: { name: string; images: string[] }[] = [
    {
        name: "Wilton Manors 2023",
        images: importAll(
            require.context(
                `../../../public/galleries/wiltonManors2023`,
                false,
                /\.(png|jpe?g)$/,
            ),
        ),
    },
    {
        name: "Wilton Manors 2019",
        images: importAll(
            require.context(
                `../../../public/galleries/wiltonManors2019`,
                false,
                /\.(png|jpe?g)$/,
            ),
        ),
    },
    {
        name: "Puerto Rico 2015",
        images: importAll(
            require.context(
                `../../../public/galleries/puertoRico`,
                false,
                /\.(png|jpe?g)$/,
            ),
        ),
    },
    {
        name: "Synergy 2015",
        images: importAll(
            require.context(
                `../../../public/galleries/synergy2015`,
                false,
                /\.(png|jpe?g)$/,
            ),
        ),
    },
    {
        name: "Virginia Key 2015",
        images: importAll(
            require.context(
                `../../../public/galleries/virginiaKey2015`,
                false,
                /\.(png|jpe?g)$/,
            ),
        ),
    },
    {
        name: "Garden of Life",
        images: importAll(
            require.context(
                `../../../public/galleries/gardenOfLife`,
                false,
                /\.(png|jpe?g)$/,
            ),
        ),
    },
];

// @ts-ignore
// const images = importAll(require.context('../../../public/galleries', true, /\.(png|jpe?g)$/));
// galleries.forEach((gallery) => {
//     // @ts-ignore
//     gallery.images = importAll(require.context(`../../../public/galleries/${gallery.dir}`, false, /\.(png|jpe?g)$/));
// })
console.log(galleries);
export function LightboxGallery() {
    const [open, setOpen] = React.useState(false);
    const [openAlert, setOpenAlert] = React.useState(true);
    const [displayedImages, setDisplayedImages] = React.useState(
        galleries[0].images,
    );
    const [slides, setSlides] = React.useState([
        { src: galleries[0].images[0] },
    ]);
    const [active, setActive] = React.useState(logo);

    // @ts-ignore
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    // @ts-ignore
    function updateImages(images: string[]) {
        const slides = images.map((image: string) => ({ src: image }));
        // @ts-ignore
        setSlides(slides);
    }

    // @ts-ignore
    // @ts-ignore
    return (
        <>
            <div className="grid grid-cols-4 gap-4 justify-items-center pt-10">
                {galleries.map(({ name, images }) => (
                    <section className="grid place-items-center p-4">
                        <Card
                            className="w-auto max-w-[24rem]"
                            onClick={() => {
                                // @ts-ignore
                                setSlides(
                                    images.map((image: string) => ({
                                        src: image,
                                    })),
                                );
                                console.log(slides);
                                setOpen(true);
                                console.log(open);
                            }}
                        >
                            <CardHeader color="gray" className="relative h-56">
                                <img
                                    src={images[0]}
                                    alt="img-blur-shadow"
                                    className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography
                                    variant="h4"
                                    color="blue-gray"
                                    className="mt-1 mb-2 font-medium"
                                >
                                    {name}
                                </Typography>
                                {/*<Button color="gray" variant="outlined" size="sm">*/}
                                {/*    go somewhere*/}
                                {/*</Button>*/}
                            </CardBody>
                        </Card>
                        {/*<button type="button" onClick={() => {*/}
                        {/*    setSlides(images.map((image: string) => ({"src": image })))*/}
                        {/*    console.log(slides)*/}
                        {/*    setOpen(true)*/}
                        {/*    console.log(open)*/}
                        {/*}}>*/}
                        {/*    {name}*/}
                        {/*</button>*/}
                    </section>
                ))}
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                plugins={[
                    Counter,
                    Download,
                    Thumbnails,
                    Slideshow,
                    Zoom,
                    Fullscreen,
                ]}
                thumbnails={{
                    position: "bottom",
                    height: 100,
                    border: 0,
                }}
                fullscreen={{ auto: false }}
                counter={{ container: { style: { top: "unset", bottom: 0 } } }}
            />
            {/*<button type="button" onClick={() => {*/}
            {/*    updateImages(images)*/}

            {/*    setOpen(true)*/}
            {/*}}>*/}
            {/*    {name}*/}
            {/*</button>*/}

            {/*))}*/}
            {/*<Lightbox*/}
            {/*    open={open}*/}
            {/*    close={() => setOpen(false)}*/}
            {/*    slides={slides}*/}
            {/*/>*/}
        </>
    );
}
