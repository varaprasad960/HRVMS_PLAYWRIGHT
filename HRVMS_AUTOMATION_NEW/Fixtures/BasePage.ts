import {test as BaseTest} from '@playwright/test'
import LoginPage from '../Pages/EmployeePages/Loginpage'
import createTimesheets from '../Pages/EmployeePages/CreateTimesheets'
import SubmitleaveRequest from '../Pages/EmployeePages/SubmitLeaveRequest'

const test = BaseTest.extend<{
    loginpage : LoginPage
    createtimesheets : createTimesheets
    submitlvrequest   : SubmitleaveRequest

}>

({
    loginpage : async({page}, use)=>{
        await use (new LoginPage(page))
},

createtimesheets : async({page}, use)=>{
    await use (new createTimesheets(page))
},

submitlvrequest : async({page}, use)=>{
    await use (new SubmitleaveRequest(page))
}




})

export default test;
export  const expect = test.expect;