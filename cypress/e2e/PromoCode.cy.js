import { GetVeggie, GetVeggieIncrementer, GetVeggieDecrementer } from "../support/GetVeggies";

describe('US5:  Use Promo Codes/Coupons for an Order', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Invalid Promo Code', () => {
    GetVeggieIncrementer({ veggie: 1 }).click();

    GetVeggie({ veggie: 1}).find('.quantity')
      .should('have.value', '2');

    cy.get(':nth-child(1) > .product-action > button').click();

    GetVeggieIncrementer({ veggie: 6}).click();

    cy.get(':nth-child(6) > .product-action > button').click();

    GetVeggie({ veggie: 6 }).find('.quantity')
      .should('have.value', '2');
    
    cy.get('.cart-icon > img').click();

    cy.get('.cart-preview > .action-block > button').click();

    cy.get('.promoCode').type('PromoCode');
    cy.get('.promoBtn').click();
    cy.wait(1000);
    cy.get('.promoInfo').should('contain','Invalid code ..!');

  })
})
