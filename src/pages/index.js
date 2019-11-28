import React, { useEffect } from "react"
import AdSense from "react-adsense";

import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = () => {

  const insertAdSense = () => {
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    document.body.appendChild(script);

    (window.adsbygoogle = window.adsbygoogle || []).push({
      google_ad_client: "ca-pub-6583782974868046",
      enable_page_level_ads: true
    });
  }

  useEffect(() => {
    insertAdSense();
  }, []);

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
      <AdSense.Google
        client="ca-pub-6583782974868046"
        slot="3185903488"
        style={{ display: "block" }}
        format="auto"
        responsive="true"
      />
    </Layout>
  );
}

export default IndexPage
