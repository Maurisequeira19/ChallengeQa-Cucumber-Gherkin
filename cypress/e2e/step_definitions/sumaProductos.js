
import {
    Given,
    When,
    Then,
} from '@badeball/cypress-cucumber-preprocessor';

Given ('Abrir el navegador', ()=>{
    cy.log("Bienvenido a Fravega!");
    cy.visit('/');
});

When ('Ingresando codigo postal', ()=>{
    cy.get('#header-geo-location-form-postal-number', { timeout: 15000 }) 
      .should('be.visible') 
      .type("5008"); 
    cy.get('.sc-bOQTJJ > .sc-fUBkdm').click();
});

When ("Agregando al carrito el primer producto", ()=>{
    cy.get(':nth-child(2) > [data-testid="home-categorias-destacadas-element"] > a > .sc-etVdmn > .sc-hqpNSm > .sc-dAEZTx').click();
    cy.get(":nth-child(1) > .sc-f0dec281-2").click();
    cy.get(".sc-56271133-3 > .sc-2628e4d4-7 > .sc-2628e4d4-10 > .sc-2ec5050c-1 > .sc-2ec5050c-0").click();
});

When ("Agregando al carrito el segundo producto", ()=>{
    cy.get(".sc-ejfMa-d > .sc-dkmUuB > .sc-sLsrZ").should('be.visible').type("microondas {enter}");
    cy.get('[href="/p/microondas-atma-digital-con-grill-900w-23lts-matdgb23cn-110148/"]').click();
    cy.get(".sc-56271133-3 > .sc-2628e4d4-7 > .sc-2628e4d4-10 > .sc-2ec5050c-1 > .sc-2ec5050c-0").click();
});

Then ("Verificando total en carrito de compras", ()=>{
    cy.get(".sc-dQEtJz > .sc-hTUWRQ").type("{pageup}")
    cy.get(".sc-dQEtJz > .sc-hTUWRQ").click()
    cy.get(".sc-eoVZPG").should('be.visible').click({ force: true })
    cy.screenshot("Precio total de compras")

    
});