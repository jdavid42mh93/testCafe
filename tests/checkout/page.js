import { Selector } from 'testcafe';

export default class Page {
    constructor () {
        this.addProductItem        = Selector('//*[@id="content"]/div[2]/div[1]/div/div[3]/button[1]');
        this.shoppingCartButton    = Selector('//*[contains(text(),"shopping cart")]')
    }
}