describe('UITestingPlaygroundTest', () => {
    it('Переход на страницу и проверка заголовка', () => {
        cy.visit('http://uitestingplayground.com');
        cy.title().should('eq', 'UI Test Automation Playground');
    });
});