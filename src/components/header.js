import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="flex flex-wrap items-center justify-between py-6 mb-6 bg-white">
      <div className="flex items-center flex-shrink-0 mr-6 text-black-500">
        <span className="text-xl font-semibold tracking-tight">
          Profile
        </span>
      </div>
      {/* <div
        className="ml-auto flex-grow flex lg:items-center lg:w-auto"
      >
        <div className="ml-auto">
          <Link
            to={`#portfolio`}
            className="block mr-4 text-black-500 inline-block mt-0 hover:text-black-800"
          >
            Portfolio
          </Link>
        </div>
      </div> */}
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
