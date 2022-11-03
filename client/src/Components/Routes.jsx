import React from 'react'
import Login from './Login/Login';
import Index from './Index';
import NoPage from './NoPage';
import ButtonAppBar from './Navbar/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Registeration from './Register/Register.jsx';
import DrivingSchool from './DrivingSchool';
import Licence from './Licence';
import SpecialNumber from './SpecialNumber';

function Home() {
    return (
        <>
            <ButtonAppBar />
            <div className='route'>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Registeration />} />
                    <Route path="*" element={<NoPage />} />
                    <Route path="/licence" element={<Licence />} />
                    <Route path="/drivingschool" element={<DrivingSchool />} />
                    <Route path="/specialnumber" element={<SpecialNumber />} />
                </Routes>
            </div>
        </>
    );
}

export default Home;