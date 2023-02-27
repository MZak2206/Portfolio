/// <reference types="cypress" />

describe('Test Rejestracji', () => {
  beforeEach(() => {
    cy.visit('https://www.x-kom.pl/rejestracja/');
    cy.log("działa");
    cy.wait(200);
    cy.contains("button","W porządku")
    .click();

  })

  it('Rejestracja z pustymi polami', () => {
    
    cy.contains("span","Załóż konto")
    .click()
    .url()
    .should("include","/rejestracja")
    cy.contains("span","Pole jest wymagane. Uzupełnij dane.")
    .should("contain","Pole jest wymagane. Uzupełnij dane.")
    cy.contains("span","Wpisz adres e-mail.")
    .should("contain","Wpisz adres e-mail.")
    cy.contains("span","Wpisz hasło. Powinno składać się minimum z 8 znaków.")
    .should("contain","Wpisz hasło. Powinno składać się minimum z 8 znaków.")
    cy.contains("span","Zaznacz zgodę")
    .should("contain","Zaznacz zgodę")

  });


  it('Rejestracja z złymi danymi bez akceptacji regulaminu', () => {

    cy.get('[autocomplete="given-name"]')
    .type("1")
    cy.get('[placeholder="Nazwisko (wymagane)"]')
    .type("1")
    cy.get('[name="email"]')
    .type("1")
    cy.get('[name="password"]')
    .type("1")
    cy.contains("span","Załóż konto")
    .click()
    .url()
    .should("include","/rejestracja")
    cy.contains("span","Wpisz poprawne imię")
    .should("contain","Wpisz poprawne imię")
    cy.contains("span","Wpisz poprawne nazwisko")
    .should("contain","Wpisz poprawne nazwisko")
    cy.contains("span","Adres e-mail jest niepoprawny. Adres musi mieć jeden znak @.")
    .should("contain","Adres e-mail jest niepoprawny. Adres musi mieć jeden znak @.")
    cy.contains("span","Hasło powinno mieć minimum 8 znaków")
    .should("contain","Hasło powinno mieć minimum 8 znaków")
    cy.contains("span","Zaznacz zgodę")
    .should("contain","Zaznacz zgodę")

  });


  it('Rejestracja z złymi danymi z akceptacją regulaminu', () => {

    cy.get('[autocomplete="given-name"]').type(1)
    cy.get('[placeholder="Nazwisko (wymagane)"]').type(1)
    cy.get('[name="email"]').type(1)
    cy.get('[name="password"]').type(1)
    cy.get('[type="checkbox"]').eq(1).check({force:true})
    cy.contains("span","Załóż konto")
    .click()
    .url()
    .should("include","/rejestracja")
    cy.contains("span","Wpisz poprawne imię").should("contain","Wpisz poprawne imię")

  });


  it('Rejestracja z dobrymi danymi bez akceptacji regulaminu', () => {

    cy.get('[autocomplete="given-name"]')
    .type("Tomasz")
    cy.get('[placeholder="Nazwisko (wymagane)"]')
    .type("Kowalski")
    cy.get('[name="email"]')
    .type('przykladowy942@interia.pl')
    cy.get('[name="password"]')
    .type("Dobrehaslo123")
    cy.contains("span","Załóż konto")
    .click()
    .url()
    .should("include","/rejestracja")
    cy.contains("span","Zaznacz zgodę")
    .should("contain","Zaznacz zgodę")

  });


  it('Zachowanie Checkboxów', () => {
    cy.get('[type="checkbox"]').eq(0).check({force:true})
    cy.get('[type="checkbox"]').eq(1).should('be.checked')
    cy.get('[type="checkbox"]').eq(2).should('be.checked')
    cy.get('[type="checkbox"]').eq(3).should('be.checked')
    
  });    

  it('Rejestracja z dobrymi danymi z akceptacją regulaminu', () => {
    const number = Date.now()

    cy.get('[autocomplete="given-name"]').type("Tomasz")
    cy.get('[placeholder="Nazwisko (wymagane)"]').type("Kowalski")
    cy.get('[name="email"]').type(`przykladowy${number}@interia.pl`)
    cy.get('[name="password"]').type("Dobrehaslo123")
    cy.get('[type="checkbox"]').eq(1).check({force:true})
    cy.contains("span","Załóż konto")
    .click()



  });

})

describe('Test Logowania', () => {
  beforeEach(() => {
    cy.visit('https://www.x-kom.pl/logowanie');
    cy.log("działa");
 
  

  })

  it('Logowanie bez podania danych', () => {
    cy.contains("span","Zaloguj się")
    .click()
    .url()
    .should("include","/logowanie")
    cy.contains("span","Podaj login lub e-mail")
    .should("contain","Podaj login lub e-mail")
    cy.contains("span","Wpisz hasło. Pole nie może być puste")
    .should("contain","Wpisz hasło. Pole nie może być puste")
  });

  it('Logowanie z błędnym loginem', () => {

    cy.get('[placeholder="E-mail lub login"]')
    .type("losowyLogin")
    cy.get('[placeholder="Hasło"]')
    .type("Dobrehaslo123")
    cy.contains("span","Zaloguj się")
    .click()
    .url()
    .should("include","/logowanie")
    cy.contains("span","Sprawdź, czy adres e-mail i hasło są poprawne")
    .should("contain","Sprawdź, czy adres e-mail i hasło są poprawne")
    
  });

  it('Logowanie z błędnym Mailem', () => {

    cy.get('[placeholder="E-mail lub login"]')
    .type("LosowyMail@interia.pl")
    cy.get('[placeholder="Hasło"]')
    .type("Dobrehaslo123")
    cy.contains("span","Zaloguj się")
    .click()
    cy.contains("span","Sprawdź, czy adres e-mail i hasło są poprawne")
    .should("contain","Sprawdź, czy adres e-mail i hasło są poprawne")
  });


  it('Logowanie z błędnym Hasłem', () => {

    cy.get('[placeholder="E-mail lub login"]')
    .type("Przykladowymail955@interia.pl")
    cy.get('[placeholder="Hasło"]')
    .type("LosoweHaslo")
    cy.contains("span","Zaloguj się")
    .click()
    cy.contains("span","Sprawdź, czy adres e-mail i hasło są poprawne")
    .should("contain","Sprawdź, czy adres e-mail i hasło są poprawne")
  });

  it('Logowanie z poprawnymi danymi', () => {

    cy.get('[placeholder="E-mail lub login"]').type("Przykladowymail955@interia.pl")
    cy.get('[placeholder="Hasło"]').type("Dobrehaslo123")
    cy.contains("span","Zaloguj się").click()
  
  });


  



})

