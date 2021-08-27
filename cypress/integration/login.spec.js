/// <reference types="cypress" />

import Login from "../support/Login";

const faker = require('faker');

describe("Login", () => {
    it("Realizar o Login COM sucesso.", () => {
        Login.acessarLogin();
        Login.preencherLogin("fulano@qa.com", "teste");
        cy.get('h1').should('have.text', "Bem Vindo  Fulano da Silva");      
    });

    it("Realizar o Login SEM sucesso.", () => {
        Login.acessarLogin();
        Login.preencherLogin(faker.internet.email(), "teste")
        cy.get('.alert').should('have.text', "Email e/ou senha inválidos");
    });
});


        /*cy.intercept({
            method: 'POST',
            path: '/login',
        }).as(postLogin); 
    
        cy.wait('@postLogin').then(({request, response}) => {
            expect(response.statusCode).to.eq(200);
            expect(response.body).has.property('id');
            expect(response.body.id).is.not.null;
        });*/