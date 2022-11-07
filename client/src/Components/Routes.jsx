import React from 'react'
import Login from './Login/Login';
import Index from './Index';
import NoPage from './NoPage';
import ButtonAppBar from './Navbar/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Registeration from './Register/Register.jsx';
import DrivingSchool from './DrivingSchool';
<<<<<<< HEAD
import Licence from './Licence';
import SpecialNumber from './SpecialNumber/SpecialNumber';
=======
import LearningInfo from './Learninglicence/LearningInfo';
import SpecialNumber from './SpecialNumber';
import UserRegister from './Learninglicence/UserRegister';
import Uploaddoc from './Learninglicence/Uploaddoc';
import SlotAllocate from './Learninglicence/SlotAllocate';
import Receipt from './Learninglicence/Receipt';

>>>>>>> jay

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
                    <Route path="/learninglicence" element={<LearningInfo />} />
                    <Route path="/drivingschool" element={<DrivingSchool />} />
                    <Route path="/specialnumber" element={<SpecialNumber />} />
                    <Route path="/learninglicence/fillregisterdetails" element={<UserRegister/>}/>
                    <Route path="/learninglicence/uploaddoc" element={<Uploaddoc/>}/>
                    <Route path="/learninglicence/slottime" element={<SlotAllocate/>}/>
                    <Route path="/learninglicence/receipt" element={<Receipt/>}/>
                </Routes>
            </div>
        </>
    );
}

export default Home;