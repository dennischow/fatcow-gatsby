import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const LayoutHeader = ({ siteTitle }) => (
    <header className="layout-header">
        <div className="layout-header__container c-grid-container">
            <h1 className="layout-header__brand">
                <span className="layout-header__brand-img" />
                <Link className="layout-header__brand-link" to="/">
                    Fat-Cow Production
                    {/* {siteTitle} */}
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
