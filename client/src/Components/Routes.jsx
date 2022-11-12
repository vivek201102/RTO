import React from 'react'
import Login from './Login/Login';
import Index from './Index';
import NoPage from './NoPage';
import ButtonAppBar from './Navbar/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Registeration from './Register/Register.jsx';
import DrivingSchool from './DrivingSchool/DrivingSchool';

// import Licence from './Licence';
import SpecialNumber from './SpecialNumber/SpecialNumber';
import DrivingLogin from './DrivingSchool/Login';
import LearningInfo from './Learninglicence/LearningInfo';
import UserRegister from './Learninglicence/UserRegister';
import Uploaddoc from './Learninglicence/Uploaddoc';
import SlotAllocate from './Learninglicence/SlotAllocate';
import Receipt from './Learninglicence/Receipt';
import OfficerView from './Officer/OfficerView';
import Viewdetail from './Officer/Viewdetail';
import Drivinglicence from './Drivinglicence/Drivinglicence';
import Details from './DrivingSchool/Details';
import LLDetails from './Learninglicence/Login';
import ViewAgent from './Officer/ViewAgent';
import DSStatus from './DrivingSchool/Status';



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
                    <Route path="/learninglicence/info" element={<LearningInfo />} />

                    <Route path="/drivingschool/info" element={<DrivingSchool />} />
                    <Route path="/drivingschool/status" element={<DSStatus />} />
                    <Route path="/drivingschool" element={<DrivingLogin/>} />

                    <Route path="/drivingschool" element={<DrivingSchool />} />

                    <Route path="/specialnumber" element={<SpecialNumber />} />
                    <Route path="/learninglicence/fillregisterdetails" element={<UserRegister/>}/>
                    <Route path="/learninglicence/uploaddoc" element={<Uploaddoc/>}/>
                    <Route path="/learninglicence/slottime" element={<SlotAllocate/>}/>
                    <Route path="/learninglicence/receipt" element={<Receipt/>}/>
                    <Route path="/officerview" element={<OfficerView/>}/>
                    <Route path="/officerview/viewdetail" element={<Viewdetail/>}/>
                    <Route path="/officerview/viewAgentdetail" element={<ViewAgent/>}/>
                    <Route path="/drivinglicence" element={<Drivinglicence/>}/>
                    <Route path="/drivingschool/detail" element={<Details/>}/>
                    <Route path='/learninglicence/' element = {<LLDetails/> } />
                </Routes>
            </div>
        </>
    );
}

export default Home;