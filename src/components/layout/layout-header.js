import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const LayoutHeader = ({ siteTitle }) => (
    <header className="layout-header">
        <div className="layout-header__container grid-container">
            <h1 className="layout-header__brand">
                <Link className="layout-header__link" to="/">
                    {siteTitle}
                </Link>
            </h1>
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
