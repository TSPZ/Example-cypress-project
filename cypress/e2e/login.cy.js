/// <reference types="cypress" />

describe("Login test", () => {
    before("Open website", () => {
        cy.visit("https://parabank.parasoft.com/")
    })

    it("Type username and password and click log in button", () => {
        cy.get("input[name='username']").type("example username");
        cy.get("input[name='password']").type("example password");
        cy.get("input[type='submit']").click();

        cy.get("p.error").should("have.text", "\n\t\t\tAn internal error has occurred and has been logged.\n\t\t");
    })
})
