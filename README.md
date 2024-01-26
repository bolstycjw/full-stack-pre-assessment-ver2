# Senior Engineer - Full Stack Web

## Technical Assignment

Make sure to document your **technical decisions and assumptions** you have made during this technical assignment. **e.g. why did you choose to use a particular heavy js package, reasoning behind the choice of state management technique etc.**

- Do not forget to add instructions on how to build and run the code.
- Put your code on a public repository on e.g. github, gitlab for us to clone.
- You are allowed to use as many assumptions as you like, but don't forget to explain it.
  Please submit the pre-assessment and email to cedric_loy@ensigninfosecurity.com within 5 calendar days.

Programming language that can be used

- Javascript
- Ruby

### Assignment 1

(`Create a shopping cart`)

Shopping Cart Requirements

- A ​main page​ that show multiple products
- When product page is clicked, it will go to a separate product ​detail page​
- Product ​detail page​ will have add to cart
- When "​Add to cart button​" is clicked, it will update the cart icon to have number of the product in the cart
- A ​cart page​ will list the products which are added to the cart
- Cart page will calculate the total amount needed to be paid
- Cart will allow the change of quantity and removal of products
- Please use ReactJs for this assignment
- Please use https://fakestoreapi.com for retrieval of products

Bonus

- Write meaningful test cases only on cart page using jest and react-testing-library.
- Persist data of shopping cart even when browser is closed and reopen.
- Beautify the UI using tailwindcss framework
- Surprise Us :)

### Assignment 2

Write a JavaScript program that uses the [SpaceX API](https://github.com/r-spacex/SpaceX-API/blob/master/docs/launchpads/v4/one.md).

This program has 2 functions available. Confirm both outcomes by writing meaningful unit tests.

#### Function 1

This function accepts an `id` of a `launchpad` as an argument, and returns information about failed `launches` (desc) in following format:

```js
// launchpad id 5e9e4502f5090995de566f86
{
   "launchpad":"Kwajalein Atoll",
   "all_failures":[
      {
         "name":"Trailblazer",
         "failures":[
            "residual stage-1 thrust led to collision between stage 1 and stage 2"
         ]
      },
      {
         "name":"DemoSat",
         "failures":[
            "harmonic oscillation leading to premature engine shutdown"
         ]
      },
      {
         "name":"FalconSat",
         "failures":[
            "merlin engine failure"
         ]
      }
   ]
}
```

Try to only retrieve and process launches for the given `launchpad`

#### Function 2

Fetch all starlink satellites using [this query](https://github.com/r-spacex/SpaceX-API/blob/master/docs/starlink/v4/all.md) and store the response in (runtime) memory.

Afterwards, write a function that transforms this response data.

The return value of this function should make it possible to look up all starlink satellites launched on a specific `year`, `month`, and/or `date` in a performant way.

Make it as convenient as possible to look up following values from the return value:

- starlinks launched in year 2019
- starlinks launched on May 5th 2019
- starlinks launched in June 2020
