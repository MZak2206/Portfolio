/// <reference types="cypress" />

describe('newsletter-wrong-email', () => {
  it('passes', () => {
    cy.visit('https://www.mlodysenior.pl/')

    cy.get('a.buy-button')
    .eq(0)
    .scrollIntoView()
    .click();
    cy.wait(500);
    cy.get('.email-input')
    .type("123");
    cy.get('.backorder-content > button')
    .click();
    cy.get(".error")
    .should("contain","Podany mail jest nieprawidłowy")

  })
})



describe('newsletter', () => {
  it('passes', () => {
    cy.visit('https://www.mlodysenior.pl/')

    cy.get('a.buy-button')
    .eq(0)
    .scrollIntoView()
    .click();
    cy.wait(500);
    cy.get('.email-input')
    .type("test@interia.pl");
    cy.get('.backorder-content > button')
    .click();
    cy.url()
    .should("include","/dzieki-backorder")

  })
})

describe('newsletter-wrong-email', () => {
  it('passes', () => {
    cy.visit('https://www.mlodysenior.pl/')

    cy.get('a.buy-button')
    .eq(0)
    .scrollIntoView()
    .click();
    cy.wait(500);
    cy.get('.email-input')
    .type("testqa1@interia.pl");
    cy.get('.backorder-content > button')
    .click();
    cy.wait(100)
    cy.get(".error")
    .should("contain","Coś poszło nie tak... Wygląda na to, że zostałeś już zapisany lub podałeś złego maila. :)")

  })
})