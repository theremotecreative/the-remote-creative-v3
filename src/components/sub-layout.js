import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import SubHeader from "./sub-header"
import "./layout.css"

const SubLayout = ({ children }) => {

  return (
    <>
      <MainLayout>
        <SubHeader />
        <main>{children}</main>
        <Footer>
        <p>© {new Date().getFullYear()}   |   The Remote Creative   |   All Rights Reserved</p>
          {` `}
        </Footer>
      </MainLayout>
    </>
  )
}

const MainLayout = styled.div`
  width: 100%;
  background-color: #aaa;
  min-height: 100vh;
`

const Footer = styled.footer`
  padding: 60px 30px;
  background-color: #181c19;
  border-top-width: 0px;
  border-color: rgba(255,255,255,0.09);
  p {
    font-family: "Poppins";
    text-align: center;
    color: #ffffff;
    font-size: 13px;
    margin-bottom: 0px;
  }
`

SubLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SubLayout