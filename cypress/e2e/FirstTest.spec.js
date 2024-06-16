describe('First Test spec', () => {

  beforeEach('login to app', () => {
    cy.loginToApp()
  })

  it('verify appointment page',   () => {

    cy.log('logged in')
    cy.get('h2').contains('Make Appointment');

    cy.get('select').select('Hongkong CURA Healthcare Center')
    cy.get('#chk_hospotal_readmission').click()
    cy.get('#radio_program_medicaid').click()
    
    cy.get('#txt_visit_date').type('06/06/2020')
    
    cy.get('#txt_comment').click({force: true})
   

    cy.get('#txt_comment').type('Priyanka Demo Project')
   
    cy.get('#btn-book-appointment').click()
    

    cy.get('h2').contains('Appointment Confirmation');
    cy.get('#comment').contains('Priyanka Demo Project');


  })

  // it('Make an appointment or Enter details', () => {

  //   cy.get('select').select('Hongkong CURA Healthcare Center')
  //   cy.get('chk_hospotal_readmission').click()
  //   cy.get('radio_program_medicaid').click()
    
  //   cy.get('txt_visit_date').type('06/06/2020')
  //   cy.get('txt_comment').click({orce: true})

  //   cy.get('txt_comment').type('Priyanka Demo Project')
  //   cy.get('btn-book-appointment').click()

  // })

  // it('Verify Appointment done', () => {

  //   cy.get('h2').contains('Appointment Confirmation');
  //   cy.get('comment').contains('Priyanka Demo Project');
    


  // })

})