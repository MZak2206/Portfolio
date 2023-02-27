


describe('TestApi', () => {
  it('TestTagów', () => {
    cy.intercept("get","https://api.realworld.io/api/tags").as("TagRequest")
    cy.visit("https://angular.realworld.io/")
    cy.wait("@TagRequest")
    cy.get("@TagRequest").then(tag =>{
        console.log(tag)
        expect(tag.response.statusCode).to.equal(200)
        expect(tag.response.body.tags).to.contain("ipsum")

    })
  })

  it('Test Niepoprawnego Logowania', () => {
    cy.visit("https://angular.realworld.io")
    cy.get("a.nav-link")
    .contains("Sign in")
    .click()
    cy.intercept("POST","https://api.realworld.io/api/users/login").as("LoginRequest")
    cy.get('[placeholder="Email"]')
    .type("test")
    cy.get('[placeholder="Password"]')
    .type("test")
    cy.get('[type="submit"]')
    .click()
    cy.wait("@LoginRequest")
    cy.get("@LoginRequest").then(login =>{
      console.log(login)
      expect(login.response.statusCode).to.equal(403)
    
  })
 
  });


})