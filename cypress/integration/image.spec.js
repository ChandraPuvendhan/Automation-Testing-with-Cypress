describe('My first visual regression test', () => {
    before(function() {
        cy.visit('https://example.com')    
    })
    it('should make page snapshot', function() {
        cy.matchImageSnapshot()
    })
})