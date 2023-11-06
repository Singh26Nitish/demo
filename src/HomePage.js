import React from "react";
import Navbar from "./Components/Navbar.js";
import News from "./Components/News.js";
import Banking from "./Components/Banking.js";
import Services from "./Components/Services.js";
import UpcomingServices from "./Components/UpcomingServices.js";

function HomePage(){
    return(
        <>
        <div className="flex-col flex-1 bg-secondary">
        <Navbar />
        <News />
        <Banking />
        <Services />
        <UpcomingServices />
        </div>
        </>
    );
}

export default HomePage;