# Tier 1 Week 4 - Part 3

This week we'll be pulling together all of the Javascript techniques you've learned thus far as well as practicing with HTML & CSS.

## Topics Covered

- variables
- arrays
- conditionals
- functions
- HTML & CSS

## Assignment - Cart System 

In this section we will write some functions that might be used in a simple cart system for a store. 

### Required Features
Update the `cart.js` file to do the following:

- Create a global variable named `basket` and set it to an empty array. 
          //global variables are created outside of a function

- Create a function called `addItem`. It should:
  - take an input parameter for a string `item`
  - add the new item to the global array `basket`. 
  - return `true` indicating the item was added

- Create a function called `listItems`. It should:
  - loop over the items in the `basket` array
  - console.log each individual item on a new line

- Create a function called `empty`. It should:
  - reset the `basket` to an empty array

> __IMPORTANT__
> Make sure that you are writing code *in the file* to test every function that you write!

For example, to test `addItem`:
```
console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);
```

### Stretch Goals 
Remember that Stretch Goals are not required, but will help you to further develop concepts from the skills we have covered.

__Using functions in other functions!__

1. Add a global `const` named `maxItems` and set it to 5.

2. Create a function called isFull(). It should:
  - return `false` if the basket contains *less* than max number of items
  - return `true` otherwise (equal or more than maxItems)

3. Update the required `addItem` function to:
  - Use the `isFull` function to prevent more than `maxItems` from being added to the basket. 
  - If an item was added to the array, return `true`
  - If there was no room and the item could not be added return `false`

__Using Array built-in functions!__

4. Create a function called `removeItem`. It should:
  - Take an input parameter for a string `item`
  - Use [Array.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) to find the index of the first matching item in the basket.
  - Use [Array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to remove the first matching item from the basket.
  - Return the item removed or `null` if the item was not found

## Assignment Submission
Check in your repo, then turn in your work via the Prime Academy Assignment Application at http://primeacademy.io, as usual and don't hesitate to hit up the Slack channel as needed!

**REMINDER:** Make sure to answer the Slack discussion question for this week!