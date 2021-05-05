///mapeia as rotas

class Routes {

    as = {

        postArticles: 'POSTArticles',
        getArticlesTitle: 'GETArticlesTitle',
        getArticlesTitleComments: 'GETArticlesTitleComments',

    }

    init(){
        cy.server();
        cy.route('POST', '**/api/articles' ).as(this.as.postArticles);
        cy.route('GET', '**/api/articles/amato-title-**' ).as(this.as.getArticlesTitle);
        cy.route('GET', '**/api/articles/amato-title-**/comments' ).as(this.as.getArticlesTitleComments);

    }

}

export default new Routes();