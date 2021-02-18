describe("Tests for the Sidebar component", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });
  it("sidebar should be visible", () => {
    cy.get('[data-test-id="sidebar"]').should("be.visible");
  });
  it("the open date range button should display Oct 1, 2014 - Feb 20, 2016 by default", () => {
    cy.get('[data-test-id="open-date-range-button"]').contains(
      "Oct 1, 2014 - Feb 20, 2016"
    );
  });
});
