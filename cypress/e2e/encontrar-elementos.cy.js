describe('Encontrar elementos con Cypress', () => {
    beforeEach(() => {
        cy.visit('http://uitestingplayground.com/classattr')
    })
    it('Buscar un elemento por su id', () => {
       cy.get('#navbarSupportedContent')
    })
    it('Buscar un elemento por su clase', () => {
        cy.get('.class1')
        cy.get('.class2')
        cy.get('.class3')
    })
    it('Buscar un elemento por su etiqueta', () => {
        // Este selector va a buscar todos los botones de la pagina
        cy.get('button')
    })
    it('Buscar un elemento por su atributo', () => {
        cy.get('[type="button"]')
    })
    it('Buscar un elemento con "contains"', () => {
        cy.contains('Home')
        // Tambien podemos ignorar el case sensitive
        cy.contains('hOME', { matchCase: false })
    })
    it('Buscar un elemento y seleccionar el primero', () => {
        cy.viewport(400, 400)
        cy.get('button').first()
    })
    it('Buscar un elemento y seleccionar el ultimo', () => {
        cy.get('button').last()
    })
    it('Buscar un elemento por su "indice"',()=>{
        cy.get('button').eq(1)
        cy.get('button').eq(2)
        cy.get('button').eq(3)
    })
    // Otros metodos para encontrar elementos   
    // .filter()
    // .find()
    // .children()
    // .parent()
})