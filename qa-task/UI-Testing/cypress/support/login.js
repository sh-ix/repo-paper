class loginPage {
    loginButton(){
        return cy.get('.ghost-button-green')
    }
    
    emailField(){
        return cy.get('[data-cy="identifier"]')
    }

    passwordField(){
        return cy.get('[data-cy="password"]')
    }

    submitEmail(){
        return cy.get('[data-cy="submit"]')
    }

    submitPassword(){
        return cy.get('form.ng-untouched > [data-cy="submit"]')
    }

    errorMessage(){
        return cy.get('.input-error-message__text')
    }

  }
  
  export default loginPage