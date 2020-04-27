Feature: "Authenticate"

  Testing the Authentication
  
  
  Background: "Authenticate"
    Given that i am at the Gavin traveling homepage


  Scenario: "Create account"
    And that there is a register button
    When i press the register button
    And i enter my email in the field email
    And i enter my password in the field password
    And i enter in my phone number in the phone number field
    And i enter my name in the name fields
    And i enter in my security number into the security number field
    And i press create account
    Then i should’ve created an account


  Scenario: "Login to account"
    And that there is a login button
    When i press the login button from start
    And i enter my eMail in the field email
    And i enter my password in the inputfield 
    And i press the login button2
    Then i should be logged in
