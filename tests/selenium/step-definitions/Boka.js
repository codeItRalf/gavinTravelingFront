let { $, sleep } = require('./funcs');

module.exports = function () {


  this.Given(/^that I am on the Gavin traveling search page$/, async function () {
    await helpers.loadPage('http://localhost:8080');
    await sleep(1000)
  });



  this.Given(/^that I am logged in$/, async function () {
    // Write code here that turns the phrase above into concrete actions
    //We're gonna need backend for this
  });

  // startdate selector searchpage #startDate startpage #startDate


  this.Given(/^that I’ve entered dates for my booking$/, async function () {
    await driver.findElement(By.id("startDate")).sendKeys("2020-06-05")
    await driver.findElement(By.id("enDate")).sendKeys("2020-07-10")
    await sleep(1000)

  });


  this.Then(/^I press the search button$/, async function () {
    let nextBtn = await $('#carousel > div.search_box.w-25 > form > a')
    await sleep(1000)
    await nextBtn.click()

  });


  this.When(/^i selected a hotel i want$/, async function () {
    let withRestaurant = await $('div.form-check:nth-child(4) > input:nth-child(1)')
    await withRestaurant.click()
    let withChildsClub = await $('div.form-check:nth-child(3) > input:nth-child(1)')
    await withChildsClub.click()
    let withNightEntertainment = await $('#inlineCheckbox2')
    await withNightEntertainment.click() // need to uncheck the boxes in order to see available hotels

  });

  this.When(/^i choose the number of <room>$/, async function () {
    let firstSelector = await $('#inputRoom')
    await firstSelector.click()
    let secondSelector = await $('#inputRoom > option:nth-child(3)')
    await secondSelector.click() //i want 2 rooms
  });


  this.When(/^i select information about my baby$/, async function () {
    let inputBaby = await $('#inputBaby')
    await inputBaby.click()
    let inputBabyAmmount = await $('#inputBaby > option:nth-child(3)')
    await inputBabyAmmount.click() //i have babies
  });


  this.When(/^i click the booking button$/, async function () {
    //  let bokaNu = await $('.btn')
    //  await bokaNu.click() //this is boka nu, it's not available atm, we got no data.
  });

  this.Then(/^i receive the confirmation of my booking$/, async function () {
    let controllIfWereOnNextPage = await $('div.col-md-6:nth-child(1) > img:nth-child(1)')
    assert(controllIfWereOnNextPage)

  });

}
