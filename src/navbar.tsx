import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

const NavHome = () => {
  return (
    <>
      <Navbar bg="0000" variant="primary">
        <Container>
          <Navbar.Brand href="#home">Career Search</Navbar.Brand>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search by career title"
              className="mr-2"
              aria-label="Search"
            />
          </Form>
        </Container>
      </Navbar>
    </>
  )
}

export default NavHome;
