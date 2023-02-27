describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://instytutprogramowania.pl/')

      cy.contains("a", "Zaloguj").click();
      cy.wait(500);
      cy.get("#user_login").type("TajnyLoginSzafara");
      cy.get("#user_pass").type("TajneHasło");
      cy.get("#rememberme").check();
      cy.get("#wp-submit").click();
  })
})