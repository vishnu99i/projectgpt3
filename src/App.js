import React from 'react';

//Importing components
// import Article from "./components/article/Article.jsx";
// import Brand from "./components/brand/Brand.jsx";
// import CTA from "./components/cta/CTA.jsx";
// import Feature from "./components/feature/Feature.jsx";
// import Navbar from "./components/navbar/Navbar.jsx";
import { Brand,CTA,Navbar } from './components';
import { Blog,Features,Footer,Header,Possiblity,WhatGPT3} from "./containers";

import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possiblity />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App