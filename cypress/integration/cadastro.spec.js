/// <reference  types="cypress" />
import cadastro from '../support/pages/cadastro';
import Cadastro from '../support/pages/cadastro'

context('Cadastro', () => {
    it('Cadastrar um novo usuário', () => {

        cadastro.acessarCadastro()
        cadastro.preencherCadastro()
        cadastro.submeterCadastro()
        
    
    });
});