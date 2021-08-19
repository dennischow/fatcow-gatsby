import * as React from "react";
import { Link } from "gatsby";

const Footer = () => (
    <footer
        style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
        }}>
        © {new Date().getFullYear()}, Built with {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
);

export default Footer;
