'use strict'

describe('Primera Prueba', () => {
    beforeEach(() => {
        //Se crea un hooks, con URL como funcion y permite que cargue en todos los test
        cy.visit('https://www.facebok.com/')
        // cy.wait(2000)
        //cy.contains('fb_logo', 'facebook').should('be.visible')

    })


    it('Ingresar a facebook', () =>{
        cy.get('[data-testid=royal_email]').type('fesconetwork@gmail.com')
        cy.wait(2000)
        cy.get('[data-testid=royal_pass]').type('xxxxxxx')
        cy.wait(2000)
        cy.get('[data-testid=royal_login_button]').click()
        
        cy.get('#pass').type('xxxxxxxxx')
        cy.get('#loginbutton').click()
        cy.wait(5000)
        cy.screenshot('ingresar a facebook')
        //cy.contains('._1vp5').should('be.visible')
        
    })
    // El .skip es para saltar esta prueba
    it.skip('Revisar fotos', ()=>{
        cy.get('caacc').type('cnscsc')
        cy.get('caacc').type('cnscsc')
        cy.get('caacc').type('cnscsc').click()
    })


    after(()=>{
        cy.log('Test finalizados')
    })

})