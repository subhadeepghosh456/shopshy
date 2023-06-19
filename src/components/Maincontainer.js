import React from 'react';
import Head from './Head';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Maincontainer = () => {
    return (
        <div>
            <Head />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Maincontainer;
