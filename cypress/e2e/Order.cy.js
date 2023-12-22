import { GetVeggie, GetVeggieIncrementer } from "../support/GetVeggies";

describe('US2: Complete Order', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Add products and finish order', () => {
    GetVeggieIncrementer({ veggie: 1 }).click()
    GetVeggie({ veggie: 1 }).find('button', 'ADD TO CART').click()

    cy.get('.cart-icon').click()
    cy.get('.action-block').eq(0).find('button', 'PROCEED TO CHECKOUT').click()
    cy.contains('button', 'Place Order')

    cy.get('div > button').eq(1).click()
    cy.contains('label', 'Choose Country')

    cy.get('select').select("Afghanistan")
    cy.get('input[type=checkbox]').click()

    cy.get('.wrapperTwo').find('button', 'Proceed').click()
    cy.wait(7000)
    // check that returns to home
  })
})