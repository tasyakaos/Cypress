import Login from './Page Object/PageObject.cy'


const email = 'wqw123@gmail.com'
const password = 'qwerty'


describe("Log in", function() {

const login = new Login()

    it("Sing in", function() {
        cy.visit("https://www.pinterest.com/")
        cy.viewport(1920, 1080)
        cy.location('protocol').should('eq', 'https:')
        cy.contains("Log in").click()

        cy.get('input[type="email"]')
        .type(`${email}`)
        .should('have.value', 'wqw123@gmail.com')

        cy.get('input[type="password"]')
        .type(`${password}`)
        .should('have.value', 'qwerty')

        cy.get('.B1n.tg7.tBJ.dyH.iFc.sAJ.H2s').contains('Log in').click( {force: true})
    })
})