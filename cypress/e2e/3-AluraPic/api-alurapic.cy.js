describe('Buscar fotos e dados', ()=> {

    it('buscar fotos do flavio', ()=> {
        cy.request({   // Faça a requisição
            method: 'GET',
            url:'https://apialurapic.herokuapp.com/flavio/photos'
        }).then((res) => { //espera -se as seguintes respostas:
            expect(res.status).to.be.equal(200) // status 200
            expect(res.body).is.not.empty // o corpo da resposta não vai vir vazia
            expect(res.body[0]).to.have.property('description') // na posição 0 tenha o conteúdo que eu quero
            expect(res.body[0].description).to.be.equal('Farol iluminado') // vê se vai vir essa descrção
            expect(res.body[2]).to.have.property('description') // na posição 0 tenha o conteúdo que eu quero
            expect(res.body[2].description).to.be.equal('Lutando contra a erosão') // vê se vai vir essa descrção

        })

        

    })
})



