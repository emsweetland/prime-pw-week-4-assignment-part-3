console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];                //create global variable named basket and set it to empty array
const maxItems = 5            //Add a global `const` named `maxItems` and set it to 5.
console.log(maxItems)

function isFull(){      //Create a function called isFull(). It should:
  if (basket.length < maxItems){   //return `false` if the basket contains *less* than max number of items
    return false
    }
else {                   //return `true` otherwise (equal or more than maxItems)
    return true
}
}

console.log(isFull())

function addItem(item){      //create function called addItem //take an input parameter for a string item
    if (isFull(true)) {     // Use the `isFull` function to prevent more than `maxItems` from being added to the basket
    return false }          //If there was no room and the item could not be added return `false`
   else{
    basket.push(item);      //add item to basket array
    console.log('added',item);
    return true                   //If an item was added to the array, return `true`
    }
  }
  
  
  addItem('slime')
  addItem('slop')
  addItem('grime')
  addItem('sludge')
console.log(isFull())   
  addItem('sediment')
console.log(basket)
console.log(isFull())         
  addItem('detritus')
console.log(basket)       
console.log(isFull())


 
  function listItems() {        //create function called listItems
       for (let item of basket){ 
    console.log(item)       //console log each item per line
    }
  }
  listItems()

  function empty(){             //create function called empty
    for (let item of basket){    //for each item in the basket
        basket.splice(item)       //the item is removed from the array
    }
  }
    empty()
    
    listItems()
  
    // Create a function called `removeItem`. It should:
  function removeItem(item){  // Take an input parameter for a string `item`
    let remove = basket.indexOf(item)             // Use [Array.indexOf]
    if (remove >= 0){ 
      let removed = basket.splice(item)   // Use [Array.splice]
      return item + ' '+'removed'
    } else {
      return 'null'       //Return the item removed or `null` if the item was not found
    }
  }

  basket = ['slime', 'slop', 'grime', 'sludge', 'sediment'];
  console.log(basket.indexOf('bugs'))
  console.log(basket.indexOf('slime'))
  console.log(removeItem('bugs'))
  console.log(removeItem('slime'))
  
  

 




  
  
