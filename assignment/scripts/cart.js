console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
  function addItem (item){
    basket.push(item)
    return true
  }
  
  console.log(addItem('slime'))
  console.log(basket)
  console.log(addItem('slop'))
  console.log(basket)
  console.log(addItem('grime'))
  console.log(basket)

  function listItems() {
    for (let item of basket){
        console.log(item)
    }
  }
  
 listItems();
  console.log(basket)

  function empty(){
    for (let item of basket){
        basket.splice(item)
    }
  }
  
  empty();
  console.log(basket)