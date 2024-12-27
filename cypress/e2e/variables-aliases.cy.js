// Documentacion: https://docs.cypress.io/guides/core-concepts/variables-and-aliases

describe('Variables y Aliases', () => {
    beforeEach(function() {
        // alias the users fixtures
        cy.fixture('example.json').as('exampleData')
      })
    it.skip('We can not assign or return values from cypress commands', function() {
        cy.visit('http://uitestingplayground.com/')
        const navLink = cy.get('.nav-link')
        navLink.click()
    })
    it.skip('Closures: We can return values from cypress commands', function() {
        cy.visit('http://uitestingplayground.com/')
        cy.get('.nav-link').then($element =>{
            //Closures enable us to keep references around to refer to work done in previous commands.
            cy.log($element[0].href)
            expect($element[0].href).to.be.equal('http://uitestingplayground.com/home')
        })
    })
    it.skip('Accessing variables from fixtures using this.* (we should avoid using this.*)', function() {
        //Sharing context is the simplest way to use aliases.
        // To alias something you'd like to share use the .as() command. Please check the beforeEach function.
        const data = this.exampleData
        cy.log(data)
        //Under the hood, aliasing basic objects and primitives utilizes Mocha's shared context object: that is, aliases are available as this.*.
        // Mocha automatically shares contexts for us across all applicable hooks for each test. Additionally these aliases and properties are automatically cleaned up
        // after each test.
    })
    it.skip('Accessing variables from fixtures using cy.get()', function() {
        //To access the alias we can use cy.get()
        //The cy.get() command is capable of accessing aliases with a special syntax using the @ character
        cy.get('@exampleData').then(data => {
            cy.log(data)
        })
    })
    it('Aliasing elements', function() {
        //To alias an element, we can use the .as() command.
        cy.visit('http://uitestingplayground.com/')
        cy.get('.nav-link').as('links')
        cy.get('@links').first().click()
    })

    //We can work with aliases with request and intercepts. Please check the documentation for more information.
})
