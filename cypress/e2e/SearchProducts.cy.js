import { GetVeggie, GetVeggieIncrementer, GetVeggieDecrementer } from "../support/GetVeggies";

describe('US3: Search for Products', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Search Products', () => {
    //test case id 10
    cy.get('.search-keyword').type('Brocolli')
    cy.get('.product > .product-name').should('have.text','Brocolli - 1 Kg')

  })
})
