class BugPage {

    go() {
        cy.visit('https://mvlteste.backlog.com/dashboard')
        cy.get('div[class="user-profile dropdown"] #userProfileLink').click
        cy.get('#userProfileLinkContainer li[class="dropdown-menu__item user-profile__name"]')
            .should('have.text', "Hello, Marcos")
    }

    acessForm() {
        cy.get('div [data-bind="visible:projects().length>0"]').click()
        cy.get('a[id="navi-add"]').click()
    }

    selectFormTipo(tipoBug) {
        cy.get('div[class="ticket__key"] div[class="chosen-wrapper -w-small"] div button').click()
        cy.contains(tipoBug).click({ force: true })
    }

    fillform(bugFact, cate) {
        cy.get('div[class="_mg-b-15"] input[type="text"]').type(bugFact.titulo)
        cy.get('div[data-bind*="listSupport"] #descriptionTextArea').type(bugFact.descritivo)
        cy.get('div[class="ticket__properties-item -category"] div[class="ticket__properties-value"] div[class="chosen-wrapper -with-icon-button"] div[class="chosen-wrapper__action-link"] a')
            .click()
        cy.contains(cate).click()  
        cy.get('div[class="ticket__properties-value"] button span[class="_assistive-text"]').click()
        cy.get('#limitDate').type(bugFact.data_fix)
        cy.get('div[class="file-upload__add-drag-area js_add-drag-area"] label').attachFile('/imagens/' + bugFact.print)
    }

    submit() {
        cy.get('div[class="button-list _t-right _mg-t-25"] button[data-bind*="click:submit"]').click()
    }

    validBug(bugFact) {
        cy.get('#AddIssueComplete p[class="text -large -bold _mg-b-5"]').should('have.text', bugFact.msn)
        cy.visit('https://mvlteste.backlog.com/projects/PORTIFOLIOMVL')
        cy.contains(bugFact.titulo).should('be.visible')
    }
}

export default new BugPage;