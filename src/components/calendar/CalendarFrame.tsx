import { ValidationError, useForm } from "@formspree/react";
import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";
import {
    CardBody,
    Card,
    Input,
    Textarea,
    Checkbox,
} from "@material-tailwind/react";
import type { CheckboxStylesType } from "@material-tailwind/react";
import type { InputProps } from "@material-tailwind/react";
import type { InputStylesType } from "@material-tailwind/react";

export function CalendarFrame() {
    return (
        // <section className="py-8 px-8 lg:py-20">
        //     <div className="container mx-auto">
        //         <Card color="blue" shadow={false} className="rounded-xl ">
        //             <CardBody className="grid place-items-center gap-y-10 lg:grid-cols-12">
        <div>
            <div className="py-8 px-8 flex items-center justify-center ">
                <Card className="hidden lg:block">
                    <CardBody>
                        <iframe
                            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&title=Practice%20and%20Race%20Calendar&src=djkza2wzdmFudHVwYjlzMTU4MTdyY21lbThnM29tY2tAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%230B8043"
                            style={{ borderWidth: 0 }}
                            width="800"
                            height="600"
                            frameBorder="0"
                            scrolling="no"
                        ></iframe>
                    </CardBody>
                </Card>
                <Card className="lg:hidden">
                    <CardBody>
                        <iframe
                            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&title=Practice%20and%20Race%20Calendar&src=djkza2wzdmFudHVwYjlzMTU4MTdyY21lbThnM29tY2tAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%230B8043"
                            style={{ borderWidth: 0 }}
                            width="400"
                            height="300"
                            frameBorder="0"
                            scrolling="no"
                        ></iframe>
                    </CardBody>
                </Card>
            </div>
        </div>
        //             </CardBody>
        //         </Card>
        //     </div>
        // </section>
    );
}
