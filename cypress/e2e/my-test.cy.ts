/// <reference types="cypress" />


describe('cypress demo', () => {

  // afterEach((currentTest) => {
  //   if (currentTest.state === 'failed') {
  //     cy.screenshot(`${currentTest.title}--failed`); 
  //   }
  // })

  it('verifies home page elements', () => {
    
    // cy.visit('http://localhost:3000/');
    cy.visit('/')

    cy.get('[data-testid="my-title"]')
      .should('exist')
      .should('have.text', 'Demo Cypress');

    cy.get('[data-testid="my-logo"]')
      .should('be.visible');
  });

  it('clicks on button', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="my-button"]')
      .should('exist')
      .click();
      
      cy.window().then((win) => {
        const consoleLogs = win.console.log;        
        const logString = consoleLogs.toString();
        console.log('cy.log() ' + logString);

        // expect(win.console.log).to.be.calledWith('You clicked the button');
      });
  });  

  it('captures browser console logs', () => {
    cy.visit('http://localhost:3000/');
    
  });
})