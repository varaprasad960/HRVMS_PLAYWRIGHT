import { Page, Locator } from '@playwright/test'
import ENV from '../../Utilities/env';
import * as testData from '../../TestData/Contacts.json'


export default class LoginPage {
    readonly page: Page;
    readonly username_textbox: Locator;
    readonly password_textbox: Locator;
    readonly login_button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username_textbox = page.locator("#LoginUser")
        this.password_textbox = page.locator("#password-field");
        this.login_button = page.locator("#Login");

    }
    public async gotoLoginPage() {

        await this.page.goto(ENV.BASE_URL);
    }
    public async LoginMethod(username : string, password : string){
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }

}
