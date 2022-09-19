import {
  Row,
  Col,
  Container,
  Breadcrumb,
  Image,
  Carousel,
  Nav,
  NavDropdown,
  Alert,
  Card,
  Button,
  Pagination,
  Table,
  Form
} from "react-bootstrap";
// import Header from "./Header";

function App() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Container>
      <header className="my-5">
        <Row>
          <Col md="2" xs="3">
            <Image
              src="https://cdn5.vectorstock.com/i/1000x1000/63/54/bearded-men-hipster-face-vector-24216354.jpg"
              rounded
              height="30"
              className="mr-2"
            />
            Logo
          </Col>
          <Col md="10" xs="9">
            <Nav
              variant="pills"
              activeKey="1"
              onSelect={handleSelect}
              className="d-flex justify-content-end"
            >
              <Nav.Item>
                <Nav.Link eventKey="1" href="#/home">
                  NavLink 1 content
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2" title="Item">
                  NavLink 2 content
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="3" disabled>
                  NavLink 3 content
                </Nav.Link>
              </Nav.Item>
              <NavDropdown title="Dropdown" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">
                  Something else here
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Col>
        </Row>
      </header>
      {/* <Header /> */}
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>

      <Alert variant="info" className="w-25">
        Only today!
      </Alert>

      <Carousel>
        <Carousel.Item>
          <img
            style={{ width: "100vw", height: "100vh" }}
            // className="img-responsive mx-auto"
            src="https://1.bp.blogspot.com/-RET3jzHjUdI/Xd2Z3zO_bVI/AAAAAAAAE-g/m9gTuElmcasdxzCVfI7QrKs6wmFpwW6zQCLcBGAsYHQ/s1600/image10.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100vw", height: "100vh" }}
            className="img-responsive"
            src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100vw", height: "100vh" }}
            className="img-responsive"
            src="https://mw1.google.com/mw-planetary/sky/skytiles_v1/74_29_7.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="my-4">
        <Row>
          {[0, 1, 2, 3].map((item) => (
            <Col md="4" xs="6">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://i.pinimg.com/236x/36/ba/6d/36ba6d5ae2c68f93b4b44f89bcbeaf48--lightning-storms-lightning-strikes.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
        {[0, 1, 2, 3].map((item, index) => (
          <tr>
            <td>{index}</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        ))}
        </tbody>
      </Table>

      <Form className="mb-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default App;
