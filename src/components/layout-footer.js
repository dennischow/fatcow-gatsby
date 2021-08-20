import * as React from "react";
import { Link } from "gatsby";

const LayoutFooter = () => (
    <footer
        style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
        }}>
        © {new Date().getFullYear()}, Built with {` `}
        <Link to="/">Gatsby</Link>
    </footer>
);

export default LayoutFooter;
