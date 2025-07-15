/* eslint-disable no-undef */
// <reference types="cypress" />;

describe("Form functionality testing", () => {
  const baseUrl = "http://localhost:1234";

  beforeEach(() => {
    cy.visit(baseUrl);
    cy.get("#cardSetPage").click();
    cy.get(".cardPageContainer").should("be.visible");
    cy.get('[data-cy="study-set-header"]').should(
      "contain",
      "Study Set Library"
    );
    cy.get('[data-cy="toggle_form"]').click();
    cy.get("#titleInput").should("be.visible");
  });

  it("Tests to create set form, happy path", () => {
    const newSetName = "New set name";
    let initialSetCount;
    cy.get(".cardSets").then(($sets) => {
      initialSetCount = $sets.length;
      cy.get("#titleInput").type(newSetName);
      cy.get('[type="submit"]').click();
      cy.get("#titleInput").should("not.be.visible");
      cy.get(".cardSets")
        .should("have.length", initialSetCount + 1)
        .last()
        .should("contain", newSetName);
    });
  });

  it("Tests to create set form, unhappy path", () => {
    let initialSetCount;
    cy.get(".cardSets").then(($sets) => {
      initialSetCount = $sets.length;
      cy.get('[type="submit"]').click();
      cy.get("p.error")
        .should("be.visible")
        .should("contain", "TITLE CANNOT BE EMPTY");
      cy.get(".cardSets").should("have.length", initialSetCount);
    });
  });
});
