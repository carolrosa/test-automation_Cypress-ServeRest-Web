/// <reference types="cypress" />

import Cadastro from "../support/Cadastro";

describe("Cadastro", () => {
    it("Realizar o Cadastro COM sucesso.", () => {
        Cadastro.acessarCadastro();
        Cadastro.preencherCadastro("Novo Cadastro", "novoCadastro@mail.com", "novaSenha");
        cy.get('h1').should('have.text', "Bem Vindo  Novo Cadastro");
    });

    it.only("Tentar realizar o Cadastro em BRANCO.", () => {
        Cadastro.acessarCadastro();
        Cadastro.preencherCadastroemBranco();
        cy.get('.alert').should('have.text', "nome não pode ficar em brancoemail não pode ficar em brancopassword não pode ficar em branco");
    });
});
