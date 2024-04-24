import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "../index.css";
import logo from "./ProfessionPilotLogo.png";

/*
What Makes a Good Website:
    Customized logo representing your business.

    Navigation bar highlighting the vital pages in your website’s header.

    Hero section displaying pictures or videos in the header.

    Headline on the hero section stating your unique selling proposition (USP).

    Call-to-action (CTA) buttons in multiple strategic places.

    Social proof like authority website banners, testimonials, or customer reviews.

    Text like website copy and content.

    Media files such as photos or videos to keep visitors visually engaged.

    Footer summarizing your web pages using quick links.
*/


export function HomePage(): JSX.Element {
    const [isHome, setHome] = useState<boolean>(true);
    const [isBasic, setBasic] = useState<boolean>(false);
    const [isDetailed, setDetailed] = useState<boolean>(false);
    const [index, setIndex] = useState<number>(0);
    const careerList = [
        "Software Developer",
        "Doctor",
        "Salesperson",
        "Artist",
        "Accountant",
        "Truck Driver",
        "Manager",
        "Engineer",
        "Teacher",
        "Musician"
    ];

    useEffect(() => {
        function cycleCareer(): void {
            setIndex((index+1)%careerList.length);
        }

        const intervalId = setInterval(cycleCareer, 3000); // Calls cycleCareer every 3 seconds
    
        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [index, careerList.length]);
    
    function updateSetBasic(): void {
        setHome(false);
        setBasic(true);
        setDetailed(false);
    }

    function updateSetDetailed(): void {
        setHome(false);
        setBasic(false);
        setDetailed(true);
    }

    return (
        <div className = "home">
            <div className = "websiteTitle">
                <span className="title">Profession Pilot</span>
                <div className="slogan">
                    <div className = "sloganContainer">
                        <div className = "sloganText">Now Boarding: </div><div className="listTerm">{careerList[index]}</div>
                    </div>
                </div>
            </div>
            <div className = "main">
                <img 
                    src = {logo}
                    alt = "Profession Pilot Logo">
                </img>
            </div>
            <Button
                type="button"
                className="nextButton"
                onClick={updateSetDetailed}
                >
                <span className="button-span">Detailed</span>
            </Button>
            <Button
                type="button"
                className="prevButton"
                onClick={updateSetBasic}
                >
                <span className="button-span">Basic</span>
            </Button>
            {/* Assuring a smooth landing into your new career */}
            <div className = "features"> </div>
            <div className = "services"> </div>
            <div className = "about"> </div>
            <h1>Home</h1>
                <p>Welcome to the home page!</p>
                <p>Corey Mitterer</p>
                <p>Ian Duffy</p>
                <p>Logan Ponik</p>
                <p>Junpuyin Wei</p>
        </div>
    );
}