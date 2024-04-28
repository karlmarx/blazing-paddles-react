import React, {EffectCallback, useEffect, useState} from "react";
import {
    Input,
    Popover,
    PopoverHandler,
    PopoverContent,
} from "@material-tailwind/react";
// @ts-ignore
import ICAL from "ical.js";
import {addMonths, endOfYesterday, format, getDate, getDayOfYear, isPast, isSaturday, startOfMonth} from "date-fns";
import {DateAfter, DayOfWeek, DayPicker, Matcher} from "react-day-picker";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import axios, {AxiosResponse} from "axios";



export default function DatePicker() {
    const [date, setDate] = React.useState<Date>();
    const [dates, setDates] = React.useState<Array<any>>([]);
    const [disableDays, setDisabledDays] = React.useState<Array<Matcher>>([]);
    const [month, setMonth] = useState<Date>();

    const fetchDates = async() => {

        try {
            axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

            const url = "https://classroom-tracker-gu6t24lssq-uk.a.run.app/ical"
            const response = await axios(url)
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];



            //
            let jCalData = ICAL.parse(response.data.trim());
            console.log(jCalData)
            let comp = new ICAL.Component(jCalData);
            // console.log(comp)
            let vevents = comp.getAllSubcomponents('vevent');
            console.log(vevents)
            const found_dates = []
            const found_yeardays = []
            for (const vevent of vevents) {
                var event = new ICAL.Event(vevent);
                console.log(event)
                console.log(event.summary, event.uid, event.description, event.startDate.toJSDate())
                //TODO if summary includes practice adn not cancelled add to available dates
                const evDate = event.startDate.toJSDate()
                if(isSaturday(evDate) && !isPast(evDate) && event.summary.search(/Practice/) && event.summary.search('CANCELED') == -1) {
                    console.log("isPractice")
                    found_dates.push(evDate)
                    found_yeardays.push(getDayOfYear(evDate))
                }

            }
            setDates(found_dates)
            setDate(found_dates[0])
            setMonth(found_dates[0])




            const date = startOfMonth(new Date())
            const endDate = addMonths(new Date(), 4);


            const dates = [];
            while (date <= endDate) {
                if (!found_yeardays.includes(getDayOfYear(date)) || isPast(date)) {
                    dates.push(new Date(date));

                }
                date.setDate(date.getDate() + 1);
            }

            console.log(dates);


            setDisabledDays(dates)
            // console.log(jCalData)
        } catch (err) {
            const date = startOfMonth(new Date())
            const endDate = addMonths(new Date(), 4);
            const dates = [];
            const found_dates = []
            while (date <= endDate) {
                if (!isSaturday(date) || isPast(date)) {
                    dates.push(new Date(date));

                } else {
                    found_dates.push(date)
                }
                date.setDate(date.getDate() + 1);
            }

            console.log(dates);
            console.error(err);
            setDate(found_dates[0])
            setMonth(found_dates[0])
            setDisabledDays(dates)

        }
    };

    useEffect(() => {
        fetchDates()
        }, []);




        return (
            <div className="">
                <Popover placement="bottom">
                    <PopoverHandler>
                        <Input
                                          color="gray"
                                          size="lg"
                                          name="date"
                                          id="date"
                            label="Select a Date"
                            onChange={() => null}
                            value={date ? format(date, "PPP") : ""} crossOrigin={undefined}
                        />
                    </PopoverHandler>
                    <PopoverContent>
                        <DayPicker
                            required
                            //TODO load icalendar, parse avaialable days
                            // toMonth={new Date} tODO
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            showOutsideDays
                            defaultMonth={month}
                            fromMonth={month}
                            toMonth={addMonths(new Date(),2)}
                            className="border-0"
                            classNames={{
                                caption: "flex justify-center py-2 mb-4 relative items-center",
                                caption_label: "text-sm font-medium text-gray-900",
                                nav: "flex items-center",
                                nav_button:
                                    "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                                nav_button_previous: "absolute left-1.5",
                                nav_button_next: "absolute right-1.5",
                                table: "w-full border-collapse",
                                head_row: "flex font-medium text-gray-900",
                                head_cell: "m-0.5 w-9 font-normal text-sm",
                                row: "flex w-full mt-2",
                                cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                                day: "h-9 w-9 p-0 font-normal",
                                day_range_end: "day-range-end",
                                day_selected:
                                    "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                                day_today: "rounded-md bg-gray-200 text-gray-900",
                                day_outside:
                                    "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                                day_disabled: "text-gray-500 opacity-50",
                                day_hidden: "invisible",
                            }}
                            disabled={disableDays}
                            components={{
                                IconLeft: ({...props}) => (
                                    <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2"/>
                                ),
                                IconRight: ({...props}) => (
                                    <ChevronRightIcon {...props} className="h-4 w-4 stroke-2"/>
                                ),
                            }}
                        />
                    </PopoverContent>
                </Popover>
            </div>
        );
    }
