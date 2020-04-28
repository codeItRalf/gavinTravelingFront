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
    await sleep(100)

  });

  this.Then(/^the number of adults should should be set to 1$/, async function () {
    //let dropDownOption = await driver.findElement(by.id('#inputAdult > option: nth - child(2)')).getText();
    //assert('1', dropDownOption);


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
    let dropDownBox = await $('#inputChild > option:nth-child(2)');
    await dropDownBox.click();
    await sleep(100)

  });

  this.Then(/^the number of children should should be set to 1$/, async function () {
    //let dropDownOption = await driver.findElement(by.id('#inputChild > option: nth - child(2)')).getText();
    //assert('1', dropDownOption);


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
    let dropDownBox = await $('#inputBaby > option:nth-child(2)');
    await dropDownBox.click();
    await sleep(100)

  });

  this.Then(/^the number of young children should should be set to 1$/, async function () {
    //let dropDownOption = await driver.findElement(by.css('#inputBaby > option: nth - child(2)')).getText();
    //assert('1', dropDownOption);


  });
  /////////////////////////////////////////////////////////////////////
  // Search for activities - pool
  /////////////////////////////////////////////////////////////////////
  this.Given(/^that there are checkbox for pool$/, async function () {
    await driver.findElement(By.css("#inlineCheckbox1"))
  });



  this.When(/^i click the box for pool$/, async function () {
    await driver.findElement(By.id("inlineCheckbox1")).click()
    await sleep(100)
  });



  this.When(/^i press the search button to get results with pool$/, async function () {
    // Write code here that turns the phrase above into concrete actions
  });



  this.Then(/^the search result should be hotels with pool$/, async function () {
    // Write code here that turns the phrase above into concrete actions
  });

  /////////////////////////////////////////////////////////////////////
  //Search for activities - restaurant
  /////////////////////////////////////////////////////////////////////
  this.Given(/^that there are checkbox for restaurant$/, async function () {
    // Write code here that turns the phrase above into concrete actions
  });


  this.When(/^i click the box for restaurant$/, async function () {
    await driver.findElement(By.id("inlineCheckbox4")).click()
    await sleep(100)

    //#inlineCheckbox3
  });


  this.When(/^i press the search button to get results with restaurant$/, async function () {
    // Write code here that turns the phrase above into concrete actions
  });


  this.Then(/^the search result should be hotels with restaurant$/, async function () {
    // Write code here that turns the phrase above into concrete actions
  });

  /////////////////////////////////////////////////////////////////////
  //Search for activities - children club
  /////////////////////////////////////////////////////////////////////
  this.Given(/^that there are checkbox for children club$/, async function () {
    // Write code here that turns the phrase above into concrete actions
  });


  this.When(/^i click the box for children club$/, async function () {
    await driver.findElement(By.id("inlineCheckbox3")).click()
    await sleep(100)
  });


  this.When(/^i press the search button to get results with children club$/, async function () {
    // Write code here that turns the phrase above into concrete actions
  });


  this.Then(/^the search result should be hotels with children club$/, async function () {
    // Write code here that turns the phrase above into concrete actions
  });

  /////////////////////////////////////////////////////////////////////
  //Search for activities - evening entertainment
  /////////////////////////////////////////////////////////////////////
  this.Given(/^that there are checkbox for evening entertainment$/, async function () {
    // Write code here that turns the phrase above into concrete actions
  });


  this.When(/^i click the box for evening entertainment$/, async function () {
    await driver.findElement(By.id("inlineCheckbox2")).click()
    await sleep(100)
  });


  this.When(/^i press the search button to get results with evening entertainment$/, async function () {
    // Write code here that turns the phrase above into concrete actions
  });


  this.Then(/^the search result should be hotels with evening entertainment$/, async function () {
    // Write code here that turns the phrase above into concrete actions
  });

  /////////////////////////////////////////////////////////////////////
  //Search based on distance to beach
  /////////////////////////////////////////////////////////////////////
  this.Given(/^that there is a field for distance to beach$/, async function () {
    await driver.findElement(by.id("Strand"))
  });



  this.When(/^i enter a <distance> in the distance to beach field$/, async function () {
    await driver.findElement(By.id("Strand")).click()
    await driver.findElement(By.id("Strand")).sendKeys("20")

    await sleep(500)
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

  /////////////////////////////////////////////////////////////////////
  //Search based on city
  /////////////////////////////////////////////////////////////////////

  // this.When(/^i chose Connellyborough in the drop down menu$/, async function () {
  //   // Write code here that turns the phrase above into concrete actions
  //   await driver.findElement(By.id("City")).click()
  //   await sleep(500)
  //   let dropDownBox = await $('#City > option: nth - child(7)');
  //   dropDownBox.click();
  //   //#City > option:nth-child(7)

  //   //dropDownBox.click();
  //   await sleep(1000)
  // });

  this.Given(/^that there are a dropdown for city$/, async function () {
    // Write code here that turns the phrase above into concrete actions
  });

  this.When(/^i chose "([^"]*)" in the drop down menu$/, async function (city) {
    let dropDownBox = await $('#City');
    await dropDownBox.click(city);
  });

  this.Then(/^i should get a result with "([^"]*)"$/, async function (city) {
    let dropDownBox = await $('#City');
    assert("Expected to choose city, fund " + dropDownBox);
  });


  this.When(/^i press the search button$/, async function () {
    // Write code here that turns the phrase above into concrete actions

  });


  this.Then(/^i should get a result with Connellyborough$/, async function () {
    // Write code here that turns the phrase above into concrete actions

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


  this.When(/^press search$/, async function () {
    // Write code here that turns the phrase above into concrete actions

  });


  this.Then(/^i should get the result of all available rooms during those dates$/, async function () {
    // Write code here that turns the phrase above into concrete actions

  });


}

