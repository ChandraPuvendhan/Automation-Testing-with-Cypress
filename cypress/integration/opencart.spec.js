describe('My first cypress test', () => {
    it('should load opencart webpage', function() {
        cy.visit('/')
        //Assertions
        cy.url().should('include', 'demo.opencart.com/')
        cy.title().should('eq', 'Your Store')
        //Static Wait
        //cy.wait(3000)
        //Pause until resume
        //cy.pause()
        //  cy.get('h1').contains('Your Store')
        //Aliases
        //cy.get('h1').as('title')
        //Using Xpath
        cy.xpath('//h1').as('title')
        cy.get('@title').contains('Your Store')
        cy.get('@title').should('be.visible')
    })
    it('should open another super domain', function() {
        cy.visit('https://dev.to/')
    })
})