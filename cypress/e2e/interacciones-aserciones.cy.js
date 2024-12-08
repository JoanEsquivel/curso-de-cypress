describe('Interacciones basicas con Cypress y aserciones', () => {
    beforeEach(() => {
        cy.visit('http://uitestingplayground.com/clientdelay')
    })
    it('Click en un elemento, esperar a que se muestre(aumentando el timeout de espera que por defecto es 4000ms) y validar que se muestre', () => {
        cy.get('#ajaxButton').click()
        cy.get('.bg-success', {timeout: 20000}).should('be.visible')
    })
})