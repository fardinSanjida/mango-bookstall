import React from 'react';
import Header from '@/component/Header';
import Navber from '@/component/Navber';

const MainLayout
 = ({children}) => {
    return (
        <div>
            <Header />
       <Navber /> 
            {children}  
        </div>
    );
};

export default MainLayout;
