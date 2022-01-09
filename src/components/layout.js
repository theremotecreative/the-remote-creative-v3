import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"
import "./slick.css"
import "./slick-theme.css"

import "@fontsource/roboto";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import "@fontsource/poppins";
import "@fontsource/poppins/700.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

        <MainLayout>{children}</MainLayout>
        <Footer>
          <p>© {new Date().getFullYear()} | The Remote Creative | All Rights Reserved</p>
        </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const MainLayout = styled.main`
  background-color: #070C22;

`

const Footer = styled.footer`
  padding: 60px 20px;
  background-color: #000;
  p {
    font-family: Poppins;
    font-size: 14px;
    text-align: center;
    color: #fff;
    margin-bottom: 0px;
  }
`

export default Layout
