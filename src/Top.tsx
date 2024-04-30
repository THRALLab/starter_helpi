import './TopHeader.css';
import { Link } from "react-router-dom";

function TopH(){
    return(
        
            <nav>
                <p>   Career Compass</p>
                <ul>
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