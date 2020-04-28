Feature: "Search page"

  Feature Description



  Background: "Starting at the search page"
    Given that i am on the Gavin traveling search page



  Scenario: Add number of adults to the search
    Given that there is a add adult button
    When i click the add adult button
    And i choose 1 adults
    Then the number of adults should should be set to 1



  Scenario: Add number of children to the search
    Given that there is a add adult button
    When i click the add children button
    And i choose 1 children
    Then the number of children should should be set to 1



  Scenario: Add number of young children to the search
    Given that there is a add young children button
    When i click the add young children button
    And i choose 1 young children
    Then the number of young children should should be set to 1


  Scenario Outline: "As a user i want to select <activity>"
    Given that there are checkbox for <activity>
    When i click the box for <activity>
    And i press the search button to get results with <activity>
    Then the search result should be hotels with <activity>

    Examples:
      | activity              |
      | pool                  |
      | restaurant            |
      | children club         |
      | evening entertainment |


  Scenario: "As a user i want to search for hotels based on distance to the beach"
    Given that there is a field for distance to beach
    When i enter a <distance> in the distance to beach field
    And press the search button to get results based on distance to beach
    Then the result should only be hotels within the <distance> to beach

  Scenario: "As a user i want to search for hotels based on distance to downtown"
    Given that there is a field for distance to downtown
    When i enter a <distance> in the distance to downtown field
    And press the search button to get results based on distance to downtown
    Then the result should only be hotels within the <distance> to downtown


  Scenario Outline: Search based on city
    Given that there are a dropdown for city
    When i chose <city> in the drop down menu
    And i press the search button
    Then i should get a result with <city>

    Examples:
      | city     |
      | "Tubel"  |
      | "Dallas" |


  Scenario Outline: filter the available rooms during certain dates
    When i enter in <startDate> and <endDate>
    And press search
    Then i should get the result of all available rooms during those dates

    Examples:
      | startDate    | endDate      |
      | "2020-04-30" | "2020-05-07" |
      | "2020-05-30" | "2020-06-07" |
      | "2020-05-25" | "2020-06-10" |

