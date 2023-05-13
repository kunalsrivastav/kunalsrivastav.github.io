import React from 'react';
import AboutMe from './components/about/about-me';
import AdditionalTechnology from './components/additional-tech/additional-technology';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Introduction from './components/intro/intro';
import ProjectInfo from './components/projects/project';
import Technologies from './components/technology/technology';

const App = () => {
    return (
        <div className='portfolio-box'>
            <Header />
            <Introduction />
            <ProjectInfo />
            <Technologies />
            <AdditionalTechnology />
            <AboutMe />
            <Footer />
        </div>
    );
}

export default App;
