Feature('login').tag('regression');

Before(({I}) => {
    I.amOnPage('/')
})

Scenario('login with valid credentials', ({ I }) => {
    I.see('LOGIN Panel')
    I.fillField('txtUsername', 'opensourcecms')
    I.fillField('txtPassword', 'opensourcecms')
    I.click('#btnLogin')
    I.see('Welcome Admin')
});

Scenario('Login with invalid password', ({ I }) => {
    I.see('LOGIN Panel')
    I.fillField('txtUsername', 'opensourcecms')
    I.fillField('txtPassword', 'wrong_password')
    I.click('#btnLogin')
    I.see('Invalid credentials')
});

// Test with parametrization
Data(function*() {
    yield {login: 'opensourcecms', password: '', expectedResult: 'Password cannot be empty'};
    yield {login: '', password: 'opensourcecms', expectedResult: 'Username cannot be empty'};
}).Scenario('Login with empty field', ({ I, current }) => {
    I.see('LOGIN Panel')
    I.fillField('txtUsername', current.login)
    I.fillField('txtPassword', current.password)
    I.click('#btnLogin')
    I.see(current.expectedResult)
});