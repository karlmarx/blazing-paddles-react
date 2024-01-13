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

export default function ContactUs() {
    const [state, handleSubmit] = useForm("xyyrgvnp");
    if (state.succeeded) {
        // TODO: replace with pop-up
        return <p>Thanks for joining!</p>;
    }

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
                                Dragon Boat Practice Sign-up
                            </Typography>
                            <Typography
                                variant="lead"
                                className="mb-16 !text-gray-900"
                            >
                                Beginner-friendly dragon boat practices take
                                place on <b>Saturday</b> mornings at{" "}
                                <b>8:15 a.m.</b> departing from the Holland Park
                                Boat Ramp in Hollywood, Florida. Please fill out
                                the information below to sign up and we will be
                                in touch.
                            </Typography>
                            {/*TODO: confirmation pop-up with link to faq and waiver*/}

                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-4"
                            >
                                <Input
                                    crossOrigin={undefined}
                                    color="gray"
                                    size="lg"
                                    label="Name"
                                    name="name"
                                    id="name"
                                />
                                <ValidationError
                                    prefix="Name"
                                    field="name"
                                    errors={state.errors}
                                />
                                <Input
                                    crossOrigin={undefined}
                                    color="gray"
                                    type="email"
                                    size="lg"
                                    label="Email"
                                    name="email"
                                    id="email"
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                                <Textarea
                                    color="gray"
                                    size="lg"
                                    label="Questions/Concerns"
                                    name="message"
                                    id="message"
                                />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                                <Button
                                    type="submit"
                                    size="lg"
                                    color="gray"
                                    className="mt-6"
                                    fullWidth
                                    disabled={state.submitting}
                                >
                                    Submit
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
                            <Typography
                                variant="lead"
                                color="white"
                                className="opacity-50"
                            >
                                You can also reach Captain 'Iron' Will Murphy by
                                email or connect with the team on social media.
                            </Typography>
                            <div className="mt-16 grid gap-4">
                                <div className="flex items-center gap-4">
                                    <EnvelopeIcon className="h-6 w-6 text-white" />
                                    <Typography className="font-bold !text-white">
                                        WillMurphy@SOARteam.com
                                    </Typography>
                                </div>
                            </div>
                            <div className="my-10 flex items-center gap-8">
                                <i className="fa-brands fa-instagram text-xl text-white" />
                                <i className="fa-brands fa-youtube text-xl text-white" />
                                <i className="fa-brands fa-facebook text-xl text-white" />
                                <i className="fa-brands fa-google text-xl text-white" />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
