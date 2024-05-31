import { Page, Locator } from '@playwright/test'
import ENV from '../../Utilities/env';
import * as TestData from '../../TestData/Contacts.json'


export default class createTimesheets{

    readonly clickontmsheets : Locator;
     readonly clkcreatetmsheet : Locator;
    private readonly clkdaywise : Locator ;
    private readonly frmdate : Locator;
    private readonly tdate : Locator;
    private readonly proceed : Locator;
    private readonly worklctn : Locator;
    private readonly clnmngr : Locator ;
    private readonly cstmngr : Locator ;
    private readonly prjnme : Locator ;
    private readonly workhrs : Locator;
    private readonly addtolst : Locator ;
    private readonly clknext : Locator;
    private readonly clkonsmmry : Locator;



    constructor(private page: Page){
        this.page = page;
        this.clickontmsheets = page.locator("//a[@aria-controls='collapseTwo']");
        this.clkcreatetmsheet = page.locator("#isEmpMode200");
        this.clkdaywise = page.locator("#DailyWise");
        this.frmdate = page.locator("//input[@name='PeriodFrom']");
        this.tdate = page.locator("//input[@name='PeriodTo']");
        this.proceed = page.locator("#proceed");
        this.worklctn = page.locator("#worklocation");
        this.clnmngr = page.locator("//input[@name='ClientManager']");
        this.cstmngr = page.locator("//input[@name='CSTManager']");
        this.prjnme = page.locator("//input[@name='ProjectName']");
        this.workhrs = page.locator("#workhours");
        this.addtolst = page.locator("#btnAdd");
        this.clknext = page.locator("#btnNext");
        this.clkonsmmry = page.locator('#Summary');
    }

    async clickOnTimesheets(){
        await this.clickontmsheets.click();
        await this.clkcreatetmsheet.click();

}

async fillDatesInDaywise(){
    await this.clkdaywise.click();
    await this.frmdate.fill(TestData.fromdateN);
    await this.tdate.fill(TestData.todateN);
    await this.proceed.click();

}

async fillTimesheetDetails(){
    await this.worklctn.fill(TestData.worklocation);
    await this.clnmngr.fill(TestData.clientmanager);
    await this.cstmngr.fill(TestData.cstmanager);
    await this.prjnme.fill(TestData.projectname);
    await this.workhrs.fill(TestData.workhours);

}

async scrollAndSubmit(){
    await this.page.evaluate(() => {
        window.scrollBy(200, window.innerHeight); // Scrolls down by the height of the viewport
    });
    await this.addtolst.click();
    await this.clknext.click();

}

async fillDatesInSummeryWise(){
    await this.clkonsmmry.click();
    await this.frmdate.fill(TestData.fromdateS);
    await this.tdate.fill(TestData.todateS);
}

async scrollAndSubmitSummeryWise(){
    await this.page.evaluate(() => {
        window.scrollBy(200, window.innerHeight); // Scrolls down by the height of the viewport
    });
    await this.addtolst.click();
    
}








}