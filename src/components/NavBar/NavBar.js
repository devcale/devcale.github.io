import { useState, useEffect } from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import navIcon1 from '../..//assets/img/navicon1.svg';
import navIcon2 from '../../assets/img/twitter.svg';
import navIcon3 from '../../assets/img/github.svg';
import './NavBar.css';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
        if (window.scrollY > 50){
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  
    return (
    <Navbar  expand="lg" variant='dark' className={scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Brand >
            <span className='no-select'>Nicolás Calero</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='nav-collapse'>
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown" className='nav-dropdown'>
              <NavDropdown.Item href="#projects" onClick={()=>onUpdateActiveLink('projects')}>All projects</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  onClick={()=>onUpdateActiveLink('projects')}>
              <Link to={`projects/contextual-auth`}>
                Contextual Auth Service
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item  onClick={()=>onUpdateActiveLink('projects')}>
              <Link to={`projects/wizard-chess`}>
                Wizard Chess VR
                </Link>
              </NavDropdown.Item>
              
              <NavDropdown.Item onClick={()=>onUpdateActiveLink('projects')}>
              <Link to={`projects/parchapp`}>
                ParchApp Mobile App
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item  onClick={()=>onUpdateActiveLink('projects')}>
                <Link to={`projects/carcassonne`}>
                Carcassonne Challenge
                </Link>
                
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='https://www.linkedin.com/in/nicolascalero/' target="_blank" rel="noreferrer"><img src={navIcon1} alt='' /></a>
                <a href='https://twitter.com/devcale' target="_blank" rel="noreferrer"><img src={navIcon2} alt='' /></a>
                <a href='https://github.com/devcale' target="_blank" rel="noreferrer"><img src={navIcon3} alt='' /></a>
            </div>
            <button className='vvd' onClick={() => window.location = 'mailto:nicolas.calero1@gmail.com'}><span>Contact Me!</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
