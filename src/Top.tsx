import './TopHeader.css';
import { Link } from "react-router-dom";
import compass from "./images/Arrow_Compass_White.webp";
function TopH(){
    return(
        <nav >
        <img src={compass} style={{ width: "10.5%", height: "150px", objectFit: "cover", marginRight:"-300px"}} alt="" />
        <p style={{ marginLeft: "-10px", lineHeight: "1.2", margin: "-10", marginRight: "0px"}}>
            Career<br/>Compass</p>
        <ul style={{ marginLeft: "20px" }}>
            <Link to="/home">
                <li>Home</li>
            </Link>
            <Link to="/basic">
                <li>Basic Question</li>
            </Link>
            <Link to="/detailed">
                <li>Detailed Question</li>
            </Link>
        </ul>
        
    </nav>
    );

}

export default TopH;