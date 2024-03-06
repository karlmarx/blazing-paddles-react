import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from "@material-tailwind/react";
import {DevSupport} from "@react-buddy/ide-toolbox";
import { createHashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const customTheme = {
    typography: {
        defaultProps: {
            variant: "paragraph",
            color: "inherit",
            textGradient: false,
            className: "",
        },
        valid: {
            variants: [
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6",
                "lead",
                "paragraph",
                "small",
            ],
            colors: [
                "inherit",
                "current",
                "black",
                "white",
                "blue-gray",
                "gray",
                "brown",
                "deep-orange",
                "orange",
                "amber",
                "yellow",
                "lime",
                "light-green",
                "green",
                "teal",
                "cyan",
                "light-blue",
                "blue",
                "indigo",
                "deep-purple",
                "purple",
                "pink",
                "red",
            ],
        },
        styles: {
            variants: {
                h1: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    letterSpacing: "tracking-normal",
                    fontFamily: "font-sans",
                    fontSize: "text-5xl",
                    fontWeight: "font-semibold",
                    lineHeight: "leading-tight",
                },
                h2: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    letterSpacing: "tracking-normal",
                    fontFamily: "font-sans",
                    fontSize: "text-4xl",
                    fontWeight: "font-semibold",
                    lineHeight: "leading-[1.3]",
                },
                h3: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    letterSpacing: "tracking-normal",
                    fontFamily: "font-sans",
                    fontSize: "text-3xl",
                    fontWeight: "font-semibold",
                    lineHeight: "leading-snug",
                },
                h4: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    letterSpacing: "tracking-normal",
                    fontFamily: "font-sans",
                    fontSize: "text-2xl",
                    fontWeight: "font-semibold",
                    lineHeight: "leading-snug",
                },
                h5: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    letterSpacing: "tracking-normal",
                    fontFamily: "font-sans",
                    fontSize: "text-xl",
                    fontWeight: "font-semibold",
                    lineHeight: "leading-snug",
                },
                h6: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    letterSpacing: "tracking-normal",
                    fontFamily: "font-sans",
                    fontSize: "text-base",
                    fontWeight: "font-semibold",
                    lineHeight: "leading-relaxed",
                },
                lead: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    fontFamily: "font-sans",
                    fontSize: "text-xl",
                    fontWeight: "font-normal",
                    lineHeight: "leading-relaxed",
                },
                paragraph: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    fontFamily: "font-sans",
                    fontSize: "text-base",
                    fontWeight: "font-light",
                    lineHeight: "leading-relaxed",
                },
                small: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    fontFamily: "font-sans",
                    fontSize: "text-sm",
                    fontWeight: "font-light",
                    lineHeight: "leading-normal",
                },
            },
            textGradient: {
                bgClip: "bg-clip-text",
                color: "text-transparent",
            },
            colors: {
                inherit: {
                    color: "text-inherit",
                },
                current: {
                    color: "text-current",
                },
                black: {
                    color: "text-black",
                },
                white: {
                    color: "text-white",
                },
                "blue-gray": {
                    color: "text-blue-gray-900",
                    gradient: "bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400",
                },
                gray: {
                    color: "text-gray-700",
                    gradient: "bg-gradient-to-tr from-gray-600 to-gray-400",
                },
                brown: {
                    color: "text-brown-500",
                    gradient: "bg-gradient-to-tr from-brown-600 to-brown-400",
                },
                "deep-orange": {
                    color: "text-deep-orange-500",
                    gradient: "bg-gradient-to-tr from-deep-orange-600 to-deep-orange-400",
                },
                orange: {
                    color: "text-orange-500",
                    gradient: "bg-gradient-to-tr from-orange-600 to-orange-400",
                },
                amber: {
                    color: "text-amber-500",
                    gradient: "bg-gradient-to-tr from-amber-600 to-amber-400",
                },
                yellow: {
                    color: "text-yellow-500",
                    gradient: "bg-gradient-to-tr from-yellow-600 to-yellow-400",
                },
                lime: {
                    color: "text-lime-500",
                    gradient: "bg-gradient-to-tr from-lime-600 to-lime-400",
                },
                "light-green": {
                    color: "text-light-green-500",
                    gradient: "bg-gradient-to-tr from-light-green-600 to-light-green-400",
                },
                green: {
                    color: "text-green-500",
                    gradient: "bg-gradient-to-tr from-green-600 to-green-400",
                },
                teal: {
                    color: "text-teal-500",
                    gradient: "bg-gradient-to-tr from-teal-600 to-teal-400",
                },
                cyan: {
                    color: "text-cyan-500",
                    gradient: "bg-gradient-to-tr from-cyan-600 to-cyan-400",
                },
                "light-blue": {
                    color: "text-light-blue-500",
                    gradient: "bg-gradient-to-tr from-light-blue-600 to-light-blue-400",
                },
                blue: {
                    color: "text-blue-500",
                    gradient: "bg-gradient-to-tr from-blue-600 to-blue-400",
                },
                indigo: {
                    color: "text-indigo-500",
                    gradient: "bg-gradient-to-tr from-indigo-600 to-indigo-400",
                },
                "deep-purple": {
                    color: "text-deep-purple-500",
                    gradient: "bg-gradient-to-tr from-deep-purple-600 to-deep-purple-400",
                },
                purple: {
                    color: "text-purple-500",
                    gradient: "bg-gradient-to-tr from-purple-600 to-purple-400",
                },
                pink: {
                    color: "text-pink-500",
                    gradient: "bg-gradient-to-tr from-pink-600 to-pink-400",
                },
                red: {
                    color: "text-red-500",
                    gradient: "bg-gradient-to-tr from-red-600 to-red-400",
                },
            },
        },
    },
};
const router = createHashRouter([
    {
        path: "/*",
        element: <App />,
    }
]);
root.render(
    <React.StrictMode>

        <ThemeProvider value={customTheme}>

                <App/>

        </ThemeProvider>

    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();