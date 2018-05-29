# Setup

## Server

* cd into the server folder and `npm install`
* `npm run dev` to start up the express server on port 5000

## Client

* Open a new tab in your terminal CMD+T
* Run `lite-server` to start the client on port 3000

## Note

* You will need to install the `dotenv` npm package in the server side to hide your stripe secret

You're making the new Galvanize website, and need to include a way to accept payment from members. You could code the payment system from scratch, but this is a problem that's been solved many times by many people, so why not reuse their work? Find and use a payment library to accept credit cards on the included site. The site should prompt the user to settle all or some of their $387 outstanding balance. If the payment is successfully processed, the user should see a confirmation message that includes the amount they paid. If the payment is processed unsuccessfully, they should see an error message indicating why.

Note that you'll need to do some work on the client and some on the server. Be careful about committing any secret keys.

You can choose to start from the server-rendered folder OR the de-coupled folder. Choose one.

Deploy your work and add a link to it here

Front-end:
> https://striped-66f59.firebaseapp.com/

Back-end:
> https://fathomless-castle-95858.herokuapp.com/

