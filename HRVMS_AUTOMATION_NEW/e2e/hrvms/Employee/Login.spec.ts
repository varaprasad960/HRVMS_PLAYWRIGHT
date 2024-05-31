import test, { expect } from '../../../Fixtures/BasePage'
import ENV from '../../../Utilities/env';
import * as Testdata from "../../../TestData/Contacts.json";

test.describe('Login Functionality @Employee', async () => {
        test.only('login functionality with valid credentials', async ({ page, loginpage }) => {

            await loginpage.gotoLoginPage();
            await loginpage.LoginMethod(ENV.USERNAME, ENV.PASSWORD);
            await page.waitForTimeout(3000);

        test('login functionality with involid cred', async({ page, loginpage })=>{
             await loginpage.gotoLoginPage();
             await loginpage.LoginMethod(ENV.USERNAME,ENV.PASSWORDN);
             await page.waitForTimeout(3000);
            })




     })
 })




//     test('login functionality with valid credentials', async ({ page, loginpage }) => {

//         await loginpage.gotoLoginPage();
//         await loginpage.LoginMethod(ENV.USERNAME, ENV.PASSWORD);
//         await page.waitForTimeout(3000);
//     })

//     test.only('login functionality with involid cred', async({page, loginpage})=>{
//         await loginpage.gotoLoginPage();
//         await loginpage.LoginMethod(ENV.USERNAME,ENV.PASSWORDN);
//         await page.waitForTimeout(3000);
//     })
// })