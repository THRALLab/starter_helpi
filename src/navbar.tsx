import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Button } from 'react-bootstrap';

function NavHome({handlePage} : {handlePage: (page: string) => void}) {

  const navigateToInterests = () => {
    window.location.href = '/interests';
  }

  /*
   <header className="header">
   <div className="title-container">
   <img src={BrainIcon} alt="Brain Icon" className="brainIcon" onClick ={() => handlePage('Home')} />
   <h2 className="title" onClick ={() => handlePage('Home')}>Brain Spark</h2>
       <Button className="home-button" onClick={() => handlePage('Home')}><img src={homeIcon} alt="Home Page" className="homeIcon" /></Button>
   </div>
   </header>
  */

  return (
      <>
        <Navbar bg="0000" variant="primary">
          <Container>
            <Navbar.Brand onClick={navigateToInterests}>Career by Interests</Navbar.Brand>
            <Form className="d-flex ms-auto">
              <FormControl
                type="search"
                placeholder="Search by career title"
                className="mr-2"
                aria-label="Search"
              />
              <Button className="Careers-button" onClick={() => handlePage('Career')} />
            </Form>
          </Container>
        </Navbar>
      </>
    )
}

export default NavHome;