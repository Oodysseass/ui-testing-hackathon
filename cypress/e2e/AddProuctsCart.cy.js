import { GetVeggie, GetVeggieIncrementer, GetVeggieDecrementer } from "../support/GetVeggies";
import { GetCartItem } from "../support/Cart";

describe('US1: Add products in cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Select Products', () => {
    GetVeggieIncrementer({ veggie: 1 }).click()

    GetVeggieIncrementer({ veggie: 1 }).click()

    GetVeggie({ veggie: 1 }).find('.quantity')
      .should('have.value', '3');

    GetVeggieIncrementer({ veggie: 6}).click();

    GetVeggie({ veggie: 6 }).find('.quantity')
      .should('have.value', '2');

    GetVeggieDecrementer({ veggie: 1 }).click();

    GetVeggie({ veggie: 1 }).find('.quantity')
      .should('have.value', '2');
  })

  it('Add products to cart', () => {
    const firstKilos = 3
    const firstTimes = 3

    for (let i = 0; i < firstKilos - 1; i++)
      GetVeggieIncrementer({ veggie: 1 }).click()

    for (let i = 0; i < firstTimes; i++) {
      GetVeggie({ veggie: 1 }).find('button', 'ADD TO CART').click()
      cy.wait(1000)
    }

    const secondKilos = 10
    const secondTimes = 2

    for (let i = 0; i < secondKilos - 1; i++)
      GetVeggieIncrementer({ veggie: 6 }).click()

    for (let i = 0; i < secondTimes; i++) {
      GetVeggie({ veggie: 6 }).find('button', 'ADD TO CART').click()
      cy.wait(1000)
    }

    cy.get('.cart-icon').click()
    GetCartItem({ order: 0 }).should('have.text', `${firstKilos * firstTimes} Nos.`)

    GetCartItem({ order: 1 }).should('have.text', `${secondKilos * secondTimes} Nos.`)
  })

  it('Check price of cart', () => {
    GetVeggieIncrementer({ veggie: 1 }).click()
    GetVeggieIncrementer({ veggie: 1 }).click()
    GetVeggieIncrementer({ veggie: 6}).click()
    GetVeggieIncrementer({ veggie: 6}).click()

    GetVeggie({ veggie: 1 }).find('button', 'ADD TO CART').click()
    GetVeggie({ veggie: 6 }).find('button', 'ADD TO CART').click()
    GetVeggie({ veggie: 1 }).find('button', 'ADD TO CART').click()

    cy.get('.cart-info > table > tbody > :nth-child(2) > :nth-child(3) > strong').should('have.text', '768')
  })
})
