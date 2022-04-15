/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

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
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `100%`,
          width: 600,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer className="text-gray-500">
          © {new Date().getFullYear()} Hendriyan Ogivano, All Rights Reserved
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
