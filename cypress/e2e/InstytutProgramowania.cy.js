/ <reference types="cypress" />

describe('Zamówienie z pustymi polami', () => {
    it('passes', () => {
      cy.visit('https://instytutprogramowania.pl/zamowienie/?add-to-cart=37')
      cy.get('#edd-purchase-button').click();
  
    })
  })

  describe('Zamówienie bez maila', () => {
    it('passes', () => {
      cy.visit('https://instytutprogramowania.pl/zamowienie/?add-to-cart=37')
      cy.get('#edd-email-2').type("test@interia.pl")
      cy.get('#edd-first').type("Jan")
      cy.get('#edd-last').type("Kowalski")
      cy.get('#bpmj_edd_invoice_data_invoice_person_name').type("Jan Kowalski")
      cy.get('#bpmj_edd_invoice_data_invoice_street').type("Testowa 1")
      cy.get('#bpmj_edd_invoice_data_invoice_postcode').type("10-100")
      cy.get('#bpmj_edd_invoice_data_invoice_city').type("lodz")
      cy.get('#bpmj-eddcm-additional-checkbox').check()
      cy.get('#edd-purchase-button').click();
      cy.get('#edd_error_email_empty').should("contain","Wprowadź adres e-mail")
      cy.get('#edd_error_invalid_email').should("contain","Wpisz prawidłowy adres email")
      cy.get('#edd_error_invalid_email_2').should("contain","Wprowadzone adresy email różnią się między sobą")
    
    })
  })


describe('Zamówienie bez potwierdzenia maila', () => {
    it('passes', () => {
      cy.visit('https://instytutprogramowania.pl/zamowienie/?add-to-cart=37')
      cy.get('#edd-email').type("test@interia.pl")
      cy.get('#edd-first').type("Jan")
      cy.get('#edd-last').type("Kowalski")
      cy.get('#bpmj_edd_invoice_data_invoice_person_name').type("Jan Kowalski")
      cy.get('#bpmj_edd_invoice_data_invoice_street').type("Testowa 1")
      cy.get('#bpmj_edd_invoice_data_invoice_postcode').type("10-100")
      cy.get('#bpmj_edd_invoice_data_invoice_city').type("lodz")
      cy.get('#bpmj-eddcm-additional-checkbox').check()
      cy.get('#edd-purchase-button').click();
      cy.get('#edd-email-2').then($el => $el[0].checkValidity()).should('be.false')
    })
  })

  describe('Zamówienie z różnymi mailami', () => {
    it('passes', () => {
      cy.visit('https://instytutprogramowania.pl/zamowienie/?add-to-cart=37')
      cy.get('#edd-email').type("test@interia.pl")
      cy.get('#edd-email-2').type("test2@interia.pl")
      cy.get('#edd-first').type("Jan")
      cy.get('#edd-last').type("Kowalski")
      cy.get('#bpmj_edd_invoice_data_invoice_person_name').type("Jan Kowalski")
      cy.get('#bpmj_edd_invoice_data_invoice_street').type("Testowa 1")
      cy.get('#bpmj_edd_invoice_data_invoice_postcode').type("10-100")
      cy.get('#bpmj_edd_invoice_data_invoice_city').type("lodz")
      cy.get('#bpmj-eddcm-additional-checkbox').check()
      cy.get('#edd-purchase-button').click();
      cy.get('#edd_error_invalid_email_2').should("contain","Wprowadzone adresy email różnią się między sobą")

    
    })
  })

  describe('Zamówienie bez podania imienia', () => {
    it('passes', () => {
      cy.visit('https://instytutprogramowania.pl/zamowienie/?add-to-cart=37')
      cy.get('#edd-email').type("test@interia.pl")
      cy.get('#edd-first').type("Jan")
      cy.get('#bpmj_edd_invoice_data_invoice_person_name').type("Jan Kowalski")
      cy.get('#bpmj_edd_invoice_data_invoice_street').type("Testowa 1")
      cy.get('#bpmj_edd_invoice_data_invoice_postcode').type("10-100")
      cy.get('#bpmj_edd_invoice_data_invoice_city').type("lodz")
      cy.get('#bpmj-eddcm-additional-checkbox').check()
      cy.get('#edd-purchase-button').click();
      cy.get('#edd-last').then($el => $el[0].checkValidity()).should('be.false')
    })
  })

  describe('Zamówienie bez podania Nazwiska', () => {
    it('passes', () => {
      cy.visit('https://instytutprogramowania.pl/zamowienie/?add-to-cart=37')
      cy.get('#edd-email').type("test@interia.pl")
      cy.get('#edd-last').type("Kowalski")
      cy.get('#bpmj_edd_invoice_data_invoice_person_name').type("Jan Kowalski")
      cy.get('#bpmj_edd_invoice_data_invoice_street').type("Testowa 1")
      cy.get('#bpmj_edd_invoice_data_invoice_postcode').type("10-100")
      cy.get('#bpmj_edd_invoice_data_invoice_city').type("lodz")
      cy.get('#bpmj-eddcm-additional-checkbox').check()
      cy.get('#edd-purchase-button').click();
      cy.get('#edd-first').then($el => $el[0].checkValidity()).should('be.false')
    })
  })

  describe('Zamówienie bez imienia/nazwiska przy danych do faktury', () => {
    it('passes', () => {
        cy.visit('https://instytutprogramowania.pl/zamowienie/?add-to-cart=37')
        cy.get('#edd-email').type("test@interia.pl")
        cy.get('#edd-email-2').type("test@interia.pl")
        cy.get('#edd-first').type("Jan")
        cy.get('#edd-last').type("Kowalski")
        cy.get('#bpmj_edd_invoice_data_invoice_person_name').type("Kowalski")
        cy.get('#bpmj_edd_invoice_data_invoice_street').type("Testowa 1")
        cy.get('#bpmj_edd_invoice_data_invoice_postcode').type("10-100")
        cy.get('#bpmj_edd_invoice_data_invoice_city').type("lodz")
        cy.get('#bpmj-eddcm-additional-checkbox').check()
  
      cy.get('#edd-purchase-button').click();
      cy.get('#edd_error_edd_invoice_data_invalid_person')
      .should("contain","Uzupełnij imię i nazwisko do faktury")
    
  
    })
  })

  describe('Zamówienie bez adresu przy danych do faktury', () => {
    it('passes', () => {
        cy.visit('https://instytutprogramowania.pl/zamowienie/?add-to-cart=37')
        cy.get('#edd-email').type("test@interia.pl")
        cy.get('#edd-email-2').type("test@interia.pl")
        cy.get('#edd-first').type("Jan")
        cy.get('#edd-last').type("Kowalski")
        cy.get('#bpmj_edd_invoice_data_invoice_person_name').type("Jan Kowalski")
        cy.get('#bpmj_edd_invoice_data_invoice_postcode').type("10-100")
        cy.get('#bpmj_edd_invoice_data_invoice_city').type("lodz")
        cy.get('#bpmj-eddcm-additional-checkbox').check()
  
      cy.get('#edd-purchase-button').click();
      cy.get('#edd_error_bpmj_edd_invoice_data_invalid_street')
      .should("contain","Uzupełnij nazwę ulicy wraz z numerem")

  
    })
  })


  describe('Zamówienie bez kodu pocztowego przy danych do faktury', () => {
    it('passes', () => {
        cy.visit('https://instytutprogramowania.pl/zamowienie/?add-to-cart=37')
        cy.get('#edd-email').type("test@interia.pl")
        cy.get('#edd-email-2').type("test@interia.pl")
        cy.get('#edd-first').type("Jan")
        cy.get('#edd-last').type("Kowalski")
        cy.get('#bpmj_edd_invoice_data_invoice_person_name').type("Jan Kowalski")
        cy.get('#bpmj_edd_invoice_data_invoice_street').type("Testowa 1")
        cy.get('#bpmj_edd_invoice_data_invoice_city').type("lodz")
        cy.get('#bpmj-eddcm-additional-checkbox').check()
        cy.get('#edd-purchase-button').click();
        cy.get('#edd_error_bpmj_edd_invoice_data_postcode')
        .should("contain","Uzupełnij kod pocztowy")
  
    })
  })

  describe('Zamówienie bez miejscowosci przy danych do faktury', () => {
    it('passes', () => {
        cy.visit('https://instytutprogramowania.pl/zamowienie/?add-to-cart=37')
        cy.get('#edd-email').type("test@interia.pl")
        cy.get('#edd-email-2').type("test@interia.pl")
        cy.get('#edd-first').type("Jan")
        cy.get('#edd-last').type("Kowalski")
        cy.get('#bpmj_edd_invoice_data_invoice_person_name').type("Jan Kowalski")
        cy.get('#bpmj_edd_invoice_data_invoice_street').type("Testowa 1")
        cy.get('#bpmj_edd_invoice_data_invoice_postcode').type("10-100")
        cy.get('#bpmj-eddcm-additional-checkbox').check()
        cy.get('#edd-purchase-button').click();
        cy.get('#edd_error_bpmj_edd_invoice_data_city')
        .should("contain","Uzupełnij miejscowość")
  
    })
  })

  describe('Zamówienie z poprawnymi danymi bez wyrażenia zgody', () => {
    it('passes', () => {
        cy.visit('https://instytutprogramowania.pl/zamowienie/?add-to-cart=37')
        cy.get('#edd-email').type("test@interia.pl")
        cy.get('#edd-email-2').type("test@interia.pl")
        cy.get('#edd-first').type("Jan")
        cy.get('#edd-last').type("Kowalski")
        cy.get('#bpmj_edd_invoice_data_invoice_person_name').type("Jan Kowalski")
        cy.get('#bpmj_edd_invoice_data_invoice_street').type("Testowa 1")
        cy.get('#bpmj_edd_invoice_data_invoice_postcode').type("10-100")
        cy.get('#bpmj_edd_invoice_data_invoice_city').type("lodz")
        cy.get('#edd-purchase-button').click();
        cy.get('#edd_error_invalid_custom_checkbox')
        .should("contain",'Wymagane jest zaznaczenie "Wyrażam zgodę na przetwarzanie moich danych w celach otrzymywania informacji o nowych lekcjach i kursach."')
    
    })
  })


    describe('Zamówienie z poprawynmi danymi z wyrazeniem zgody', () => {
    it('passes', () => {
        cy.visit('https://instytutprogramowania.pl/zamowienie/?add-to-cart=37')
        cy.get('#edd-email').type("test@interia.pl")
        cy.get('#edd-email-2').type("test@interia.pl")
        cy.get('#edd-first').type("Jan")
        cy.get('#edd-last').type("Kowalski")
        cy.get('#bpmj_edd_invoice_data_invoice_person_name').type("Jan Kowalski")
        cy.get('#bpmj_edd_invoice_data_invoice_street').type("Testowa 1")
        cy.get('#bpmj_edd_invoice_data_invoice_postcode').type("10-100")
        cy.get('#bpmj_edd_invoice_data_invoice_city').type("lodz")
        cy.get('#bpmj-eddcm-additional-checkbox').check()
        cy.get('#edd-purchase-button').click()
        cy.url().should('not.equal', 'https://instytutprogramowania.pl/zamowienie/?add-to-cart=37')

    })
  })




