let { $, sleep } = require('./funcs');

module.exports = function () {

    this.Given(/^that i am at the Gavin traveling homepage$/, async function () {
        await helpers.loadPage('http://localhost:8080');
        await sleep(1000)
    });


    //Create account

    this.Given(/^that there is a register button$/, async function () {
        let registerButton = await $('#navbarTogglerDemo01 > ul.nav.navbar-nav.flex-row.justify-content-between.ml-auto > li:nth-child(1)')
        assert(registerButton, "Expected to find the register button, found " + registerButton);
        await sleep(50)
    });

    this.When(/^i press the register button$/, async function () {
        let registerButton = await $('#navbarTogglerDemo01 > ul.nav.navbar-nav.flex-row.justify-content-between.ml-auto > li:nth-child(1)')
        await registerButton.click()
    });

    this.When(/^i enter my email in the field email$/, async function () {
        let mailInputField = await $('#RegisterFormEmail')
        await mailInputField.sendKeys('exxample@exaxmple.com')
    });


    this.When(/^i enter my password in the field password$/, async function () {
        let passwordField = await $('#RegisterFormPassword')
        await passwordField.click()
        await passwordField.sendKeys('qwerty')
        assert(passwordField)
    });

    this.When(/^i enter in my phone number in the phone number field$/, async function () {
        //This is null for now, there's no field for this
        let phoneInput = await $('#RegisterFormTel')
        await phoneInput.sendKeys('0723221160')
        await sleep(500)
    });


    this.When(/^i enter my name in the name fields$/, async function () {
        let firstNameInput = await $('#RegisterFormFirstName')
        await firstNameInput.sendKeys('John')
        let lastNameInput = await $('#RegisterFormLastName')
        await lastNameInput.sendKeys('Doe')
    });


    this.When(/^i enter in my security number into the security number field$/, async function () {
        let personNummerInput = await $('#RegisterFormPerson')
        await personNummerInput.sendKeys('19920505-0505')
    });


    this.When(/^i press create account$/, async function () {
        let createButton = await $('#app > div > div > button')
        await createButton.click()
        await sleep(5000)
    });

    this.Then(/^i should’ve created an account$/, async function () {
        //Troligtvis kommer vi till ett bekräftelsestadie snart.
    });


    //Login


    this.Given(/^that there is a login button$/, async function () {
        let loginButton = await $('#navbarTogglerDemo01 > ul.nav.navbar-nav.flex-row.justify-content-between.ml-auto > li:nth-child(2) > a > a')
        await loginButton.click()
    });


    this.When(/^i press the login button from start$/, async function () {
        let loginButton = await $('#navbarTogglerDemo01 > ul.nav.navbar-nav.flex-row.justify-content-between.ml-auto > li:nth-child(2) > a > a')
        await loginButton.click()
    });

    this.When(/^i enter my eMail in the field email$/, async function () {
        let mailField = await $('#login > div > input[type=text]:nth-child(2)')
        await mailField.sendKeys('test@test.se')
    });




    this.When(/^i enter my password in the inputfield$/, async function () {
        let passwordInput = await $('#login > div > input[type=password]:nth-child(3)')
        await passwordInput.sendKeys('asdasdas')
    });


    this.When(/^i press the login button2$/, async function () {
        let loginButton = await $('#login > div > button')
        await loginButton.click()
    });

    this.When(/^i should be logged in$/, async function () {
        //Empty for now, confirmation coming later
    });
}

