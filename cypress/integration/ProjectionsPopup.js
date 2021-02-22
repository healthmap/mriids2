describe("Tests for the projections popup modal", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
    cy.waitForReact();
  });
  it("should not be visible by default", () => {
    cy.contains("Show Additional Data").should("not.exist");
  });
  it("should display modal contents when clicking on 'Projected Cases'", () => {
    // 1. Click on Projected Cases radio buttons (second radio button).
    cy.react("DataRadioButtons").within(() => {
      cy.get(".MuiFormControlLabel-root").eq(1).click();
    });
    // 2. Modal title should now be visible.
    cy.contains("Show Additional Data").should("exist");
  });
});
