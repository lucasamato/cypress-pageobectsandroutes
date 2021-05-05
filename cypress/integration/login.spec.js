/// <reference  types="cypress" />
import login from '../support/pages/login'

context('login', () => {
    it('Realizar login', () => {

        login.acessarLogin()
        login.preencherFormulario()
        login.submeterFormulario()
     
    });
});