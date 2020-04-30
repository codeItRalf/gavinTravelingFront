let { $, sleep } = require('./funcs');

module.exports = function () {


  this.Given(/^that I am on the Gavin traveling search page$/, async function () {
    await helpers.loadPage('http://localhost:8080');
    await sleep(1000)
  });



  this.Given(/^that i am logged in$/, async function () {
    let loginButton = await $('.nav > li:nth-child(2)')
    await loginButton.click()
    await driver.findElement(By.id("InputEmail")).sendKeys("test@mail.com")
    await driver.findElement(By.id("InputPassword")).sendKeys("user")
    let loginButton1 = await $('#login > div:nth-child(1) > button:nth-child(4)')
    await loginButton1.click()
    let home = await $('#navbarTogglerDemo01 > ul.navbar-nav.mr-auto.mt-2.mt-lg-0 > li > a')
    await home.click()
    await sleep(1000)
  });



  this.Given(/^that I’ve entered dates for my booking$/, async function () {
    await driver.findElement(By.id("startDate")).sendKeys("2020-06-05")
    await driver.findElement(By.id("enDate")).sendKeys("2020-07-10")
    await sleep(1000)

  });


  this.Then(/^I press the search button$/, async function () {
    await driver.findElement(By.tagName(".btn-primary")).click()
    await sleep(1000)
  });

  this.When(/^I choose number of room$/, async function () {
    await driver.findElement(By.id("inputRoom")).click()
    let dropDownBox = await $('#inputRoom > option:nth-child(2)');
    await dropDownBox.click();
    await sleep(100)

  });

  this.When(/^I select number of children$/, async function () {
    await driver.findElement(By.id("inputChild")).click()
    let dropDownBox = await $('#inputChild > option:nth-child(3)');
    await dropDownBox.click();
    await sleep(100)

  });

  this.When(/^I select number of small children$/, async function () {
    await driver.findElement(By.id("inputBaby")).click()
    let dropDownBox = await $('#inputBaby > option:nth-child(3)');
    await dropDownBox.click();
    await sleep(100)
  });

  this.When(/^i select number of adults$/, async function () {
    await driver.findElement(By.id("inputAdult")).click()
    let dropDownBox = await $('#inputAdult > option:nth-child(4)')
    await dropDownBox.click()
    await sleep(100)

  });

  this.When(/^I click the booking button$/, async function () {
    await driver.findElement(By.linkText("Boka Nu")).click()
    await sleep(1000)
  });

  this.When(/^i choose number of rooms$/, async function () {
    // Write code here that turns the phrase above into concrete actions
    await driver.findElement(By.className("w-75")).sendKeys("1")

    await sleep(1000)

    //#app > div > div.card.mx - auto > div: nth - child(1) > div.col - md - 3.col - 12.mx - auto.my - auto > div: nth - child(2) > input
  });

  this.When(/^i click Gå till bokning$/, async function () {
    await driver.findElement(By.linkText("Gå till bokning")).click()
    await sleep(1000)
  });

  this.When(/^i choose Vafan vill ni ha till$/, async function () {
    await driver.findElement(By.className("w-25")).sendKeys("1")
    await sleep(1000)
  });

  this.When(/^i press Boka nu för fan$/, async function () {
    await driver.findElement(By.className("btn btn-primary")).click()
    await sleep(1000)
  });

  this.When(/^i press Bekräfta bokning$/, async function () {
    await driver.findElement(By.css("html body.modal-open div#app div div.container-fluid.bgimage div#confirm.modal.fade.show div.modal-dialog div.modal-content div.modal-footer button.btn.btn-primary")).click()
    await sleep(1000)
  });

  this.Then(/^I receive the confirmation of my booking$/, async function () {
    let button = await $('#confirm > div > div > div.modal-footer > a > button')
    assert(button, 'Expected to prove confirmation')

  });

}

