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

        /*cy.wait('@postCadastro').then((xhr) => {
            expect(xhr.statusCode).to.eq(201);
            expect(xhr.response.body).has.property('id');
            expect(xhr.response.body.id).is.not.null;
        });*/
    }
}

export default new Cadastro();