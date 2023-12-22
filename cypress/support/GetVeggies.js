export const GetVeggie = ({ veggie }) => {
    return cy.get(`.products > :nth-child(${veggie})`)
}

export const GetVeggieIncrementer = ({ veggie }) => {
    return GetVeggie({ veggie }).find('.increment')
}

export const GetVeggieDecrementer = ({ veggie }) => {
    return GetVeggie({ veggie }).find('.decrement')
}

