import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import * as constant from "./../../app.constant.js";

const LayoutHeader = ({ siteTitle }) => (
    <header className="layout-header">
        <div className="layout-header__container c-grid-container">
            <h1 className="layout-header__brand">
                <span className="layout-header__brand-img" />
                <Link className="layout-header__brand-link" to={constant._ROUTES_.HOME}>
                    Fat-Cow Production
                    {/* {siteTitle} */}
                </Link>
            </h1>
            <nav className="layout-header__navigation">
                <ul className="layout-header__navigation-list">
                    <li className="layout-header__navigation-list-item">
                        <Link className="layout-header__navigation-link" to={constant._ROUTES_.HOME}>
                            Home
                        </Link>
                    </li>
                    <li className="layout-header__navigation-list-item">
                        <Link className="layout-header__navigation-link" to={constant._ROUTES_.ABOUT}>
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
);

LayoutHeader.propTypes = {
    siteTitle: PropTypes.string,
};

LayoutHeader.defaultProps = {
    siteTitle: ``,
};

export default LayoutHeader;
