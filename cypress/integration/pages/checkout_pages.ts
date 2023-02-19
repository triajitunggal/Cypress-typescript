import { JsxEmit } from "typescript"

export class Checkout_pages{
    btn_addChart = '#add-to-cart-sauce-labs-backpack'
    btn_chart = '#shopping_cart_container'
    btn_checkout = '#checkout'
    txt_first_name = '#first-name'
    txt_last_name = '#last_name'
    txt_zip_code = '#postal_code'
    btn_continue = '#continue'
    btn_finish = '#finish'
    btn_remove = '#remove-sauce-labs-backpack'

    navigate(url: string){
        cy.visit(url)
    }
    inputFirstName(name: string){
        cy.get(this.txt_first_name).type(name)
    }
    inputLastName(last: string){
        cy.get(this.txt_last_name).type(last)
    }
    inputZipCode(zip: string){
        cy.get(this.txt_zip_code).type(zip)
    }
    clickAddtoChart(){
        cy.get(this.btn_addChart).click()
    }
    clickChart(){
        cy.get(this.btn_chart).click()
    }
    clickCO(){
        cy.get(this.btn_checkout).click()
    }
    clickContinue(){
        cy.get(this.btn_continue).click()
    }
    clickFinish(){
        cy.get(this.btn_finish).click()
    }

    assertCheckout(){
        cy.get('.complete-header').should('be.visible')
        cy.get('.pony_express').should('be.visible')
        cy.contains('THANK YOU FOR YOUR ORDER').should('contain','THANK YOU FOR YOUR ORDER')
    }
    checkout(name : string,last : string,zip : string){
        this.clickAddtoChart()
        this.clickChart()
        this.clickCO()
        this.inputFirstName(name)
        this.inputLastName(last)
        this.inputZipCode(zip)
        this.clickContinue()
        this.clickFinish()
    
        
    }
}