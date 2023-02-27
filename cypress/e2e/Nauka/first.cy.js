describe('empty spec', () => {
  it('home page', () => {
    cy.visit("https://demoqa.com/")

      cy.contains("h5", 'Elements').click();
      cy.get("li").parents(".menu-list").find("li").eq(0).click();
      cy.get("#userName").type("Toamsz Niemasz");
      cy.get("#userEmail").type("przykładowymailonet.pl");
      cy.get("#currentAddress").type("WIDZEW GÓRĄ");
      cy.get("#permanentAddress").type("ŁKS PSY");

  })

})