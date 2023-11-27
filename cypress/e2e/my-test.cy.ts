/// <reference types="cypress" />

describe('cypress demo', () => {
  it('renders the necessary elements on the screen', () => {
    // cy.visit('https://example.cypress.io')
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid="my-title"]')
      .should('exist')
      .should('have.text', 'Demo Cypress');

    cy.get('[data-testid="my-logo"]')
      .should('exist');
  });

  it('captures browser console logs', () => {
    cy.visit('http://localhost:3000/');
    // cy.getConsole().should('contain', 'Button Clicked');
  })
})