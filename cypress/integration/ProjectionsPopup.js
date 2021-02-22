describe("Tests for the projections popup modal", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
    cy.waitForReact();
  });
  it("modal contents should not be visible by default", () => {
    cy.contains("Show Additional Data").should("not.exist");
  });

  it("should display modal contents when clicking on 'Projected Cases'", () => {
    // 1. Click on Projected Cases radio buttons.
    cy.react("DataRadioButtons").within(() => {
      cy.contains("Projected Cases").click();
    });
    // 2. Modal title should now be visible.
    cy.contains("Show Additional Data").should("exist");
  });

  it("should close the modal when clicking on 'Cancel' button", () => {
    // 1. Click on Projected Cases radio button to open the modal.
    cy.react("DataRadioButtons").within(() => {
      cy.contains("Projected Cases").click();
    });
    // 2. Click on 'Cancel' button.
    cy.contains("Cancel").click();
    // 3. Modal title should no longer be visible.
    cy.contains("Show Additional Data").should("not.exist");
  });
});
