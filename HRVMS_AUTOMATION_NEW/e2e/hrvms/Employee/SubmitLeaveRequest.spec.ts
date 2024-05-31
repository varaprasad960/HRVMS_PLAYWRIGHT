import test, {expect} from '../../../Fixtures/BasePage';
import ENV from '../../../Utilities/env';
import * as Testdata from "../../../TestData/Contacts.json";

test.describe('submit leave request @Employee', async ()=>{
    test('submit casual leave request', async ({page, loginpage, submitlvrequest})=>{
        await loginpage.gotoLoginPage();
        await loginpage.LoginMethod(ENV.USERNAME,ENV.PASSWORD);
        await submitlvrequest.clickOnSubmitlvrequest();
        await submitlvrequest.selectTypeAsCasual();
        await submitlvrequest.fillDetailsForN();
        await submitlvrequest.clickOnApplyNow();
        await submitlvrequest.validation()

    })

    test('validate submit sick leave request after 10 days', async ({page, loginpage, submitlvrequest})=>{
        await loginpage.gotoLoginPage();
        await loginpage.LoginMethod(ENV.USERNAME,ENV.PASSWORD);
        await submitlvrequest.clickOnSubmitlvrequest();
        await submitlvrequest.selectTypeAsSick();
        await submitlvrequest.fillDetailsForP();
        await submitlvrequest.clickOnApplyNow();
    })

    test('validate personal leave requst', async ({page, loginpage, submitlvrequest})=>{

        await loginpage.gotoLoginPage();
        await loginpage.LoginMethod(ENV.USERNAME,ENV.PASSWORD);
        await submitlvrequest.clickOnSubmitlvrequest();
        await submitlvrequest.selectTypeAsPersonal();
        await submitlvrequest.fillDetailsForP();
        await submitlvrequest.clickOnApplyNow();
        await submitlvrequest.validation2();
        


    })




})




