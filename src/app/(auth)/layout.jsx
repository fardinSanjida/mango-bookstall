import Navber from '@/component/Navber';
import React from 'react';

const AuthLayout = ({children}) => {
    return (
        <div>
        <Navber />
        {children}
            
        </div>
    );
};

export default AuthLayout;