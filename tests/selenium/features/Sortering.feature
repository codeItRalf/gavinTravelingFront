Feature: "Sorting search results"

   Feature Description

   Background:
      Given that i am on the Gavin traveling search page
      And i've entered start and end date
      And pressed the search button


   Scenario: As a user i want to sort my search with ascending and descending prices
      Given that there is a sorting button for ascending and descending prices
      When i press  the sorting button
      Then the result should change from ascending to descending prices


   Scenario: As a user i want to be able to filter my searches with rating
      Given that there is a filter for rating
      When i select highest rating
      And press search
      Then i want to get a result based on selected rating


   Scenario Outline: As a user i want to search for hotels based on distance to the beach
      Given that there is a field for distance to beach
      When i enter a <distance> in the field
      Then the result should only be hotels within the <distance>

      Examples:
         | distance |
         | "1"      |
         | "99"     |
         | "200"    |

   Scenario: As a user i want to search for hotels based on distance to downtown
      Given that there is a field for distance to downtown
      When i enter a <distance> in the field
      Then the result should only be hotels within the <distance>
