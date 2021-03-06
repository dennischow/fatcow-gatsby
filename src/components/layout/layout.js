/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import "./../../assets/stylesheet/index.scss";

import LayoutHeader from "./layout-header";
import LayoutFooter from "./layout-footer";

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <div className="layout-view">
                <LayoutHeader siteTitle={data.site.siteMetadata?.title || `Title`} />

                <main className="layout-main">
                    {children}
                </main>

                <LayoutFooter />
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
