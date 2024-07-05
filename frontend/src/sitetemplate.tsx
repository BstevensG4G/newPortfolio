import { Outlet } from 'react-router-dom' 

import Navbar from './components/navbar'
import Header from './components/header';
import './index.css'
import Footer from './components/footer';

export interface ISiteTemplateProps {}

const SiteTemplate: React.FunctionComponent<ISiteTemplateProps> = () => {

    return (
        <div>
            <Header />
            <Navbar />
            <main><Outlet /></main>
            <Footer />

        </div>
    );
};

export default SiteTemplate