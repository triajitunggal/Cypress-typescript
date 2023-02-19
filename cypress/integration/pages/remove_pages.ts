import { JsxEmit } from "typescript"

export class Remove_pages{
    btn_remove = '#remove-sauce-labs-backpack'
    btn_addChart = '#add-to-cart-sauce-labs-backpack'
    btn_chart = '#shopping_cart_container'

    clickAddtoChart(){
        cy.get(this.btn_addChart).click()
    }
    clickChart(){
        cy.get(this.btn_chart).click()
    }
    clickRemove(){
        cy.get(this.btn_remove).click()
    }

    assertCheckout(){
        cy.get('.header_secondary_container').should('be.visible')
    }
    checkout(name : string,last : string,zip : string){
        this.clickAddtoChart()
        this.clickChart()
        this.clickRemove()
    
        
    }
}