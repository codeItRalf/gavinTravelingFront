let { $, sleep } = require('./funcs');

module.exports = function () {

  this.Given(/^that I am on the Gavin traveling search page$/, async function () {
    await helpers.loadPage('http://localhost:8080');
  });

  this.Given(/^that i am logged in$/, async function () {
    await driver.findElement(By.id("login")).click()
    await sleep (500)

    await driver.findElement(By.id("InputEmail1")).sendKeys("test@mail.com")
    await sleep (500)
      let emailInputValue = await driver.findElement(By.id("InputEmail1")).getAttribute("value");
      //console.log(emailInputValue)
      assert.equal(emailInputValue, 'test@mail.com', 'InputEmail1 == test@mail.com');

    await driver.findElement(By.id("InputPassword")).sendKeys("user")
    await sleep (500)
      let passwordInputValue = await driver.findElement(By.id("InputPassword")).getAttribute("value");
      //console.log(passwordInputValue)
      assert.equal(passwordInputValue, 'user', 'passwordInputValue == user');

    await driver.findElement(By.id("loginAcc")).click()
    await sleep (500)
      let loggedIn = await driver.findElement(By.id("logout"))
      loggedIn = true;
      assert.isTrue(loggedIn, "inloggad");

    await driver.findElement(By.id("home")).click()
    await sleep (500)
      let homePage = await driver.findElement(by.id("sök"))
      homePage = true;
      assert.isTrue(homePage, "är på start");
  });

  this.Given(/^that I’ve entered dates for my booking$/, async function () {
    await driver.findElement(By.id("startDate")).sendKeys("2020-06-05")
    await sleep (500)
      let startDateSet = await driver.findElement(By.id("startDate")).getAttribute("value");
      //console.log(startDateSet)
      assert.equal(startDateSet, '2020-06-05', 'startDateSet == 2020-06-05');

    await driver.findElement(By.id("enDate")).sendKeys("2020-07-10")
    await sleep (500)
      let enDateSet = await driver.findElement(By.id("enDate")).getAttribute("value");
      //console.log(enDateSet)
      assert.equal(enDateSet, '2020-07-10', 'enDateSet == 2020-07-10');
  });

  this.Then(/^I press the search button$/, async function () {
    await driver.findElement(By.id("sök")).click()
      let searchPageFound = await driver.findElement(by.id("searchPage"))
      searchPageFound = true;
      assert.isTrue(searchPageFound, "found the search page");
  });

  this.When(/^I choose number of room$/, async function () {
    await driver.findElement(By.id("inputRoom")).click()
      let dropDownBox = await driver.findElement(By.id("inputRoom3"))
      await dropDownBox.click();
     
      let valueOfChoise = await driver.findElement(By.id("inputRoom3")).getAttribute("value")
      assert.equal(valueOfChoise, 3, "valueOfChoise == 3");
  });

  this.When(/^I select number of children$/, async function () {
    await driver.findElement(By.id("inputChild")).click()
    let dropDownBox = await driver.findElement(By.id("inputChild1"));
    await dropDownBox.click();

    let valueOfChoise = await driver.findElement(By.id("inputChild1")).getAttribute("value")
    assert.equal(valueOfChoise, 1, "inputChild1 == 1");
  });

  this.When(/^I select number of small children$/, async function () {
    await driver.findElement(By.id("inputBaby")).click()
    let dropDownBox = await driver.findElement(By.id("inputBaby1"));
    await dropDownBox.click();

    let valueOfChoise = await driver.findElement(By.id("inputChild1")).getAttribute("value")
    assert.equal(valueOfChoise, 1, "inputBaby1 == 1");
  });

  this.When(/^i select number of adults$/, async function () {
    await driver.findElement(By.id("inputAdult")).click()
    let dropDownBox = await driver.findElement(By.id("inputAdult3"));
    await dropDownBox.click()

    let valueOfChoise = await driver.findElement(By.id("inputAdult3")).getAttribute("value")
    assert.equal(valueOfChoise, 3, "inputAdult3 == 3");
  });

  this.When(/^I click the booking button$/, async function () {
    await driver.findElement(By.css("[href*='/hotel/1']")).click();
      let HotelId1Found = await driver.findElement(by.id("hotelID")).getAttribute("value")
      assert.equal(HotelId1Found, 1, "HotelId1Found == 1");
  });

  this.When(/^i choose number of rooms$/, async function () {
    await driver.findElement(by.id("antalEnkelrum")).clear()
    await sleep (500)
      await driver.findElement(By.id("antalEnkelrum")).sendKeys("1")
      let antalEnkel = await driver.findElement(by.id("antalEnkelrum")).getAttribute("value")
      //console.log(antalEnkel)
      assert.equal(antalEnkel, 1, "antalEnkel == 1");

    await driver.findElement(by.id("antalDubbelrum")).clear()
    await sleep (500)
      await driver.findElement(By.id("antalDubbelrum")).sendKeys("1")
      let antalDubbel = await driver.findElement(by.id("antalDubbelrum")).getAttribute("value")
      //console.log(antalDubbel)
      assert.equal(antalDubbel, 1, "antalDubbel == 1");

    await driver.findElement(by.id("antalFamiljerum")).clear()
    await sleep (500)
      await driver.findElement(By.id("antalFamiljerum")).sendKeys("1")
      let antalFamilje = await driver.findElement(by.id("antalFamiljerum")).getAttribute("value")
      //console.log(antalFamilje)
      assert.equal(antalFamilje, 1, "antalFamilje == 1");
  });

  this.When(/^i click Gå till bokning$/, async function () {
    await driver.findElement(By.linkText("Gå till bokning")).click()
  });

//bokning

  this.When(/^i choose Vafan vill ni ha till$/, async function () {
    await driver.findElement(by.id("extraEnkel")).clear()
    await sleep (500)
      await driver.findElement(By.id("extraEnkel")).sendKeys("1")
      let extraEnkel = await driver.findElement(by.id("extraEnkel")).getAttribute("value")
      //console.log(extraEnkel)
      assert.equal(extraEnkel, 1, "extraEnkel == 1");

    await driver.findElement(by.id("extraDubbel")).clear()
    await sleep (500)
      await driver.findElement(By.id("extraDubbel")).sendKeys("1")
      let extraDubbel = await driver.findElement(by.id("extraDubbel")).getAttribute("value")
      //console.log(extraDubbel)
      assert.equal(extraDubbel, 1, "extraDubbel == 1");

    await driver.findElement(by.id("extraFamilje")).clear()
    await sleep (500)
      await driver.findElement(By.id("extraFamilje")).sendKeys("1")
      let extraFamilje = await driver.findElement(by.id("extraFamilje")).getAttribute("value")
      //console.log(extraFamilje)
      assert.equal(extraFamilje, 1, "extraFamilje == 1");

    await driver.findElement(by.id("halvPen")).clear()
    await sleep (500)
      await driver.findElement(By.id("halvPen")).sendKeys("1")
      let halvPen = await driver.findElement(by.id("halvPen")).getAttribute("value")
      //console.log(halvPen)
      assert.equal(halvPen, 1, "halvPen == 1");

    await driver.findElement(by.id("helPen")).clear()
    await sleep (500)
      await driver.findElement(By.id("helPen")).sendKeys("1")
      let helPen = await driver.findElement(by.id("helPen")).getAttribute("value")
      //console.log(helPen)
      assert.equal(helPen, 1, "helPen == 1");

    await driver.findElement(by.id("allPen")).clear()
    await sleep (500)
      await driver.findElement(By.id("allPen")).sendKeys("1")
      let allPen = await driver.findElement(by.id("allPen")).getAttribute("value")
      //console.log(allPen)
      assert.equal(allPen, 1, "allPen == 1");
  });

  this.When(/^i press Boka nu för fan$/, async function () {
    await driver.findElement(By.id("bokaffs")).click()
      let checkClick = await driver.findElement(By.id("Bokningsbekräftelse")).getText()
      //console.log(checkClick)
      assert.equal(checkClick, "Bokningsbekräftelse", "checkClick == Bokningsbekräftelse");
  });

  this.Then(/^I receive the confirmation of my booking$/, async function () {
    await driver.findElement(By.id("confirmYourBooking"))
      let checkPage = await driver.findElement(By.id("Bokningsbekräftelse")).getText()
      //console.log(checkPage)
      assert.equal(checkPage, "Bokningsbekräftelse", "checkPage == Bokningsbekräftelse");
  });
}

