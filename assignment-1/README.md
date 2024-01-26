# Assignment 1

(`Create a shopping cart`)

Shopping Cart Requirements

- A main page that show multiple products
- When product page is clicked, it will go to a separate product detail page
- Product detail page will have add to cart
- When "Add to cart button" is clicked, it will update the cart icon to have number of the product in the cart
- A cart page will list the products which are added to the cart
- Cart page will calculate the total amount needed to be paid
- Cart will allow the change of quantity and removal of products
- Please use ReactJs for this assignment
- Please use https://fakestoreapi.com for retrieval of products

Bonus

- Write meaningful test cases only on cart page using jest and react-testing-library.
- Persist data of shopping cart even when browser is closed and reopen.
- Beautify the UI using tailwindcss framework
- Surprise Us :)


## Running the code

- Install [pnpm](https://pnpm.io/installation)
- `pnpm install`
- `pnpm run dev`


## Test
- `pnpm test`


## Technical Documentation
- React was the framework of choice for the frontend (as it is a requirement for the assignment)
- Vite for frontend tooling for its speed
- jotai as state management because it's minimal, simple and comes with a local storage support
- react-query for query caching and management
- vitest for testing because it goes with vite on top of being fast and easy to setup