import test, {expect} from '../../../Fixtures/BasePage';
import ENV from '../../../Utilities/env';
import * as Testdata from "../../../TestData/Contacts.json";

// Day wise
test.describe('timesheet functionality @Employee', async ()=>{
    test('create timesheet daywise', async ({page, loginpage,createtimesheets})=>{
        await loginpage.gotoLoginPage();
        await loginpage.LoginMethod(ENV.USERNAME,ENV.PASSWORD);
        await createtimesheets.clickOnTimesheets();
        await createtimesheets.fillDatesInDaywise();
        await createtimesheets.fillTimesheetDetails();
        await createtimesheets.scrollAndSubmit();

    })

    // Summery wise
    test('create timesheet summery wise', async ({page, loginpage, createtimesheets})=>{
        await loginpage.gotoLoginPage();
        await loginpage.LoginMethod(ENV.USERNAME,ENV.PASSWORD);
        await createtimesheets.clickOnTimesheets();
        await createtimesheets.fillDatesInSummeryWise();
        await createtimesheets.fillTimesheetDetails();
        await createtimesheets.scrollAndSubmitSummeryWise();
        

        try {
            await expect(page.getByText('Time sheet has been Created Successfully.')).toBeVisible({ timeout: 1000 });
            console.log("successfully added"); // Print true if the success message is visible
          } catch (error) {
            console.error('Success message not found or not visible in time');
            throw error();
          }

    })

    


})
