import { GetVeggie, GetVeggieIncrementer, GetVeggieDecrementer } from "../support/GetVeggies";

describe('US1: Add products in cart', () => {
  beforeEach(() => {
    cy.visit('/offers')
  })

  it('Select Columns for Sorting', () => {
    cy.get('[aria-label="Price: activate to sort column ascending"]').click();
    cy.get('[aria-label="Veg/fruit name: activate to sort column ascending"]').click();
    cy.get('[aria-label="Discount price: activate to sort column ascending"]').click();
    // cy.get('tbody > :nth-child(1) > :nth-child(2)').should('be.gt',cy.get('tbody > :nth-child(2) > :nth-child(2)'));
    cy.get('tbody > :nth-child(1) > :nth-child(2)')
    .invoke('text')
    .then((textVar1) => {
    // Convert the text to a float
    const var1 = parseFloat(textVar1,10);
    });

    cy.get('tbody > :nth-child(2) > :nth-child(2)')
    .invoke('text')
    .then((textVar2) => {
    // Convert the text to a float
    const var2 = parseFloat(textVar2,10);
    })

//     cy.should(()=>{
//         expect(textVar1).to.be.gt(textVar2)
//     });
    // cy.wrap(textVar1).should('be.gt',textVar2);
  })

})
