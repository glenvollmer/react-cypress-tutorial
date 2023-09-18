describe('Visiting the signup page', () => {
    it('home page loads', () => {
      cy.visit('/signup')
    })
  
    it('finds the content of the page', () => {
      cy.visit('/signup')
      cy.contains('Email')
      cy.contains('Password')
      cy.contains('Confirm Password')
      cy.contains('Signup')
    })
  })