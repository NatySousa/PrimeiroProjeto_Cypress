describe('alura busca curso', () =>{

    beforeEach(() =>{
        cy.visit('https://www.alura.com.br');
    })

    it('buscar curso de java', () => {
       cy.get('#header-barraBusca-form-campoBusca').type('java');
      
       cy.get('.header-barraBusca-form-submit').click();

       cy.get('h4.busca-resultado-nome').should('contain', 'Formação Java e Orientação a Objetos');
       
    
    })

    it('buscar curso de c#', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('c#');
       
        cy.get('.header-barraBusca-form-submit').click();
 
        cy.get('h4.busca-resultado-nome').should('contain', 'Formação Boas práticas em C#');
        
})

it('buscar curso de qa', () => {
    cy.get('#header-barraBusca-form-campoBusca').type('qa');
   
    cy.get('.header-barraBusca-form-submit').click();

    cy.get('h4.busca-resultado-nome').should('contain', 'Formação Carreira QA: processos e automação de testes');

})

})
