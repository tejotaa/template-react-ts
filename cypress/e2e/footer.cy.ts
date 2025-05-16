describe('Footer actions', () => {
  it(' - bottom', () => {
    // links
    cy.visit('http://localhost:5173/');
    cy.findByText('Privacy').should('exist').click();
    cy.url().should('include', '/privacy');
    cy.findByText('Terms').should('exist').click();
    cy.url().should('include', '/terms');
    cy.findByText('Sitemap').should('exist').click();
    cy.url().should('include', '/sitemap');
    cy.findByTestId('CopyrightIcon').should('exist');
    cy.findByText('2025 Bakery').should('exist').click();
    cy.url().should('include', '/');
    // language selector
    cy.findByText('English').should('not.exist');
    cy.findByTestId('LanguageIcon').should('exist');
    cy.findByTestId('language').should('exist').click();
    cy.findByText('English').should('exist').click();
    cy.findByText('English').should('exist');
    // currency selector
    cy.findByText('USD').should('not.exist');
    cy.findByTestId('AttachMoneyIcon').should('exist');
    cy.findByTestId('currency').should('exist').click();
    cy.findByText('USD').should('exist').click();
    cy.findByText('USD').should('exist');
    // social icons
    cy.findByAltText('Facebook').should('exist');
    cy.findByTestId('social-icon-facebook').should('exist');
    cy.findByAltText('Twitter').should('exist');
    cy.findByTestId('social-icon-twitter').should('exist');
    cy.findByAltText('Instagram').should('exist');
    cy.findByTestId('social-icon-instagram').should('exist');
  });
});
