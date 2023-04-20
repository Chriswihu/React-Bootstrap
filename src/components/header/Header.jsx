import React from "react";
import "./header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LoginForm from "../loginform/LoginForm.jsx";

import LoggedIn from "../LoggedIn.jsx";
import facade from "../../apiFacade.js";
import LogIn from "../loginform/LoginForm.jsx";


const Header = ({loggedIn, setLoggedIn, user, setUser}) => {

    const logout = () => {
        facade.logout();
        setLoggedIn(false);
        setUser({name: "", roles: ""})
    }
    const login = (user, pass) => {
        facade.login(user, pass).then(() => {
            const token = facade.readJwtToken(facade.getToken());
            setUser({username: token.username, roles: token.roles});
            setLoggedIn(true);
        });
    }

    return (
        <div className="Nav">
            <Navbar bg="light" expand="lg">
                <Container className="Nav">
                    <a className="active" href="/"><img src="public/vite.svg" height="70px" className="img-fill"
                                                        alt=""></img>
                    </a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="Nav">
                            <a className="nav-item" href="/home">Home</a>
                            <a className="nav-item" href="/about">About</a>
                            <a className="nav-item" href="/contact">Contact</a>
                        </Nav>
                        <Nav className="ms-auto">


                            {!loggedIn ? (<LogIn login={login}/>) :
                                (<div>
                                    <LoggedIn user={user}/>
                                    <button onClick={logout}>Logout</button>
                                </div>)}


                            {/*{!loggedIn ? (<LogIn login={login} />) :*/}
                            {/*    (<div>*/}
                            {/*        <LoggedIn user={user} />*/}
                            {/*        <button onClick={logout}>Logout</button>*/}
                            {/*    </div>)}*/}

                            {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
                            {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="#action/3.2">*/}
                            {/*        Another action*/}
                            {/*    </NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Divider/>*/}
                            {/*    <NavDropdown.Item href="#action/3.4">*/}
                            {/*        Separated link*/}
                            {/*    </NavDropdown.Item>*/}
                            {/*</NavDropdown>*/}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
        ;
}

export default Header;