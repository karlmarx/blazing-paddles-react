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
   PhotoIcon
} from "@heroicons/react/24/solid";
import {
    ChevronRightIcon,
    ChevronDownIcon,
    CubeTransparentIcon,
} from "@heroicons/react/24/outline";
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
        "name": "Wilton Manors 2019",
        "images": importAll(require.context(`../../../public/galleries/wiltonManors2019`, false, /\.(png|jpe?g)$/))
    },
    {
        "name": "Puerto Rico 2015",
        "images": importAll(require.context(`../../../public/galleries/puertoRico`, false, /\.(png|jpe?g)$/))
    },
    {
        "name": "Synergy 2015",
        "images": importAll(require.context(`../../../public/galleries/synergy2015`, false, /\.(png|jpe?g)$/))
    },
    {
        "name": "Virginia Key 2015",
        "images": importAll(require.context(`../../../public/galleries/virginiaKey2015`, false, /\.(png|jpe?g)$/))
    },
    {
        "name": "Garden of Life",
        "images": importAll(require.context(`../../../public/galleries/gardenOfLife`, false, /\.(png|jpe?g)$/))
    }
]





// @ts-ignore
// const images = importAll(require.context('../../../public/galleries', true, /\.(png|jpe?g)$/));
// galleries.forEach((gallery) => {
//     // @ts-ignore
//     gallery.images = importAll(require.context(`../../../public/galleries/${gallery.dir}`, false, /\.(png|jpe?g)$/));
// })
console.log(galleries)
export function Sidebar() {
    const [open, setOpen] = React.useState(0);
    const [openAlert, setOpenAlert] = React.useState(true);
    const [displayedImages, setDisplayedImages ] = React.useState(galleries[0].images);
    const [active, setActive] = React.useState(
        logo,
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
        <div className="flex flew-row">
            {/*<Card className="fixed top-0 left-0 right-0h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">*/}
            {/*<Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">*/}
                <Card className="flex-1 inset-y-0 left-0  w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
                {/*<Card className="fixed top-0 left-0 right-0h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">*/}
            <div className="mb-2 flex items-center gap-4 p-4">
                <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="brand" className="h-8 w-8" />
                <Typography variant="h5" color="blue-gray">
                    Galleries
                </Typography>
            </div>


            <List>
                {galleries.map(({ name, images}, key) => (
                    <ListItem onClick={(e) => { // @ts-ignore
                        updateImages(e, images)}} >
                        <ListItemPrefix>
                            <PhotoIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        {name}
                    </ListItem>
                ))}
            </List>
        </Card>
            <div >
    <section className="py-8 px-8 lg:py-20 ">
        <div className="container mx-auto">
            <div className="grid gap-4 justify-items-center">
                <div>
                    <img
                        className="h-auto w-auto max-w-full rounded-lg object-contain object-center md:h-[480px]"
                        src={active}
                        alt=""
                    />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-8 justify-items-center">
                    {displayedImages.map((currentImage, index) => (
                        <div key={index}>
                            <img
                                onClick={() => setActive(currentImage)}
                                src={currentImage}
                                className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                                alt="gallery-image"
                            />
                        </div>
                    ))}
                </div>
            </div>   </div></section></div> </div>


            </>
    );
}