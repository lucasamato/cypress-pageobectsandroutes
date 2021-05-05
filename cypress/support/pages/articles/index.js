//Criar os comandos utilizados na suite de testes, os elementos mapeados são importados aqui


const el = require('./elements').ELEMENTS

const faker = require('faker')

import Routes from '../../routes'

class Articles {

acessarFormularioDeNovaPublicacao(){
    cy.get(el.linkNovaPublicacao).click()
}

preencherFormulario(){
    cy.get(el.inputTitle).type('Amato Title');
    cy.get(el.inputDescription).type('Projeto de automação Cypress');
    cy.get(el.textAreaBody).type(faker.lorem.paragraph());
    cy.get(el.inputTags).type('cypress');

}

submeterPublicaco(){

//     (xhr)
// POST 200 /api/articles
// (xhr)
// GET 200 /api/articles/amato-title-58gtm4
// (xhr)
// GET 200 /api/articles/amato-title-58gtm4/comments
    

    cy.get(el.buttonSubmit).click();

    
}


verificarSePublicacaoFoiCriadaComSucesso(){
    
            //template string
    cy.wait(`@${Routes.as.postArticles}`).then((postArticlesResponse) => {
        expect(postArticlesResponse.status).to.eq(200)
    })
    cy.wait(`@${Routes.as.getArticlesTitle}`).then((postArticlesResponse) => {
        expect(postArticlesResponse.status).to.eq(200)
    })
    cy.wait(`@${Routes.as.getArticlesTitleComments}`).then((postArticlesResponse) => {
        expect(postArticlesResponse.status).to.eq(200)
    })

}

}

export default new Articles();