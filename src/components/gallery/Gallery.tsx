import React from "react";
// @ts-ignore
import galleries from "Public";
// @ts-ignore
function importAll(r) {
    // @ts-ignore
    // let images = {};
    // r.keys().forEach((key) => (cache[key] = r(key)));
    return r.keys().map(r);
}
// @ts-ignore
const images = importAll(require.context('../../../public/galleries/wiltonManors2023', false, /\.(png|jpe?g)$/));

// @ts-ignore

console.log(images)

interface GalleryProps {
    name: string,
    image_list: string[],
}



export default function Gallery({image_list}: GalleryProps) {
    const data = image_list.map(link  => { // @ts-ignore
        imgeLink})
    // const data = [
    //     {
    //         imgelink:
    //         images[0]
    //     },
    // ]
    // const data = [
    //     {
    //         imgelink:
    //             "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    //     },
    //     {
    //         imgelink:
    //             "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    //     },
    //     {
    //         imgelink:
    //             "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    //     },
    //     {
    //         imgelink:
    //             "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    //     },
    //     {
    //         imgelink:
    //             "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    //     },
    //     {
    //         imgelink:
    //             "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    //     },
    //     {
    //         imgelink:
    //             "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    //     },
    //     {
    //         imgelink:
    //             "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    //     },
    //     {
    //         imgelink:
    //             "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    //     },
    //     {
    //         imgelink:
    //             "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    //     },
    //     {
    //         imgelink:
    //             "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    //     },
    //     {
    //         imgelink:
    //             "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    //     },
    //     {
    //         imgelink:
    //             "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    //     },
    //     {
    //         imgelink:
    //             "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    //     },
    //     {
    //         imgelink:
    //             "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    //     },
    // ];

    const [active, setActive] = React.useState(
        images[0],
    );

    // @ts-ignore
    return (
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
                {image_list.map((currentImage, index) => (
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
        </div>
        </div>
        </section>
    );
}