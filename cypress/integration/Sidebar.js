describe("Tests for the Sidebar component", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
    cy.waitForReact();
  });

  it("sidebar should be visible", () => {
    cy.react("Sidebar").should("be.visible");
  });

  it("the open date range button should display Oct 1, 2014 - Feb 20, 2016 by default", () => {
    cy.get('[data-test-id="open-date-range-button"]').contains(
      "Oct 1, 2014 - Feb 20, 2016"
    );
  });

  it("the open date range button should display 'Jan 1, 2020' when you select the COVID-19 outbreak", () => {
    // 1. Within the Sidebar component, click on the outbreak select component.
    cy.react("Sidebar").within(() => {
      cy.react("Select", { props: { name: "outbreak" } })
        .eq(1)
        .click();
    });
    // 2. Click on the first option from the Outbreaks ul (COVID-19).
    cy.get(".MuiList-root").within(() => {
      cy.get("li").eq(1).click();
    });
    //  3. Check to see if the correct date is displayed.
    cy.get('[data-test-id="open-date-range-button"]').contains("Jan 1, 2020");
  });

  it("data buttons should have 'Cases', 'Projected Cases', and 'Risk' options by default", () => {
    cy.react("DataRadioButtons").contains("Cases");
    cy.react("DataRadioButtons").contains("Projected Cases");
    cy.react("DataRadioButtons").contains("Risk");
  });

  it("data buttons should have 'Cases' and 'Death' options when the COVID-19 outbreak is selected", () => {
    // 1. Within the Sidebar component, click on the outbreak select component.
    cy.react("Sidebar").within(() => {
      cy.react("Select", { props: { name: "outbreak" } })
        .eq(1)
        .click();
    });
    // 2. Click on the first option from the Outbreaks ul (COVID-19).
    cy.get(".MuiList-root").within(() => {
      cy.get("li").eq(1).click();
    });
    // .3 Check to see if the correct actions are displayed.
    cy.react("DataRadioButtons").contains("Cases");
    cy.react("DataRadioButtons").contains("Deaths");
    cy.react("DataRadioButtons").contains("Projected Deaths");
  });
});
