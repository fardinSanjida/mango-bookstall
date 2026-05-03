import React from 'react';
import Header from '@/component/Header';
import Footer from '@/component/Footer';

const MainLayout = ({children}) => {
    return (
        <div className="min-h-screen">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
