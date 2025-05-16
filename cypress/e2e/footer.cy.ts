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
    cy.findByText('ENGLISH').should('not.exist');
    cy.findByTestId('LanguageIcon').should('exist');
    cy.findByTestId('language').should('exist').click();
    cy.findByText('ENGLISH').should('exist').click();
    cy.findByText('ENGLISH').should('be.visible');
    // currency selector
    cy.findByText('USD').should('not.exist');
    cy.findByTestId('AttachMoneyIcon').should('exist');
    cy.findByTestId('currency').should('exist').click();
    cy.findByText('USD').should('exist').click();
    cy.findByText('USD').should('be.visible');
    // social icons
    cy.findByTestId('social-icon-facebook').should('exist');
    cy.findByTestId('social-icon-twitter').should('exist');
    cy.findByTestId('social-icon-instagram').should('exist');
  });
});
