import bug from '../../pages/BugPage'
import bugFactory from '../../factories/BugFactory'

describe('Demostração de cadastro de um bug', () => {

    beforeEach(function () {
        cy.login()
    })

    var bugFact = bugFactory.bugDado()

    it('Cenário 1: Cadastrando um bug normalmente', function () {

        var tipobug = bugFact.tipo.solicitar
        var categoria = bugFact.categoria.grave
        //Dado que eu esteja logado na aplicação de reporte de bugs.
        bug.go()

        //Quando acesso o formulario de cadatro.
        bug.acessForm()

        //E preencho todos os dados necessarios e submento o formulario.
        bug.selectFormTipo(tipobug)
        bug.fillform(bugFact,categoria)
        bug.submit()

        //Então consigo verificar o bug cadastrado na plataforma.
        //E posso acompanhar sua evolução de resolução.
        bug.validBug(bugFact)
    })
})