describe('React Cypress Tutorial', () => {
  it('home page loads', () => {
    cy.visit('http://127.0.0.1:3000')
  })

  it('finds the content "Edit..."', () => {
    cy.visit('http://127.0.0.1:3000')
    cy.contains('Learn React').click()
  })
})