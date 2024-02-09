import { Selector } from 'testcafe';

export default class GuestUser {
    constructor () {
        this.guetUserButton        = Selector('#collapse-checkout-option > div > div > div:nth-child(1) > div:nth-child(4) > label');
    }
}