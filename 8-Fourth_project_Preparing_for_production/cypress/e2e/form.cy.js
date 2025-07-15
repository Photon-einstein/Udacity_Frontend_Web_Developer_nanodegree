/* eslint-disable no-undef */
//<reference types="cypress" />;

describe("Set form functionality testing", () => {
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
    cy.get(".cardSets").then(($sets) => {
      const initialSetCount = $sets.length;
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

describe("Set card functionality testing", () => {
  const baseUrl = "http://localhost:1234";

  beforeEach(() => {
    cy.visit(baseUrl);
    cy.get("#cardSetPage").click();
    cy.get(".cardPageContainer").should("be.visible");
    cy.get(".setContainer").should("be.visible");
    cy.get('[data-cy="toggle_form"]').click();
    cy.get("#titleInput").should("be.visible");
    cy.get('[data-cy="study-set-header"]').should(
      "contain",
      "Study Set Library"
    );
  });

  it("Tests to create card form, happy path", () => {
    const newCardTerm = "<ul>";
    const newCardDescription = "unordered list in html";

    cy.get('[data-cy="1"]').then(($cards) => {
      const initialCardsCount = $cards.length;
      cy.get('[data-cy="1"]').click();
      cy.log(`Initial cards size: ${initialCardsCount}`);
      cy.get(".term p").should("contain", "HTML");
      cy.get('[data-cy="toggle_form"]').click();
      cy.get("#termInput").type(newCardTerm);
      cy.get("#descriptionInput").type(newCardDescription);
      cy.get('[type="submit"]').click();
      cy.get("p.error").should("not.exist");
      cy.get(".term").should("contain", newCardTerm);
      cy.get(".description").should("contain", newCardDescription);
    });
  });

  it("Tests to create card form, unhappy path", () => {
    cy.get('[data-cy="1"]').then(($cards) => {
      const initialCardsCount = $cards.length;
      cy.get('[data-cy="1"]').click();
      cy.log(`Initial cards size: ${initialCardsCount}`);
      cy.get(".term p").should("contain", "HTML");
      cy.get('[data-cy="toggle_form"]').click();
      cy.get('[type="submit"]').click();
      cy.get("p.error").should(
        "contain",
        "TERM AND DESCRIPTION CANNOT BE EMPTY"
      );
    });
  });
});
