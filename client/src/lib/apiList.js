export const server = "http://localhost:5000/api";


const apiList = {
    loginOfficer : `${server}/officer/login`,
    loginAgent : `${server}/agent/login`,
    registerOfficer: `${server}/officer/register`,
    registerAgent: `${server}/agent/register`,
<<<<<<< HEAD
    checkNumber: `${server}/vehicle/checkNo`,
    addNumber: `${server}/vehicle/addNumber`,
=======
    registerUser:`${server}/user/register`,
>>>>>>> jay
}

export default apiList;