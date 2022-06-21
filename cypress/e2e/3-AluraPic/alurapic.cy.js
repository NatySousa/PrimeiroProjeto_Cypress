describe('Usuabilidade tela inicial ', () =>{

    beforeEach(() =>{
        cy.visit('http://alura-fotos.herokuapp.com/');
    })

    it('verifica mensagens de tela inicial', () => {

        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.get('button[type="submit"]').should('be.disabled');
        
     })

     it('verifica botao habilitado na tela inicial', () => {
        cy.get('input[formcontrolname="userName"]').type('natalia');
        cy.get('input[formcontrolname="password"]').type('1234');
        cy.get('button[type="submit"]').should('be.enabled');
        
     })

     it('verifica nome da aplicação na tela inicial', () => {
        cy.contains('a' , 'ALURAPIC').should('be.visible');
    })

    it('verifica menu clicavel na tela inicial', () => {
        cy.get('.navbar-brand > .fa').click();
        cy.get('.menu-bar > .fa').should('be.visible');
    })
    
        

  



    })

    
