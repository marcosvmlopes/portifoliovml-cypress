// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
Cypress.Commands.add('login', () => {
    var email = 'marcos.vmlopes@proton.me'
    var password = 'Port@123'
    cy.session([email, password], () => {
        cy.visit('/')
        cy.get('#email').type(email)
        cy.get('#next').click()
        cy.get('#password').type(password)
        cy.get('#signin').click()
        cy.get('span a[target="_blank"]').click()
    })
})
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })