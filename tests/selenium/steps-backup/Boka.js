let { $, sleep } = require('./funcs');

module.exports = function () {

  this.Given(/^that I'm at the search page$/, async function () {
    await helpers.loadPage('http://localhost:8080');
    await sleep(1000)
  });




  this.Given(/^that I am on the Gavin traveling search page$/, async function () {
    // Write code here that turns the phrase above into concrete actions

  });



  this.Given(/^that I am logged in$/, async function () {
    // Write code here that turns the phrase above into concrete actions

  });



  this.Given(/^that i’ve entered dates for my booking$/, async function () {
    // Write code here that turns the phrase above into concrete actions

  });



  this.Then(/^I press the search button$/, async function () {
    // Write code here that turns the phrase above into concrete actions

  });



  this.When(/^i selected a hotel i want$/, async function () {
    // Write code here that turns the phrase above into concrete actions

  });



  this.When(/^i choose the number of <room>$/, async function () {
    // Write code here that turns the phrase above into concrete actions

  });



  this.When(/^i get to the next page,$/, async function () {
    // Write code here that turns the phrase above into concrete actions

  });



  this.When(/^i select <value(\d+)>$/, async function (llback) {
    // Write code here that turns the phrase above into concrete actions

  });



  this.When(/^i click the booking button$/, async function () {
    // Write code here that turns the phrase above into concrete actions

  });


  this.Then(/^i receive the confirmation of my booking$/, async function () {
    // Write code here that turns the phrase above into concrete actions

  });

}

