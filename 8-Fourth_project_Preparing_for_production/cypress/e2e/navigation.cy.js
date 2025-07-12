/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Navigation testing", () => {
  it("Clicking on the 'Card Set' in the side menu navigates to the page containing the card sets", () => {
    cy.visit("http://localhost:1234");
    cy.get("#cardSetPage").click();
    cy.get(".cardPageContainer").should("be.visible");
    cy.get('[data-cy="study-set-header"]').should(
      "contain",
      "Study Set Library"
    );
  });
});
