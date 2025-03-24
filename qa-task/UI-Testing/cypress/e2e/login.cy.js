import {validEmail, validPassword, wrongPassword} from "../../cypress/fixtures/login"
import LoginPage from "../../cypress/support/login"
import DashboardPage from "../../cypress/support/dashboard"

describe ('User login with valid credential', () => {

    const login = new LoginPage()
    const dashboard = new DashboardPage()

    before(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
        cy.visit('/')
    })
    
    it('Verify user login with correct email and password', () => {
        login.loginButton().click()
        login.emailField().type(validEmail)
        login.submitEmail().click()
        login.passwordField().type(validPassword)
        login.submitPassword().click()
        cy.wait(5000)
        login.emailField().should('not.exist')
        login.passwordField().should('not.exist')
        // dashboard.closeButton().click()
        // dashboard.labelDashboard().should('exist')
    })
})

describe ('User login with invalid credential', () => {

    const login = new LoginPage()
    const dashboard = new DashboardPage()

    before(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
        cy.visit('/')
    })
    
    it('Verify user login with correct email and password', () => {
        login.loginButton().click()
        login.emailField().type(validEmail)
        login.submitEmail().click()
        login.passwordField().type(wrongPassword)
        login.submitPassword().click()
        login.errorMessage().should('exist')
        dashboard.labelDashboard().should('not.exist')
    })
})