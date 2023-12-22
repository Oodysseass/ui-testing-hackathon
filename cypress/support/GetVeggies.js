export const GetVeggie = ({ veggie }) => {
    return cy.contains('.product-name', `${veggie} - 1 Kg`)
        .parent('.product')
}

export const GetVeggieIncrementer = ({ veggie }) => {
    return cy.contains('.product-name', `${veggie} - 1 Kg`)
        .parent('.product')
        .find('.increment')
}

export const GetVeggieDecrementer = ({ veggie }) => {
    return cy.contains('.product-name', `${veggie} - 1 Kg`)
        .parent('.product')
        .find('.decrement')
}

