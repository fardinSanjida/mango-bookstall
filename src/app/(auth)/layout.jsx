import Header from '@/component/Header';
import React from 'react';

const AuthLayout = ({children}) => {
    return (
        <div className="min-h-screen bg-[#fffaf3]">
            <Header />
            {children}
        </div>
    );
};

export default AuthLayout;
