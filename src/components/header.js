import { Link } from 'gatsby'
import React from "react"
import styled from "styled-components"

import HomeLogo from "./home-logo.js"

const Header = () => (
  <MainHeader className="mainLayout">
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
    </HeaderFlex>
  </MainHeader>
)

const MainHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  background: transparent;
  z-index: 10;
  @media(max-width:767px) {
    position: fixed;
    background: #000;
  }
`

const HeaderFlex = styled.div`
  width: 100%;
  padding: 20px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Header
