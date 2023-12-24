import React from "react";
import "./App.css";
import "./index.css";
import { Typography } from "@material-tailwind/react";
import logo from "./assets/images/logoblazingpaddles.jpg"; // with import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from "./components/Home";
import InfoCarousel from "./components/InfoCarousel";
import {Error404} from "./components/Error404";
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import {Footer, Footer4} from "./components/footer";
import {MaterialNavbar} from "./components/navbar";
import DefaultCarousel from "./components/DefaultCarousel";
import {Galleries} from "./components/gallery/Galleries";

library.add( faInstagram)

function App() {
    return (
      <div
          className="App"
          style={{
            // backgroundColor: "black",
            // width: '100px',
            // height: "95vh",

          }}
      >


          <Router>
              {/*<div className="flex flex-col">*/}
              {/*<div className="flex-none">*/}
          <MaterialNavbar />
          {/*<MaterialNavbar2 />*/}
              {/*</div>*/}
              <Routes>
                  <Route  path="/" element={<Home/>} />
                  <Route path="/about" element={<Home/>} />
                  <Route path="/gallery" element={<Galleries/>} />
                  <Route  path="*" element={<InfoCarousel/>} />



              </Routes>
              <Footer4/>
          </Router>

      </div>

  );
}

export default App;
