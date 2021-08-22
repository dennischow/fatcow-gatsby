import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import * as constant from "./../app.constant";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";

const IndexPage = () => (
    <Layout>
        <div className="page-landing layout-page">

            <div className="greeting">
                <div className="c-grid-container">
                    <Seo title="Home" />
                    <h1>Sup Dude</h1>
                    <p>Welcome to your new Gatsby site.</p>
                    <p>Now go build something great.</p>
                </div>
            </div>

            <div className="features">
                <div className="c-grid-container">
                    <StaticImage
                        src="../images/gatsby-astronaut.png"
                        width={300}
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="A Gatsby astronaut"
                        style={{ marginBottom: `1.45rem` }}
                    />
                    <p className="c-button-container">
                        <Link className="c-btn" to={constant._ROUTES_.ABOUT}>Go to about</Link>
                        <Link className="c-btn c-btn--link" to={constant._ROUTES_.ABOUT}>Go to about</Link>
                    </p>
                </div>
            </div>

        </div>
    </Layout>
);

export default IndexPage;
