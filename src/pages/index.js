import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
// Components
import About from '../components/About';
import Header from '../components/Header';
import Skills from '../components/skills';
import Work from '../components/Work';
// import Promotion from "../components/Promotion"
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <SEO title="Matteo Melotti Website" />
    <Header></Header>
    <About></About>
    <Skills></Skills>
    <Work></Work>
    {/* <Promotion></Promotion> */}
    <Footer></Footer>
  </Layout>
);

export default IndexPage;
