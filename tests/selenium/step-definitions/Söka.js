let { $, sleep } = require('./funcs');
module.exports = function () {

  //http://localhost:8080/search/Port%20Jamesonstad/2020-04-24/2020-04-26 Trying out new url, saving the last one

  this.Given(/^that i am on the Gavin traveling search page$/, async function () {
    await helpers.loadPage('http://localhost:8080/search/Gagarin/2020-04-27/2020-04-30');
    await sleep(1000)
  });

  /////////////////////////////////////////////////////////////////////
  // Add adult
  /////////////////////////////////////////////////////////////////////
  this.Given(/^that there is a add adult button$/, async function () {
    await driver.findElement(By.id("inputAdult"))
  });

  this.When(/^i click the add adult button$/, async function () {
    await driver.findElement(By.id("inputAdult")).click()
  });

  this.When(/^i choose 1 adults$/, async function () {
    let dropDownBox = await $('#inputAdult > option:nth-child(2)');
    await dropDownBox.click();
  });

  this.Then(/^the number of adults should should be set to 1$/, async function () {
    let dropDownOption = await driver.findElement(By.id("inputAdult")).getAttribute("value")
    assert.equal(dropDownOption, '1', '== coerces values to strings');
  });

  /////////////////////////////////////////////////////////////////////
  // Add children
  /////////////////////////////////////////////////////////////////////
  this.Given(/^that there is a add children button$/, async function () {
    await driver.findElement(By.id("inputChild"))
  });

  this.When(/^i click the add children button$/, async function () {
    await driver.findElement(By.id("inputChild")).click()
  });

  this.When(/^i choose 1 children$/, async function () {
    let dropDownBox = await $('#inputChild > option:nth-child(3)');
    await dropDownBox.click();
  });

  this.Then(/^the number of children should should be set to 1$/, async function () {
    let dropDownOption = await driver.findElement(By.id("inputChild")).getAttribute("value")
    assert.equal(dropDownOption, '1', '== coerces values to strings');
  });
  /////////////////////////////////////////////////////////////////////
  // Add young children - #inputBaby
  /////////////////////////////////////////////////////////////////////
  this.Given(/^that there is a add young children button$/, async function () {
    await driver.findElement(By.id("inputBaby"))
  });

  this.When(/^i click the add young children button$/, async function () {
    await driver.findElement(By.id("inputBaby")).click()
  });

  this.When(/^i choose 1 young children$/, async function () {
    let dropDownBox = await $('#inputBaby > option:nth-child(3)');
    await dropDownBox.click();
  });

  this.Then(/^the number of young children should should be set to 1$/, async function () {
    let dropDownOption = await driver.findElement(By.id("inputBaby")).getAttribute("value")
    assert.equal(dropDownOption, '1', '== coerces values to strings');
  });
  /////////////////////////////////////////////////////////////////////
  // Search for activities - pool
  /////////////////////////////////////////////////////////////////////
  this.Given(/^that there are checkbox for pool$/, async function () {
    await driver.findElement(By.css("#inlineCheckbox1"))
  });

  this.When(/^i click the box for pool$/, async function () {
    await driver.findElement(By.id("inlineCheckbox1")).click()
  });

  this.When(/^i press the search button to get results with pool$/, async function () {
    // Write code here that turns the phrase above into concrete actions
  });

  this.Then(/^the search result should be hotels with pool$/, async function () {
    
  });

  /////////////////////////////////////////////////////////////////////
  //Search for activities - restaurant
  /////////////////////////////////////////////////////////////////////
  this.Given(/^that there are checkbox for restaurant$/, async function () {
    await driver.findElement(By.css("#inlineCheckbox4"))
  });

  this.When(/^i click the box for restaurant$/, async function () {
    await driver.findElement(By.id("inlineCheckbox4")).click()
    await sleep(100)

    //#inlineCheckbox3
  });

  this.Then(/^the search result should be hotels with restaurant$/, async function () {
    
  });

  /////////////////////////////////////////////////////////////////////
  //Search for activities - children club
  /////////////////////////////////////////////////////////////////////
  this.Given(/^that there are checkbox for children club$/, async function () {
    await driver.findElement(By.id("inlineCheckbox3"))
  });

  this.When(/^i click the box for children club$/, async function () {
    await driver.findElement(By.id("inlineCheckbox3")).click()
  });

  this.Then(/^the search result should be hotels with children club$/, async function () {
    
  });

  /////////////////////////////////////////////////////////////////////
  //Search for activities - evening entertainment
  /////////////////////////////////////////////////////////////////////
  this.Given(/^that there are checkbox for evening entertainment$/, async function () {
    await driver.findElement(By.id("inlineCheckbox2"))
  });

  this.When(/^i click the box for evening entertainment$/, async function () {
    await driver.findElement(By.id("inlineCheckbox2")).click()
  });

  this.Then(/^the search result should be hotels with evening entertainment$/, async function () {
    
  });

  /////////////////////////////////////////////////////////////////////
  //Search based on city
  /////////////////////////////////////////////////////////////////////
  this.Given(/^that there are a dropdown for city$/, async function () {
    await driver.findElement(By.id("City"))
  });

  this.When(/^i chose "([^"]*)" in the drop down menu$/, async function () {
    await driver.findElement(By.id("City > option:nth-child(2)")).click()
  });

  this.Then(/^i should get a result with "([^"]*)"$/, async function () {

  });

  this.Then(/^i should get a result with <city>$/, async function () {

  });

  /////////////////////////////////////////////////////////////////////
  //Search based on start and end date
  /////////////////////////////////////////////////////////////////////
  this.When(/^i enter in "([^"]*)" and "([^"]*)"$/, async function (startDate, endDate) {
    await driver.findElement(By.id("startDate")).click()
    await driver.findElement(By.id("startDate")).sendKeys(startDate)
    await driver.findElement(By.id("enDate")).click()
    await driver.findElement(By.id("enDate")).sendKeys(endDate)
    await sleep(100)
  });

  this.Then(/^i should get the result of all available rooms during those dates$/, async function (startDate, endDate) {

  });

}

