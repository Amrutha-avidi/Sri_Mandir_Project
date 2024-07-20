// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Create this component
import Puja from './components/Puja'; // Create this component
import PujaDetailsPage from './components/PujaDetailsPage'
import PoojaBookingPage from './components/PoojaBookingPage'
import EnterPoojaDetails from './components/EnterPoojaDetails'
import Layout from './Layout';

const App = () => {
    return (
        <Router>

            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/puja" element={<Puja />} />
                    <Route path="/puja/:id" element={<PujaDetailsPage />} />
                    <Route path="/pujaDetails/:pujaName/:pujaPrice" element={<PoojaBookingPage />} />
                    <Route path="/sankalp/:pujaHead/:pujaName/:pujaPrice" element={<EnterPoojaDetails />} />


                </Route>

            </Routes>

        </Router>
    );
};

export default App;