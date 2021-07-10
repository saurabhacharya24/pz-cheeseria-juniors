/// <reference types="cypress" />

context('Cart Actions', () => {
  beforeEach(() => {
    cy.visit('/');
    // Ideally, before running the tests purchases.json should be empty
    // This can be done by adding a task inside plugins/ and adding some helper functions to 'empty' purchases.json
    // In this case, we have to manually clear purchases.json after each test
  })

  it('Add items to cart', () => {

    cy.get('[data-cy=add-to-cart-2]').click();
    cy.get('[data-cy=add-to-cart-3]').click();

    cy.get('[data-cy=badge-count]').should('have.text', '2');

  })

  it('Purchase items in the cart', () => {

    cy.get('[data-cy=add-to-cart-2]').click();
    cy.get('[data-cy=add-to-cart-3]').click();

    cy.get('[data-cy=open-cart]').click();

    cy.get('[data-cy=cart]').should('not.contain.text', 'No items in cart.');
    
    const buyBtn = cy.get('[data-cy=buy-btn]');
    buyBtn.should('be.visible');
    buyBtn.should('have.text', 'Buy');
    buyBtn.click();

    cy.get('[data-cy=cart]').should('not.be.visible');
  
    // Waiting for db to populate so that up-to-date data is retrieved
    cy.wait(500);
  
    cy.get('[data-cy=open-purchases]').click();

    const purchasesDrawer = cy.get('[data-cy=purchases]');
    purchasesDrawer.should('be.visible');
  
    purchasesDrawer.should('contain.text', 'Your Recent Purchases');
    purchasesDrawer.should('not.contain.text', 'No recent purchases.');
    purchasesDrawer.should('contain.text', 'ABBAYE DU MONT DES CATS');
    purchasesDrawer.should('contain.text', 'ADELOST');
    purchasesDrawer.should('contain.text', 'Total: $29.21');
    purchasesDrawer.should('contain.text', 'Total: $367.55');
    purchasesDrawer.should('contain.html', '<h3>Total: $396.76</h3>');

  })

})
