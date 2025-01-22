import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Live02 from "../components/Live02.jsx";

const HomePage = () => {
    const author = "Shamsuzzaha Sumon";

    const person1 = {
        name: "Shamsuzzaha Sumon",
        age: "25",
        city: "Rangpur",
        certificate: {
            ssc: "2014",
            gpa: "5",
        },
    };
    const person2 = {
        name: "Shamsuzzaman Remon",
        age: "23",
        city: "Rangpur",
        certificate: {
            ssc: "2018",
            gpa: "passed",
        },
    };

    const handleButtonClick = (name) => {
        window.alert("Hello " + name);
    };

    return (
        <div className="container">
            <Navbar />
            <HeroSection />
            <Live02
                authorName={author}
                personObj={person1}
                handler={handleButtonClick}
            />
            <Live02
                authorName={author}
                personObj={person2}
                handler={handleButtonClick}
            />
            <Footer />
        </div>
    );
};

export default HomePage;
