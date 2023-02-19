import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
import {Checkout_pages} from "./pages/checkout_pages"
import {Remove_pages} from "./pages/remove_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let checkout_pages = new Checkout_pages()
let remove_pages = new Remove_pages()

const URL = 'https://www.saucedemo.com/'

it('Test LOGIN', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin() 
})

it('Test Sauce Demo Invalid Password', () => {
    loginPage.login(URL,'standard_user','invalidPass')
    loginPage.assertLoginFail()
})

it('Test Sauce Demo Sauce labs product backpack', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
})

it('Test Sauce Demo Checkout', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    checkout_pages.clickAddtoChart()
    checkout_pages.clickChart()
    checkout_pages.clickCO()
    checkout_pages.checkout('aji','putra','12233')
    checkout_pages.clickContinue()
    checkout_pages.clickFinish()
})

it('Test Sauce Demo Remove Chart', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    remove_pages.clickAddtoChart()
    remove_pages.clickChart()
    remove_pages.clickRemove()
    
})

