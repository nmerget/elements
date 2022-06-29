context('db-cards', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-cards-intro--page&viewMode=story');
  });

  it('card-list contains 4 cards', function () {
    cy.get('db-cards').get('db-card').should('have.length', 4);
  });
});
