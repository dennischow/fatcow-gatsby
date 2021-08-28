import * as React from "react";
import { Link } from "gatsby";
import * as constant from "./../../app.constant.js";

const LayoutFooter = () => (
    <footer className="layout-footer">
        <div className="layout-footer__container c-grid-container">
            <div className="layout-footer__general">
                <span>© {new Date().getFullYear()} Fat-Cow Production (Using action script to trigger - try again)</span>
                <span>
                    Handcrafted by <Link className="layout-footer__link" to={constant._ROUTES_.HOME}>Dennis Chow</Link>
                </span>
            </div>
        </div>
    </footer>
);

export default LayoutFooter;
