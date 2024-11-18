class Login {

    btnLogin(){
        return cy.contains("Log in")
    }

    email(){
        cy.get('input[type="email"]')
    }

    password(){
        cy.get('input[type="password"]')
    }

    clickBtnLogin(){
        cy.get('.B1n.tg7.tBJ.dyH.iFc.sAJ.H2s').contains('Log in')
    }
    
}

export default Login