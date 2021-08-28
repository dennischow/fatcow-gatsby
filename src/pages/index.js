import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import * as constant from "./../app.constant";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";

import imgFeatureBannerBackground from "./../assets/images/home/polygon-colored-crossed-dark-extend-bg.jpg";

const IndexPage = () => (
    <Layout>
        <div className="page-landing layout-page">

            {/* Feature Banner Starts */}
            <section className="feature-banner feature-banner--hero">
                <div className="feature-banner__container c-grid-container">

                    <div className="feature-banner__box">
                        <div className="feature-banner__content">
                            <h2 className="feature-banner__heading">
                                <span className="feature-banner__begin-word feature-banner__stacker">Just A</span>
                                <span className="feature-banner__stacker">Front-End</span>
                                <span className="feature-banner__stacker">Web Developer</span>
                                <span className="c-ninja-content"> Dennis Chow a.k.a. Fat-Cow</span>
                            </h2>
                            <p className="feature-banner__sub-heading">Who cares about things that users see and interact with</p>
                        </div>
                        <div className="feature-banner__visual-content">
                            <div className="feature-banner__visual"
                                role="img"
                                aria-label="picture of a low-poly illustraion artwork by dennis chow"
                                style={{ backgroundImage: `url(${imgFeatureBannerBackground})` }}>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* Feature Banner Ends */}

            <div className="greeting">
                <div className="c-grid-container">
                    <Seo title="Home" />
                    <h1>Sup Dude</h1>
                    <p>Welcome to your new Gatsby site.</p>
                    <p><strong>Integrated with CI.</strong></p>
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
