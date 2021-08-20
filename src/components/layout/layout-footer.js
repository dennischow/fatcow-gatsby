import * as React from "react";
import { Link } from "gatsby";

const LayoutFooter = () => (
    <footer className="layout-footer">
        <div className="layout-footer__container grid-container">
            <small className="layout-footer__copyright">
                © {new Date().getFullYear()}, Built with {` `}
                <Link className="layout-footer__link" to="/">Gatsby</Link>
            </small>
        </div>
    </footer>
);

export default LayoutFooter;
