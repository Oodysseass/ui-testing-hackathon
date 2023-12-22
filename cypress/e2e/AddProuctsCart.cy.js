import { GetVeggie, GetVeggieIncrementer, GetVeggieDecrementer } from "../support/GetVeggies";

describe('US1: Add products in cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Select Products', () => {
    GetVeggieIncrementer({ veggie: "Brocolli" }).click()

    GetVeggieIncrementer({ veggie: "Brocolli" }).click()

    GetVeggie({ veggie: "Brocolli" }).find('.quantity')
      .should('have.value', '3');

    GetVeggieIncrementer({ veggie: "Tomato" }).click();

    GetVeggie({ veggie: "Tomato" }).find('.quantity')
      .should('have.value', '2');

    GetVeggieDecrementer({ veggie: "Brocolli" }).click();

    GetVeggie({ veggie: "Brocolli" }).find('.quantity')
      .should('have.value', '2');
  })
})
