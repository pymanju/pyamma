describe('verify login functionality', () => {
    it('verify login with valid username and password', () => {
       
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type(Cypress.env("username"))
        cy.get('input[type="password"]').type(Cypress.env("password") )
        cy.get('button[type="submit"]').click()
                // Assertions
        cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        cy.contains('Dashboard').should("be.visible") 
         cy.reload()
         cy.go(-1)
      })

    it.only('verify login with invalid username and password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get('input[class="oxd-input oxd-input--active"]').first().type("manju")
  cy.get('input[type="password"]').type("admin123{enter}")
 // cy.get('button[type="submit"]').click()
  cy.contains('Invalid credentials').should("be.visible")
          // Assertions
//  cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
  cy.contains('Dashboard').should("be.visible")
      })

      it.skip('verify login with valid username and inpassword', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.xpath('//input[@name="username"]').type("Admin")
  cy.get('input[type="password"]').type("admin123uytrf")
  cy.get('button[type="submit"]').click()
  cy.contains('Invalid credentials').should("be.visible")
          // Assertions
  cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
  cy.contains('Dashboard').should("be.visible")
      })
      it.skip('verify login with invalid username and inpassword', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get('input[name="username"]').type("Admin786")
  cy.get('input[type="password"]').type("admin123uytrf")
  cy.get('button[type="submit"]').click()
  cy.contains('Invalid credentials').should("be.visible")
          // Assertions
 // cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
  //cy.contains('Dashboard').should("be.visible")
      })






  })
  describ('verify login functionality', () => {
    it('verify login with valid username and password', () => {
       
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type(Cypress.env("username"))
        cy.get('input[type="password"]').type(Cypress.env("password") )
        cy.get('button[type="submit"]').click()
                // Assertions
        cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        cy.contains('Dashboard').should("be.visible") 
         cy.reload()
         cy.go(-1)
      })

    it.only('verify login with invalid username and password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get('input[class="oxd-input oxd-input--active"]').first().type("manju")
  cy.get('input[type="password"]').type("admin123{enter}")
 // cy.get('button[type="submit"]').click()
  cy.contains('Invalid credentials').should("be.visible")
          // Assertions
//  cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
  cy.contains('Dashboard').should("be.visible")
      })

      it.skip('verify login with valid username and inpassword', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.xpath('//input[@name="username"]').type("Admin")
  cy.get('input[type="password"]').type("admin123uytrf")
  cy.get('button[type="submit"]').click()
  cy.contains('Invalid credentials').should("be.visible")
          // Assertions
  cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
  cy.contains('Dashboard').should("be.visible")
      })
      it.skip('verify login with invalid username and inpassword', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get('input[name="username"]').type("Admin786")
  cy.get('input[type="password"]').type("admin123uytrf")
  cy.get('button[type="submit"]').click()
  cy.contains('Invalid credentials').should("be.visible")
          // Assertions
 // cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
  //cy.contains('Dashboard').should("be.visible")
      })






  })