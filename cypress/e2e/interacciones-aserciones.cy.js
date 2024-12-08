//let the code editor know that we are using cypress
/// <reference types="cypress" />

describe('Interacciones basicas con Cypress y aserciones', () => {

    it.only('Validar que la pagina se carga correctamente', () => {
        cy.visit('http://uitestingplayground.com/loaddelay')
        cy.title().should('eq', 'Load Delays')
    })
    it('Click en un elemento, esperar a que se muestre(aumentando el timeout de espera que por defecto es 4000ms ) y validar que se muestre', () => {
        cy.visit('http://uitestingplayground.com/clientdelay')
        cy.get('#ajaxButton').click()
        cy.get('.bg-success', {timeout: 20000}).should('be.visible')
    })
    it('Escribir en un input y validar que se muestre el texto en un boton', () => {
        cy.visit('http://uitestingplayground.com/textinput')
        cy.get('#newButtonName').type('Hola Mundo')
        cy.get('#updatingButton').click()
        cy.get('#updatingButton').should('have.text', 'Hola Mundo')
    })
    it('Validar texto de alertas', () => {
        cy.visit('http://uitestingplayground.com/alerts')
        cy.get('#alertButton').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Today is a working day.\nOr less likely a holiday.')
        })
    })
})