const el = require('./elements').ELEMENTS;

class Cadastro {
    acessarCadastro() {
        cy.visit('/cadastrarusuarios');
    }

    preencherCadastro(nome, email, senha) {
        cy.get(el.nome).type(nome);
        cy.get(el.email).type(email);
        cy.get(el.senha).type(senha);

        cy.intercept('POST', '**/usuarios').as('postCadastro');
        
        cy.get(el.btnCadastrar).click();
    }
}

export default new Cadastro();
