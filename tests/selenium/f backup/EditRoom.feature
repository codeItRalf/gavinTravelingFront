Feature: "Edit bookings"

    Feature Description

    Background: "When a booking have already taken place"
        Given that I am on the Gavin traveling website
        And I have an account and that I am logged in
        And I can see my bookings

    Scenario: "Show my bookings"
        When I’m in my bookings
        Then I should be able to see a summary of my bookings


    Scenario: "Change booked rooms"
        When I’m in my bookings
        And I want to edit the amount of rooms in my booking
        And I press edit
        And I change the amount of rooms booked
        And the price should change accordingly
        Then I press save


    Scenario: "See price change when changing number of rooms"
        When I’m in my bookings
        And I press edit
        And I change the number of rooms in my booking
        And the price should change accordingly
        Then I press save


    Scenario: "Edit the amount of people in my bookings"
        When I’m in my bookings
        And I press edit
        And I change the amount of people in my booking
        And the price should change accordingly
        Then I press save


    Scenario: "Add or remove extras"
        When I’m in my bookings
        And I press edit
        And I change the amount in <extra säng>, <header1>, <header2>, and <header3> .
        And the price should change accordingly
        Then I press save



    Scenario: "Change dates for a booking"
        When I’m in my bookings
        And I press edit
        And I change the <startDate> and <endDate> in my booking
        And the price should change accordingly
        Then I press save


    Scenario: "As a user i want to be able to cancel my booking"
        And there is a cancel button for my booking
        When i press the cancel button for my booking
        And i get a confirmation to cancel my booking with yes/no
        And i press yes
        And receive a message confirming that i’ve cancelled my booking
        Then my booking should be cancelled
