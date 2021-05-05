const el = require('./elements').ELEMENTS

const faker = require('faker')

class Cadastro {

    acessarCadastro(){
        cy.visit("register") 
    }

    preencherCadastro(){
        cy.get(inputName).type(faker.name.firstName() + faker.name.lastName());
        cy.get().type(faker.internet.email());
        cy.get().type('87654321');
    }

    submeterCadastro(){

        cy.get('button.btn-primary').click();


    }



}

export default new Cadastro(); 