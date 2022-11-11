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
    getUnverified: `${server}/user/getAll`,
    verifyUser: `${server}/officer/changeStatus/approve`,
}

export default apiList;