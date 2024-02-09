import { Selector } from 'testcafe';

export default class Page {
    constructor () {
        this.addProductItem        = Selector('#content > div.row > div:nth-child(1) > div > div.button-group > button:nth-child(1)');
        this.shoppingCartButton    = Selector('#common-home > div.alert.alert-success.alert-dismissible > a:nth-child(3)')
        this.checkoutButton        = Selector('#content > div.buttons.clearfix > div.pull-right > a')
    }
}