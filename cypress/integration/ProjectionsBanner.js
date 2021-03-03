describe("Tests for the projections banner", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
    cy.waitForReact();
    // Click on Projected Cases radio button.
    cy.react("DataRadioButtons").within(() => {
      cy.contains("Projected Cases").click();
    });
    // Click on 'Confirm' button.
    cy.contains("Confirm").click();
  });
  it("should be visible when 'Confirm' is clicked in Projections Popup", () => {
    // Projections banner should be visible.
    cy.contains("Some of the data on this site is for research only.").should(
      "exist"
    );
  });
  it("should still be visible when you select Cases", () => {
    // Click on Cases radio button.
    cy.react("DataRadioButtons").within(() => {
      cy.contains("Cases").click();
    });
    // Projections banner should be visible.
    cy.contains("Some of the data on this site is for research only.").should(
      "exist"
    );
  });
  it("should still be visible when you select Risk", () => {
    // Click on Cases radio button.
    cy.react("DataRadioButtons").within(() => {
      cy.contains("Risk").click();
    });
    // Projections banner should be visible.
    cy.contains("Some of the data on this site is for research only.").should(
      "exist"
    );
  });
});
