describe('Cadastro de usuarios alura pic', () =>{

    beforeEach(() =>{
        cy.visit('http://alura-fotos.herokuapp.com/');
    })

    it('verificar mensagens de email invalido', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('Natália');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');  
    
     })

     it('verificar mensagens de validacao', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
       // cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
       // cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');     
    
     })

     
   

     it('verificar mensagens de senha invalido', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
          
    
     })

     
     it('verificar formato de nome valido', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('NATÁLIA');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
       
        
    
     })

     
    const usuarios = require('../../fixtures/usuarios.json');

    usuarios.forEach(usuario => {

        it.only('registra novo usuário ${usuario.usrName}' , () => {
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="userName"]').type(usuario.userName);
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
            cy.get('input[formcontrolname="email"]').type(usuario.email);
            cy.get('input[formcontrolname="password"]').type(usuario.password);
        })

 
    })
})