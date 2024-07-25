
import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { AuthProvider } from './Context/loginContext';
import { AuthContext } from './Context/loginContext';


const Layout = () => {
    const  currentUser  = useContext(AuthContext)

    // const { currentUser } = useAuth();
    console.log(currentUser)
    return (
        <AuthProvider>
            <Header />
            <main>
                <Outlet />


            </main>




        </AuthProvider>
    );
};

export default Layout;
