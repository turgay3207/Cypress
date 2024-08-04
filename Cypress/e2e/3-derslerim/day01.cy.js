describe("Amazon Page",()=>{

it("User visited on the amazon page",()=>{

cy.visit("https://www.amazon.com")
})

it('User have to control on the page', () => {

    // cy.xpath("//input[@id='sp-cc-accept']").click();
 
});


it('User click to search area', () => {

    cy.get('#twotabsearchtextbox').click();

});

it('user wrote Samsung in to searchbox', () => {

cy.get('#twotabsearchtextbox').type('Samsung S23 Ultra{Enter}');
     

});


it('user selects first product', () => {
    
    cy.get('.s-result-list .s-result-item').eq(0).click();

});



})