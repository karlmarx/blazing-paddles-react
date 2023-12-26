import React from "react";
import "./App.css";
import "./index.css";
import { Typography } from "@material-tailwind/react";
import logo from "./assets/images/logoblazingpaddles.jpg"; // with import
import {
    BrowserRouter as Router,
    Routes,
    Route,
    HashRouter,
    Navigate,
    RelativeRoutingType,
} from "react-router-dom";
import { Home } from "./components/Home";
import InfoCarousel from "./components/InfoCarousel";
import { Error404 } from "./components/Error404";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Footer } from "./components/footer/Footer";
import { MaterialNavbar } from "./components/navbar";
import { Galleries } from "./components/gallery/Galleries";
import ContactUs from "./components/contact/ContactUs";
import { Service } from "./components/service/Service";
import { LightboxGallery } from "./components/gallery/LightboxGallery";
import { Faq } from "./components/faq";
import { CalendarFrame } from "./components/calendar";

library.add(faInstagram);
// function redirect(url) {
//
//     return redirect("https://maps.app.goo.gl/PqU2XyAgU3kZPM6C6");
// }
function App() {
    return (
        <div
            className="App"
            style={
                {
                    // backgroundColor: "black",
                    // width: '100px',
                    // height: "95vh",
                }
            }
        >
            {/*<Router basename={process.env.PUBLIC_URL}>*/}
            <HashRouter>
                {/*<div className="flex flex-col">*/}
                {/*<div className="flex-none">*/}
                <MaterialNavbar />
                {/*<MaterialNavbar2 />*/}
                {/*</div>*/}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<Home />} />
                    <Route path="/gallery" element={<LightboxGallery />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/events" element={<CalendarFrame />} />
                    <Route
                        path="/location"
                        element={
                            <Navigate
                                to="https://maps.app.goo.gl/PqU2XyAgU3kZPM6C6"
                                replace={true}
                                relative={"path"}
                            />
                        }
                    />
                    <Route path="/service" element={<Service />} />
                    <Route path="/faq" element={<Faq />} />

                    <Route path="*" element={<InfoCarousel />} />
                </Routes>
                <Footer />
            </HashRouter>
        </div>
    );
}

export default App;
