class DashboardPage {
    // closeButton(){
    //     return cy.xpath('//*[@id="wiz-iframe-intent"]').document('html').find('span')
    // }
    
    labelDashboard(){
        return cy.contains('Dashboard')
    }
  }
  
  export default DashboardPage