import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Front from './Front';
export default function Home() {
    function join() {
        window.location.href = "/Join";
    }
    return (
        <div>
            <Container>

                <Navbar collapseOnSelect bg="white" expand="lg">
                    <Navbar.Brand href="/"> <img
                        src="/pics/logo.png"
                        width="80"
                        height="80"

                        alt="React Bootstrap logo"
                    />
                        <i> <b>Claws and Paws</b> </i></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Nav className="ml-auto" >

                            <Nav.Link exact href="/Medicine"><b>Shop</b></Nav.Link>&nbsp;&nbsp;&nbsp;

                            <Nav.Link exact href="/Explore"><b>Explore</b></Nav.Link>

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Nav.Link ><Button style={{ backgroundColor: "#074d5e" }} onClick={join}>Join  Us</Button></Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div >
    )
}
