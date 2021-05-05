/// <reference  types="cypress" />

import articles from '../support/pages/articles'
import routes from '../support/routes'

context('Publicação', () => {


    beforeEach(() => {

       
        cy.backgroundLogin();
        articles.acessarFormularioDeNovaPublicacao()

        
        
    });


    it('Criar uma nova publicação', () => {
        
        //Açao
        articles.preencherFormulario()
        articles.submeterPublicaco()
       
        //Verificação

        articles.verificarSePublicacaoFoiCriadaComSucesso()
        
    });
});