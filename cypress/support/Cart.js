export const GetCartItem = ({ order }) => {
    return cy.get('.cart-items > .cart-item > .product-total > .quantity')
      .eq(order)
}