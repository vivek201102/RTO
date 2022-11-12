export const server = "http://localhost:5000/api";
export const serverlink = "http://localhost:5000/";


const apiList = {
    serverLink: `${serverlink}`,
    loginOfficer : `${server}/officer/login`,
    loginAgent : `${server}/agent/login`,
    registerOfficer: `${server}/officer/register`,
    registerAgent: `${server}/agent/register`,
    checkNumber: `${server}/vehicle/checkNo`,
    addNumber: `${server}/vehicle/addNumber`,
    registerUser:`${server}/user/register`,
    uploadDoc:`${server}/user/uploadDoc`,
    uploadDocAgent: `${server}/agent/uploadDoc`,
    getUnverified: `${server}/user/getAll`,
    verifyUser: `${server}/officer/changeStatus/approve`,
    rejectUser: `${server}/officer/changeStatus/reject`,
    authuser: `${server}/user/login`,
    bookSlot: `${server}/user/bookslot`,
<<<<<<< HEAD
    authdrive:`${server}/user/getDriving`
=======
    drivingApp: `${server}/agent/drivingschool`
>>>>>>> vivek
}

export default apiList;