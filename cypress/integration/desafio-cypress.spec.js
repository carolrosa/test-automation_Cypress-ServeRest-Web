/* Desafio Web: 
- Acessar o ServeRest
- Criar um novo usuário não sendo administrador
- Adicionar um produto a Lista
- Validar a existência deste produto na Lista de Compras */

/// <reference types="cypress" />

import Cadastro from "../../../../Users/Caroline/Desktop/TestesDeSoftware/desafio_serverest-autom-web/cypress/support/Cadastro";
//import Login from "../support/Login";

const faker = require('faker');

describe("Desafio-cypress", () => {
    it("Cadastrar novo usuario COMUM.", () => {
        Cadastro.acessarCadastro();
        Cadastro.preencherCadastro(faker.internet.userName(), faker.internet.email(), faker.internet.password()); 
        cy.get('.alert-link').should('have.text', "Cadastro realizado com sucesso");
    });

    it("Adicionar item a um carrinho.", () => {
        //Login.acessarLogin();
        //Login.preencherLogin("novocadastro@mail.com","testecadastro");

        let nomeProduto1;
        cy.get('div.card:nth-child(3) > div:nth-child(1) > h5:nth-child(3)').then(($nomeProduto1) => {
            nomeProduto1 = $nomeProduto1.text();
            cy.log(nomeProduto1);

            Cypress.env('nomeProduto1', nomeProduto1);
        });

        cy.get('div.card:nth-child(3) > div:nth-child(1) > div:nth-child(7) > a:nth-child(3) > button:nth-child(1)').click();

        cy.contains(Cypress.env('nomeProduto1')).should('be.visible');
    });
})
