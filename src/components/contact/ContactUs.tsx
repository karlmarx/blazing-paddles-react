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

export default function ContactUs() {
    return (
        <section className="p-10">
            <div className="flex w-full flex-col-reverse items-center gap-10 lg:flex-row">
                <div className="w-full text-left lg:w-1/2 lg:text-center">
                    <Card color="transparent" className="py-0 lg:py-20">
                        <div className="mx-auto lg:max-w-md">
                            <Typography
                                variant="h2"
                                color="blue-gray"
                                className="mb-4 text-4xl lg:text-5xl"
                            >
                                Say Hi!
                            </Typography>
                            <Typography variant="lead" className="mb-16 !text-gray-500">
                                Whether you have questions or you would just like to say hello,
                                contact us.
                            </Typography>
                            <form action="#" className="flex flex-col gap-4">
                                <Input crossOrigin={undefined} color="gray" size="lg" label="Name" name="name" />
                                <Input crossOrigin={undefined}
                                    color="gray"
                                    type="email"
                                    size="lg"
                                    label="Email"
                                    name="email"
                                />
                                <Textarea
                                    color="gray"
                                    size="lg"
                                    label="Message"
                                    name="message"
                                />
                                <Checkbox
                                    crossOrigin={undefined}
                                    color="gray"
                                    label={
                                        (
                                            <Typography className="font-normal !text-gray-500">
                                                You agree to your friendly{" "}
                                                <a
                                                    href="#"
                                                    className="font-medium text-gray-700 hover:text-gray-900"
                                                >
                                                    Privacy Policy
                                                </a>
                                                .
                                            </Typography>
                                        ) as any
                                    }
                                    containerProps={{
                                        className: "-ml-2.5",
                                    }}
                                />
                                <Button size="lg" color="gray" className="mt-6" fullWidth>
                                    send message
                                </Button>
                            </form>
                        </div>
                    </Card>
                </div>
                <div className="w-full lg:w-1/2">
                    <Card className="rounded-xl border border-gray-900 bg-gray-900/100 py-10 px-10 pb-0 md:py-20 lg:py-60 lg:px-20">
                        <div className="mx-auto lg:max-w-xl">
                            <Typography
                                variant="h2"
                                color="white"
                                className="mb-4 text-3xl !leading-snug lg:text-4xl"
                            >
                                Contact Information
                            </Typography>
                            <Typography variant="lead" color="white" className="opacity-50">
                                Fill up the form and our Team will get back to you within 24
                                hours.
                            </Typography>
                            <div className="mt-16 grid gap-4">
                                <div className="flex items-center gap-4">
                                    <PhoneIcon className="h-6 w-6 text-white" />
                                    <Typography className="font-bold !text-white">
                                        +1(424) 535 3523
                                    </Typography>
                                </div>
                                <div className="flex items-center gap-4">
                                    <EnvelopeIcon className="h-6 w-6 text-white" />
                                    <Typography className="font-bold !text-white">
                                        hello@mail.com
                                    </Typography>
                                </div>
                                <div className="flex items-center gap-4">
                                    <TicketIcon className="h-6 w-6 text-white" />
                                    <Typography className="font-bold !text-white">
                                        Open Support Ticket
                                    </Typography>
                                </div>
                            </div>
                            <div className="my-10 flex items-center gap-8">
                                <i className="fa-brands fa-twitter text-xl text-white" />
                                <i className="fa-brands fa-linkedin text-xl text-white" />
                                <i className="fa-brands fa-dribbble text-xl text-white" />
                                <i className="fa-brands fa-facebook text-xl text-white" />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}

