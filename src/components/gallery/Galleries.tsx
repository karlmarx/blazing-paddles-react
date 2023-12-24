import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import {Sidebar} from "./Sidebar";
import {Tabbar} from "./Tabbar";


function GalleryCard({ name, link, folder }: any) {
    return (
        <section className="grid place-items-center p-4">
            <Card className="w-auto max-w-[24rem]">
                <CardHeader color="gray" className="relative h-56">
                    <img
                        src={`${folder}/default.jpg`}
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
        </section>
    );
}
// nav list component
const galleryItems = [
    {
        name: "Wilton Manors 2023",
        link: "wilton-manors-2023",
        folder: "/galleries/wiltonManors2023",
    },
    {
        name: "Wilton Manors 2023",
        link: "wilton-manors-2023",
        folder: "/galleries/wiltonManors2023",
    },
    {
        name: "Wilton Manors 2023",
        link: "wilton-manors-2023",
        folder: "/galleries/wiltonManors2023",
    },
    {
        name: "Wilton Manors 2023",
        link: "wilton-manors-2023",
        folder: "/galleries/wiltonManors2023",
    },
    {
        name: "Wilton Manors 2023",
        link: "wilton-manors-2023",
        folder: "/galleries/wiltonManors2023",
    },

];


 const Galleries = () => {
    return (
        <>
            <Sidebar/>
            </>
    )
}

export {Galleries}