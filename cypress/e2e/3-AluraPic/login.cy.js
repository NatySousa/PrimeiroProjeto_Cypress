describe('Login de usuarios alura pic', () =>{

    beforeEach(() =>{
        cy.visit('http://alura-fotos.herokuapp.com/');
    })

    
    it('fazer login de usuario valido', () => {

        cy.get('input[formcontrolname="userName"]').type('flavio');
        cy.get('input[formcontrolname="password"]').type('123');
        cy.get('button[type="submit"]').click();
        cy.contains('a', '(Logout)').should('be.visible');
    })

    
    it('fazer login de usuario invalido', () => {

        cy.get('input[formcontrolname="userName"]').type('natalia');
        cy.get('input[formcontrolname="password"]').type('1234');
        cy.get('button[type="submit"]').click();
        cy.on('window:alert', (str) =>{
            expect(str).to.equal('Invalid user name or password')
        })
        
    })
})