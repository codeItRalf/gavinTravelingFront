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
/*

  /////////////////////////////////////////////////////////////////////
  //Search based on distance to beach
  /////////////////////////////////////////////////////////////////////
  this.Given(/^that there is a field for distance to beach$/, async function () {
    await driver.findElement(by.id("Strand"))
  });

  this.When(/^i enter a <distance> in the distance to beach field$/, async function () {
    await driver.findElement(By.id("Strand")).click()
    await driver.findElement(By.id("Strand")).sendKeys("20")

    await sleep(2000)
  });

  this.When(/^press the search button to get results based on distance to beach$/, async function () {
    // Write code here that turns the phrase above into concrete actions
  });

  this.When(/^i enter a "([^"]*)" in the field$/, async function (distance) {
    let dragCircle = await $('#Strand')
    await dragCircle.click(distance) //Test passes but IDK if selenium acually does this
  });

  this.Then(/^the result should only be hotels within the "([^"]*)"$/, async function (distance) {
    let resulfOfDragCircle = await $('div.form-row:nth-child(3) > div:nth-child(2) > span:nth-child(3)')
    assert("This is supposed to be " + distance + "got " + resulfOfDragCircle)
  });

  this.Then(/^the result should only be hotels within the <distance> to beach$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  /////////////////////////////////////////////////////////////////////
  //Search based on distance to downtown
  /////////////////////////////////////////////////////////////////////
  this.Given(/^that there is a field for distance to downtown$/, async function () {
    await driver.findElement(by.id("Centrum"))
  });

  this.When(/^i enter a <distance> in the distance to downtown field$/, async function () {
    await driver.findElement(By.css("#Centrum")).sendKeys("20")
    await driver.findElement(By.css("#Centrum")).click()
    await sleep(100)
  });

  this.When(/^press the search button to get results based on distance to downtown$/, async function () {
    // Write code here that turns the phrase above into concrete actions
  });

  this.Then(/^the result should only be hotels within the <distance> to downtown$/, async function () {
    // Write code here that turns the phrase above into concrete actions
  });
*/
