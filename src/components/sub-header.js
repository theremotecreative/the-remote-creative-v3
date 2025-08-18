import { Link } from 'gatsby'
import React, { Component } from "react"
import styled from "styled-components"

import HomeLogo from "./home-logo.js"

class SubHeader extends Component {

  constructor(props) {
      super(props);
      this.state = { isOpen: false };
  }
  
  toggleMenu() {
      this.setState({ isOpen: !this.state.isOpen });
  }

  render() {

      let headerName = "mainLayout";
      if (this.state.isOpen) {
        headerName += ' mobileOpen';
      }
      return (   
        <MainHeader className={headerName}>
          <HeaderFlex>
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                <HomeLogo/>
              </Link>
            <MainMenu>
              <ul>
                <li>
                  <Link
                  to="/project-portfolio/"
                >
                  Project Portfolio
                </Link>
                </li>
                <li>
                <Link
                  to="/#section_two_bg"
                >
                  AI Services
                </Link>
                </li>
                <li>
                <Link
                  to="/#home_contact_row_one"
                >
                  Contact
                </Link>
                </li>
              </ul>
            </MainMenu>
            <Hamburger>
              <button onClick={() => this.toggleMenu()} aria-label="Open">
                <div></div>
                <div></div>
                <div></div>
              </button> 
            </Hamburger>
            <MobileMenu>
              <button onClick={() => this.toggleMenu()} aria-label="Close">
                <div></div>
                <div></div>
              </button>
              <ul>
                <li>
                  <Link
                  to="/project-portfolio/"
                >
                  Project Portfolio
                </Link>
                </li>
                <li>
                <Link
                  to="/#section_two_bg"
                >
                  AI Services
                </Link>
                </li>
                <li>
                <Link
                  to="/#home_contact_row_one"
                >
                  Contact
                </Link>
                </li>
              </ul>
            </MobileMenu>
          </HeaderFlex>
        </MainHeader>
      );
    }
}

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: -250px;
  height: 100vh;
  max-width: 250px;
  width: 100%;
  padding: 30px;
  background-color: #272727;
  transition-duration: .3s;
  button {
    color: #fff;
    position: absolute;
    top: 30px;
    right: 30px;
    height: 24px;
    width: 24px;
    padding: 0;
    background-color: transparent;
    border: none;
    outline: 0;
    > div {
      &:first-child {
        position: absolute;
        top: 11px;
        left: -3px;
        width: 30px;
        height: 2px;
        background-color: #fff;
        transform: rotate(45deg);
      }
      &:last-child {
        position: absolute;
        bottom: 11px;
        left: -3px;
        width: 30px;
        height: 2px;
        background-color: #fff;
        transform: rotate(-45deg);
      }
    }
    &:hover {
      cursor: pointer;
    }
  }
  ul {
    margin-left: 0;
    padding-top: 30px;
    list-style: none;
    a {
      font-family: "Poppins";
      color: #fff;
      text-decoration: none;
    }
  }
`

const MainHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  background: #000;
  z-index: 10;
  @media(max-width:767px) {
    position: fixed;
  }
  &.mobileOpen {
    ${MobileMenu} {
      right: 0;
    }
  }
`

const HeaderFlex = styled.div`
  width: 100%;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MainMenu = styled.div`
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    li {
      font-family: "Poppins";
      font-weight: 700;
      margin-left: 30px;
      margin-bottom: 0;
      a {
        color: #fff;
        font-weight: 700;
        text-decoration: none;
      }
    }
  }
  @media(max-width:767px) {
    display: none;
  }
`

const Hamburger = styled.div`
  display: none;
  button {
    width: 48px;
    height: 32px;
    display: flex;
    flex-wrap: wrap;
    align-items: space-between;
    background: transparent;
    border: none;
    outline: 0;
    &:hover {
      cursor: pointer;
    }
    div {
      width: 100%;
      height: 2px;
      background-color: #eee;
    }
  }
  @media(max-width:767px) {
    display: block;
  }
`

export default SubHeader