let { $, sleep } = require('./funcs');

module.exports = function () {

  this.Given(/^that I'm at the search page$/, async function () {
    await helpers.loadPage('http://localhost:8080');
    await sleep(1000)
  });

  this.Given(/^i've entered start and end date$/, async function () {
    await driver.findElement(By.id("startDate")).click()
    await driver.findElement(By.id("startDate")).sendKeys("2020-05-05")
    await driver.findElement(By.id("enDate")).click()
    await driver.findElement(By.id("enDate")).sendKeys("2020-05-15")
    await sleep(3500)
  });


  this.Given(/^pressed the search button$/, async function () {
    //we've got auto search bro
  });

  this.Given(/^that there is a sorting button for ascending and descending prices$/, async function () {
    let filter = await $('#inputState')
    assert('expected to find the the dropdown, found ' + filter)
  });


  this.When(/^i press  the sorting button$/, async function () {
    let filterButton = await $('#inputState')
    filterButton.click()
    assert('expected click the dropdown, found ' + filterButton)
  });

  this.Then(/^the result should change from ascending to descending prices$/, async function () {
    //awaiting data
  });


  this.Given(/^pressed the search button2$/, async function () {
    //Got sweet auto search, good UX for users :D
  });


  this.Given(/^that there is a filter for rating$/, async function () {
    let theFilters = await $('#inputState')
    await theFilters.click()
  });


  this.When(/^i select highest rating$/, async function () {
    let ratingFilter = await $('#inputState > option:nth-child(4)')
    await ratingFilter.click()
  });


  this.Then(/^i want to get a result based on selected rating$/, async function () {
    //more data coming later
  });


  this.When(/^i enter a <distance> in the field$/, async function () {
    // Write code here that turns the phrase above into concrete actions
  });


  this.Then(/^the result should only be hotels within the <distance>$/, async function () {
    // Write code here that turns the phrase above into concrete actions
  });


}

