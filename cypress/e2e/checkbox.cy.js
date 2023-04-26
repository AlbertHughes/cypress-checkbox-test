/// <reference types="cypress" />

it("checkbox",()=>{
    cy.visit("http://demoqa.com/checkbox/")
    cy.get(".rct-checkbox").click()
    cy.wait(6000);
    cy.get(".display-result").should("be.visible")
})
