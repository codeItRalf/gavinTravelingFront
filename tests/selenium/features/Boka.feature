Feature: "Booking"

   Feature Description


   Background: "test"
      Given that I am on the Gavin traveling search page
      And that I am logged in
      And that i’ve entered dates for my booking
      Then I press the search button


   Scenario:
      When i selected a hotel i want
      And i choose the number of <room>
      And i select information about my baby
      And i click the booking button
      Then i receive the confirmation of my booking


