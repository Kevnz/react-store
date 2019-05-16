// https://docs.cypress.io/api/introduction/api.html

describe('The Home Page', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.wait(4000)
    cy.contains('h1', 'React Store')
  })
})
