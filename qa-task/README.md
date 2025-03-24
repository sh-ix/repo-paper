## Project Overview

**QA Engineer Home Assignment – Paper.id**

- Tasks 1-3 (Test Cases, Bug Reports, SQL Queries) documentation link:<br>
https://docs.google.com/spreadsheets/d/1VXn1fw0KEAG37lIs1ZI4y0YuUT12euXoKvaoq6QSJ2A/edit?usp=sharing

- Optional task no. 4 has been written for test case 1 and 2
- Optional tasks no. 5-6 could not be made due to insufficient time.
## How to run the tests (UI, API or Performance Test)
1. Clone the repository to your local
2. Install Cypress and run the command inside the repository on your terminal:<br>
`npx cypress run`

3. Select "E2E Testing" as the test type and "Chrome" as the preferred browser
4. Click "Start Testing"
5. Click on file "login.cy.js" to run the UI-Testing for test cases no. 1 and 2

## Dependencies & Setup Instructions
1. Download and install nvm using this command:<br>
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash`

2. Restart the shell using this command:<br>
`\. "$HOME/.nvm/nvm.sh"`

3. Download and install Node.js:<br>
`nvm install 22`

4. Verify the Node.js version:<br>
`node -v` (Should print "v22.14.0")<br>
`nvm current` (Should print "v22.14.0")

5. Verify npm version:<br>
`npm -v` (Should print "10.9.2")

6. Download and install Cypress:<br>
`npm install cypress`

7. Download and install cypress-xpath:<br>
`npm install -D cypress-xpath`

8. Include this line in your project's support file:<br>
`require('cypress-xpath');`

## Any assumptions made during testing
1. User wants to be able to view and download list of Client/Supplier only
2. User wants to filter Sales Invoice data but there is no data to be displayed (empty state)
3. User click "Clear Filter" on the table column will clear all active filter on each columns
