import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout/layout";
import Seo from "../components/seo";

const PageAbout = () => (
    <Layout>
        <div className="page-about layout-page-view">

            <div className="about">
                <div className="grid-container">

                    <Seo title="About" />
                    <h1>Hi from the about page</h1>
                    <p>Check it out</p>
                    <Link to="/">Go back to the homepage</Link>

                </div>
            </div>

        </div>
    </Layout>
);

export default PageAbout;
