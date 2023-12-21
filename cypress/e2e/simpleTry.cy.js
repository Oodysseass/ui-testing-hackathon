describe('Visit site and click some buttons', () => {
  before(() => {
    cy.visit('/')
  })

  it('Add vegetable', () => {
    cy.contains('.product-name', 'Brocolli - 1 Kg')
      .parent('.product')
      .find('.increment')
      .click();

    cy.contains('.product-name', 'Brocolli - 1 Kg')
      .parent('.product')
      .find('.quantity')
      .should('have.value', '2');
  })
})
