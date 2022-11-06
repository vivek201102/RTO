export const server = "http://localhost:5000/api";


const apiList = {
    loginOfficer : `${server}/officer/login`,
    loginAgent : `${server}/agent/login`,
    registerOfficer: `${server}/officer/register`,
    registerAgent: `${server}/agent/register`,
    checkNumber: `${server}/vehicle/checkNo`,
    addNumber: `${server}/vehicle/addNumber`,
}

export default apiList;