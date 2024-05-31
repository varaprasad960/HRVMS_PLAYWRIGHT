import { Page, Locator } from '@playwright/test'
import ENV from '../../Utilities/env'
import * as TestData from '../../TestData/Contacts.json'
import { error } from 'console';

export default class SubmitleaveRequest {
    private readonly clkleaverqsts: Locator;
    private readonly clkonsubmitlvrqst: Locator;
    private readonly clkonselectlvtyp: Locator;
    private readonly frmdate: Locator;
    private readonly tdate: Locator;
    private readonly note: Locator;
    //private readonly applynow: Locator;
    private readonly alert : Locator;


    constructor(private page: Page) {
        this.page = page;
        this.clkleaverqsts = page.locator('//*[@id="isEmpAcc3"]/a');
        this.clkonsubmitlvrqst = page.locator("//a[text()='Submit Leave Request']");
        this.clkonselectlvtyp = page.locator("#LeaveType");
        this.frmdate = page.locator('#FromDate');
        this.tdate = page.locator('#ToDate');
        this.note = page.locator('#Note');

    }

    async clickOnSubmitlvrequest() {
        await this.clkleaverqsts.click();
        await this.clkonsubmitlvrqst.click();

    }

    async selectTypeAsCasual() {
        await this.clkonselectlvtyp.click();
        await this.clkonselectlvtyp.selectOption({ label: 'Casual Leave' });
        await this.page.waitForTimeout(3000);
    }

    async selectTypeAsSick(){
        await this.clkonselectlvtyp.click();
        await this.clkonselectlvtyp.selectOption({ label: 'Sick Leave' });
        await this.page.waitForTimeout(3000);

    }

//applying leaves on weekends
    async fillDetailsForN() {
        await this.frmdate.fill(TestData.fromdateN);
        await this.tdate.fill(TestData.todateN);
        await this.note.fill(TestData.notes);
        await this.page.evaluate(() => {
            window.scrollBy(0, -window.innerHeight); // Scrolls down by the height of the viewport
        });
    }

//applying sick leave after 10 days
    async fillDetailsForP() {
        await this.frmdate.fill(TestData.fromdateP);
        await this.tdate.fill(TestData.todateP);
        await this.note.fill(TestData.notes);
        await this.page.evaluate(() => {
            window.scrollBy(0, -window.innerHeight); // Scrolls down by the height of the viewport
        });
    }

    async clickOnApplyNow() {
        const ele = this.page.locator('#submit');       
        this.page.on("dialog", (dialog)=>{
            console.log(dialog.message());
            console.log(dialog.type());
            dialog.accept();
        })
        await ele.click();          

    }

    async validation(){
        const alertElement = this.page.locator("[class='alert alert-danger']");       
        // Wait for the alert element to be visible or present
        await alertElement.waitFor();      
        const alertTxt = await alertElement.textContent();
        console.log(alertTxt);
        //error handling
        const expectedTxt = "You can't apply leaves on weekends";
        if(alertTxt.includes(expectedTxt)){
            console.log("test has been passed");
        }else{
            throw new error("test failed! unexpected alert text");
        }    

    }
//applying personal leave
    async selectTypeAsPersonal(){
        await this.clkonselectlvtyp.click();
        await this.clkonselectlvtyp.selectOption({ label: 'Personal Leave' });
        await this.page.waitForTimeout(3000);

    }

    async validation2(){
        const alertElement1 = this.page.locator("[class='alert alert-danger']");       
        // Wait for the alert element to be visible or present
        await alertElement1.waitFor();      
        const alertTxt1 = await alertElement1.textContent();
        console.log(alertTxt1);

        const containtxt = 'Leave can be applied for last 10 days';

        if(alertTxt1.includes(containtxt)){
            throw new error('Leave can be applied for last 10 days');
        }else{
            console.log('your test has been passed');
        }
    }

}


