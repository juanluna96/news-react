import PropTypes from "prop-types";
import React from 'react'

const Header = ({ titulo }) => {
    return (
        <nav className="nav-wrapper light-blue darken-3">
            <a href="#!" className="brand-logo center">{ titulo }</a>
        </nav>
    )
}

Header.propTypes = {
    titulo: PropTypes.any
}

export default Header
