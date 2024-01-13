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
import { Link } from "react-router-dom";

export function LocationFrame() {
    return (
        <a
            href="https://maps.app.goo.gl/PqU2XyAgU3kZPM6C6"
            target={"_blank"}
            // relative={"path"}
        >
            <div className="py-8 px-8 flex items-center justify-center">
                <Card className="hidden lg:block">
                    <CardBody>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.4246177437294!2d-80.1202565!3d26.019659299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ab8b73747489%3A0xe8e42e955d6091cb!2sBlazing%20Paddles%20Dragon%20Boat%20and%20Canoe%20Club!5e0!3m2!1sen!2sus!4v1704543707199!5m2!1sen!2sus"
                            width="800"
                            height="600"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </CardBody>
                </Card>
                <Card className="lg:hidden">
                    <CardBody>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3585.424626908025!2d-80.120256!3d26.019659!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ab8b73747489%3A0xe8e42e955d6091cb!2sBlazing%20Paddles%20Dragon%20Boat%20and%20Canoe%20Club!5e0!3m2!1sen!2sus!4v1705172216053!5m2!1sen!2sus"
                            width="400"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </CardBody>
                </Card>
            </div>
        </a>
        //     </div>
        // </section>
    );
}
