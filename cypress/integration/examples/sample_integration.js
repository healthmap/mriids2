describe("Tests for when the app is first loaded", () => {
  it("The snapshot map legend should have a title of 'Case counts'", () => {
    cy.visit("localhost:3000");
    cy.get('[data-test-id="snapshot-map-legend"]').within(() => {
      cy.contains("Case counts");
    });
  });
});
