import Page from './page';
import GuestUser from './checkoutOptionPage';

fixture `Purchase like Guest User`
    .page `https://opencart.abstracta.us/`;

// Page model
const page = new Page();
const checkoutOption = new GuestUser();

// Tests
test('Choose product and shopping cart', async t => {
    await t
        .click(page.addProductItem)                             // Select product item
        .click(page.shoppingCartButton)                         // Select shopping cart
        .click(page.checkoutButton)                             // Click checkout button
});
test('Select guest user option', async t => {
    await t
        .click(checkoutOption.guetUserButton)                   // Select product item
});