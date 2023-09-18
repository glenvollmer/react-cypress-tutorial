describe('Visiting the home page', () => {
  it('home page loads', () => {
    cy.visit('/')
  })

  it('finds the content of the page', () => {
    cy.visit('/')
    cy.contains('React Cypress Test')
    cy.contains('Signup')
    cy.contains('Login')
  })

  it('should contain a header tag', () => {
    cy.visit('/')
    cy.get('h1').should('contain', 'React Cypress Test')
  })

  it('should contain a signup link', () => {
    cy.visit('/')
    cy.get('a[href="/signup"]').should('contain', 'Signup')
  })

  it('should contain a login link', () => {
    cy.visit('/')
    cy.get('a[href="/login"]').should('contain', 'Login')
  })

})