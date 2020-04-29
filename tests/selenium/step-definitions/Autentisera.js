let { $, sleep } = require('./funcs');

module.exports = function () {

    this.Given(/^that i am at the Gavin traveling homepage$/, async function () {
        await helpers.loadPage('http://localhost:8080');
        await sleep(1000)
    });


    //Create account

    this.Given(/^that there is a register button$/, async function () {
        let registerButton = await $('.nav > li:nth-child(1)')
        assert(registerButton, "Expected to find the register button, found " + registerButton);
        await sleep(50)
    });

    this.When(/^i press the register button$/, async function () {
        let registerButton = await $('.nav > li:nth-child(1)')
        await registerButton.click()
    });

    this.When(/^i enter my email in the field for create account$/, async function () {
        let mailInputField = await $('#RegisterFormEmail')
        await mailInputField.sendKeys('example@example.com')
    });


    this.When(/^i enter my password in the field password$/, async function () {
        let passwordField = await $('#RegisterFormPassword')
        await passwordField.sendKeys('qwerty')
        assert(passwordField)
    });

    this.When(/^i enter in my phone number in the phone number field$/, async function () {
        let phoneNumber = await $('#RegisterFormTel')
        await phoneNumber.sendKeys('0700-000000')
        assert(phoneNumber)
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
        let createButton = await $('.btn')
        await createButton.click()
        await sleep(1000)
    });


    this.When(/^i press registrera mig$/, async function () {
        await driver.findElement(By.css("#app > div > div > div:nth-child(4) > div > div > div > div > div.modal-footer > button.btn.btn-primary")).click()
        await sleep(1000)

    });

    this.Then(/^i should’ve created an account$/, async function () {
        //Troligtvis kommer vi till ett bekräftelsestadie snart.
    });


    //Login


    this.Given(/^that there is a login button$/, async function () {
        let loginButton = await $('.nav > li:nth-child(2)')
        assert(loginButton)
        await sleep(500)
    });


    this.When(/^i press the login button from start$/, async function () {
        let loginButton = await $('.nav > li:nth-child(2)')
        await loginButton.click()
    });

    this.When(/^i enter my username in login$/, async function () {
        await driver.findElement(By.id("InputEmail")).sendKeys("test@mail.com")
        // let username = await $('#login > div:nth-child(1) > input:nth-child(2)')
        // await username.sendKeys('test@mail.com')
        // assert(username)
        await sleep(1000)
    });


    this.When(/^i enter my password in the inputfield$/, async function () {
        await driver.findElement(By.id("InputPassword")).sendKeys("user")
    });


    this.When(/^i press the login button2$/, async function () {
        let loginButton = await $('#login > div:nth-child(1) > button:nth-child(4)')
        await loginButton.click()
        await sleep(1000)

    });

    this.When(/^i should be logged in$/, async function () {

        /* let loggedInConfrim = await $('#user > a:nth-child(3)')
         assert(loggedInConfrim, "Expected to find confrimation, found " + loggedInConfirm);
         await sleep(50) */ //login is unavailable atm
        //#user > a
    });
}

