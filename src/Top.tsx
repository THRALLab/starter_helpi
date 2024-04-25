import './TopHeader.css';
import { Link } from "react-router-dom";

function TopH(){
    return(
            <nav>
                <ul >
                <Link to="/home">
					<li>Home</li>
				</Link>
                <Link to="/basic">
					<li>Basic Question</li>
				</Link>
				<Link to="/detailed">
					<li>Detailed Question</li>
				</Link>
                <Link to="/result">
					<li>Results</li>
				</Link>
                </ul>
            </nav>
    );

}

export default TopH;