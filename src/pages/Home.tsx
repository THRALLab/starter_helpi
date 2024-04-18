import React from "react";
import branchTop from "../images/homePageImages/branchTop.png";
import DescriptionTable from "../components/homePageComp/decriptionTable";

const home: React.FC = () => {

    return (
    <div>
        <h1 style={{ textAlign: 'center'}}> Home Page</h1>
        <img src={branchTop} alt="Branch" style={{ position: 'absolute', top: 0, left: 0, width: '100px', height: '100px', zIndex: 1, transform: 'rotate(90deg)'}} />
        <img src={branchTop} alt="Branch" style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '100px', zIndex: 1, transform: 'rotate(-90deg)' }} />
        <DescriptionTable />
    </div>
    );
};
export default home;