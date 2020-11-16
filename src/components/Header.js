import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
} from "mdbreact";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Search from "./CRUD/Search";

class FixedNavbarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    const bgRed = { backgroundColor: "none" };
    const container = { height: 1300 };
    return (
      <div>
        <header>
          <MDBNavbar style={bgRed} dark expand="md" scrolling fixed="top">
            <MDBNavbarBrand href="/title">
              <strong>SpinWheel</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.onClick} />
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <Link className="nav-link" to="/">
                    Главная
                  </Link>
                </MDBNavItem>

                <MDBNavItem>
                  <Link className="nav-link" to="/catalog">
                    Каталог
                  </Link>
                </MDBNavItem>

                <MDBNavItem>
                  <Link className="nav-link" to="/blog">
                    Борт журналы
                  </Link>
                </MDBNavItem>
                
              </MDBNavbarNav>
              <Search />
              <MDBNavbarNav right>
                <MDBNavItem>
                  <a className="nav-link" href="https://www.facebook.com/">
                    <MDBIcon fab icon="facebook-f" />
                  </a>
                </MDBNavItem>
                <MDBNavItem>
                  <a className="nav-link" href="https://twitter.com/?lang=ru">
                    <MDBIcon fab icon="twitter" />
                  </a>
                </MDBNavItem>
                <MDBNavItem>
                  <a className="nav-link" href="https://www.instagram.com/">
                    <MDBIcon fab icon="instagram" />
                  </a>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          <div style={{ backgroundImage: "" }}></div>
        </header>
      </div>
    );
  }
}

export default FixedNavbarExample;
