Feature: "Booking"

   Feature Description


   Background: "test"
      Given that I am on the Gavin traveling search page
      And that i am logged in
      And that I’ve entered dates for my booking
      When I press the search button
      And I choose number of room
      And I select number of children
      And I select number of small children
      And i select number of adults
      And I click the booking button
      And i choose number of rooms
      When i click Gå till bokning

   Scenario: "Booking"
      When i choose Vafan vill ni ha till
      And i press Boka nu för fan
      Then I receive the confirmation of my booking
