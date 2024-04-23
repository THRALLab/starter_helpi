import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Button } from 'react-bootstrap';

const handlePage = (page: string) => {
  console.log(page);
}

const NavHome = () => {
  const navigateToInterests = () => {
    window.location.href = '/interests';
  }

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