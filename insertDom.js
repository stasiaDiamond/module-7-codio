// Your task is to implement the function addItem() that adds a new item to the list of TODOs.

function addItem() {
  // TODO: add 'item' to the list of TODOs

  //Step 1: identify the value of the myInput element. 

  // * i can't see the HTML file, so can't confirm the element's id is "myInput"
  // * first time using .value, never taught

  // * grab the element with the id of 'myInput' from HTML
  // * also grab myInput's .value
  const addedItemValue = document.getElementById('myInput').value;

  // Step 2: Create a text node containing that value

  // * wtf is text node? Not taught

  // * DOM Node: In the DOM tree, every element type is called a node
  // * Text Node: contains text
  // * document.createTextNode() creates a JS Object that represents the text content entered(input) by the user. 

  const textInput = document.createTextNode(addedItemValue);


  //Step 3: Create a new li element and append the text node to it

  // * creating element for the first time, never taught
  // * appending child for the first time, never taught

  // * appendChild() adds a child node to the bottom of a parent node
  // * it takes one argument: the element we want to add

  // * create the li element
  const listItem = document.createElement("li");
  // * append whatever's in textInput to the li element we just created
  listItem.appendChild(textInput);


  //Step 4: Append the li element to the existing myTODOs element. 

  // * i can't see the HTML file, so can't confirm the element's id is "myTODOs"

  // * grab myTODOs from HTML file
  // * append the listItem element to the main myTODOs element
  document.getElementById("myTODOs").appendChild(listItem);
}

// ----- CHALLENGES:
// * here's my thing: as beginners, how would we even know where to start or what to use if it were never brought up in class? no links, no discussion, not in the videos... nothing. no links, no help, no warning... just SURPRISE you're being graded on this surprise! lol
// * the singular Solution File is the only way we are taught how to succeed in completing the assignments, with no explanations of the files given from MITxPro Emeritus
// * if they didn't provide the Solution Files to work backwards from, we'd all fail
// * but since they do give it to us, it looks like people are scoring 100% when in actuality, they may not have learned a single thing 👽😵‍💫

// * codio would not allow me to access the HTML or CSS file, so i couldn't confirm what the id's were named without the Solution File





// -------GIVEN SOLUTION FILE:
// function addItem() {
//   // TODO: add 'item' to the list of TODOs
//   const inputValue = document.getElementById('myInput').value;
//   const t = document.createTextNode(inputValue);
//   const li = document.createElement('li');
//   li.appendChild(t);
//   document.getElementById('myTODOs').appendChild(li);
// }

// //don't change this line

//   module.exports = {addItem};
