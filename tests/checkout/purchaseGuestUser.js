import Page from './page';

fixture `Purchase like Guest User`
    .page `https://opencart.abstracta.us/`;

// Page model
const page = new Page();

// Tests
test('Choose product and shopping cart', async t => {
    await t
        .click(page.addProductItem)                             // Select product item
        .click(page.shoppingCartButton)                         // Select shopping cart
});