describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.get('h1').should('contain', 'Vite + React')
    cy.get('button').should('contain', 'count is 0')
    cy.get('button').click()
    cy.get('button').should('contain', 'count is 1')
    cy.get('.read-the-docs').should('contain', 'Click on the Vite and React logos to learn more')
  })
})