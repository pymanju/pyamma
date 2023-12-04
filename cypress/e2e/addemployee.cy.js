
const availableFixture=[
    {
      "name":"manju",
      "lastName":"H"
    },
    {
      "name":"raju",
      "lastName":"A"
    },
    {
      "name":"sathi",
      "lastName":"PY"
    }
  ]
  
  
  //import addemployee1 from  "../../pages/addemployee.po"
  import dashboard from "../../pages/dashboard.po"
  
  
  context('verify add employee functionality', () => {
    
     var credentials={
      username :"Admin",
      password:"admin123"
  
    }
      beforeEach('beforeeach',()=>  {
     
  
       cy.login(credentials.username, credentials.password)
       cy.contains(dashboard.pimMenu()).click()
       cy.contains(addemployee1.AddemployeeSubmenu()).click()
      
    })
    
   
   // const credentials =["Admin","admin123"]  
    it.only('verify add employee with valid details', () => {
     
      cy.get(addemployee1.firstnameInput()).type("Manju")
      cy.get(addemployee1.lastnameInput()).type("H")
       cy.get(addemployee1.submitButton()).click()
     // cy.contains('Successfully Saved').should("be.visible")     
    })
  
     
    it('verify add employee with mandatory fields', () => {
      
   
    
    cy.contains("Required").should("be.visible")
    })
      it.skip('verify add employee with maxium character limit for first name', () => {
      cy.visit('/web/index.php/auth/login')
      cy.get('input[name="username"]').type("Admin")
      cy.get('input[type="password"]').type("admin123")
      cy.get('button[type="submit"]').click()
              // Assertions
      cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
      cy.contains('Dashboard').should("be.visible") 
      cy.contains('PIM').click()
      cy.contains('Add Employee').click()
      cy.get('input[name="firstName"]').type("Manjutyuioplkjhgfdsaertyuioimnbvcxdvhgfdresfguiklfor")
           cy.get('button[type="submit"]').click()
      cy.contains('Should not exceed 30 characters').should("be.visible")     
    })
    
  
  
  
  
  })