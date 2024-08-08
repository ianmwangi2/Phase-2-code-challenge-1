# THE BANK OF FLATIRON
This is a simple Reacte application for managing transactions at The Bank of Flatiron. Users can be able to:
- View their transcactions in a table.
- Add a new transaction. 
- Search for a specific transaction.

## The main features of the application are: 
- Display a list of transactions.
- Add a new transaction
- Search for transactions

For this application I used the `npm create vite@latest` to start creating the app.

## Installation
1. Open your terminal on your machine.
2. cd into the directory you want to clone the file in.
3. Clone the repository using:
`git clone git@github.com:ianmwangi2/Phase-2-code-challenge-1.git`
4. CD into the folder using:
`cd Phase-2-code-challenge`
5. Install the dependencies for the the react app:
`npm install`
6. Start the JSON Server by: 
- CD into src folder :
`cd src`
- Then run the server by:
`json-server db.json`

Open the server using the endpoint: `http://localhost:3000/transactions`

## Running the application
1. Start the react application. To start the application use:
`npm run dev`
**NOTE: THIS APPLICATION HAS BEEN CREATED USING VITE**

2. Open the application on your browser by either:
- Clicking `ctrl+click` or
- Copying the link indicated on local and pasting it on your browser.

## How the code works
1. It displays the transaction details on  to the webpage
2. Adds a new transaction - Fill out the form under Add Transaction and click the add transaction button. T he new transaction will be added to the list and saved to the JSON Server.
3. Searches for a transaction - Use the search bar to filter the transaction then click the search button and the table will update only to show the matching transactions.

## Deployed links
- The deployed back-end json-server is: [back-end](https://json-server-sooty-omega.vercel.app/transactions)
- The deployed live link for the project is: [phase-2-code-challenge](https://phase-2-code-challenge-1-kappa.vercel.app/)

## AUTHORS
- [Ian Mwangi](https://github.com/ianmwangi2)
