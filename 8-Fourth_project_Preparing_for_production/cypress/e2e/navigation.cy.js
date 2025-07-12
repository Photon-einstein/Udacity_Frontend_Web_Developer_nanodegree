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

  it("Clicking on the 'About' in the side menu navigates to the about page", () => {
    cy.visit("http://localhost:1234");
    cy.get("#aboutPage").click();
    cy.get(".aboutContainer").should("be.visible");
    cy.get('[data-cy="about_page"]').should("contain", "About Study Night");
  });

  it("Clicking on the 'Home' in the side menu navigates to the home page", () => {
    cy.visit("http://localhost:1234");
    cy.get("#homePage").click();
    cy.get(".homeContainer").should("be.visible");
    cy.get('[data-cy="home_header"]').should("contain", "Study Night");
  });
});
