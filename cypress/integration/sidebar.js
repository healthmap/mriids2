describe("Tests for the Sidebar component", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });
  it("sidebar should be visible", () => {
    cy.get('[data-test-id="sidebar"]').should("be.visible");
  });
});
