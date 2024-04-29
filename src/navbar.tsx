import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Button } from 'react-bootstrap';
import homeIcon from './Pages/house.svg';

function NavHome({handlePage} : {handlePage: (page: string) => void}) {
  //const [showInterests, setShowInterests] = useState(false);
  /*
  const handleTestButtonClick = () => {
    setShowInterests(true); // Set showInterests to true to render Interests component
  };
  */

  return (
    <div className="navBar">
        <Navbar bg="0000" variant="primary">
          <Container>
          <Navbar.Brand className="title">
            Brain Spark
            </Navbar.Brand>
            <Form className="d-flex ms-auto">
              <FormControl
                type="search"
                placeholder="Search by career title"
                className="mr-2 search-bar"
                aria-label="Search"
              />
              <Navbar.Brand onClick={() => handlePage('interests')} className="career-search">
            Career Search
            </Navbar.Brand>
            <Button className="home-button" onClick={() => handlePage('Home')}><img src={homeIcon} alt="Home Page" className="homeIcon" /* Home button (switch to home page on click) */ /></Button>
            </Form>
          </Container>
        </Navbar> 
    </div>
  )
}

export default NavHome;