// in JavaScript we create a variable using the keyword const or let
// variables are a handy way to store information and give it a name
// we can then use the name to access the information later
// the information stored in a variable can be changed

// here we create a variable called box and assign it the value of the HTML element with the id of box
// we use the document.querySelector method to find the element similar to how we use CSS selectors
const box = document.querySelector('#box');
// then we store the HTML element with the id of startButton in a variable called startButton
const startButton = document.querySelector('#startButton');
// and finally we store out stop button in a variable called stopButton
const stopButton = document.querySelector('#stopButton');
// now we have three HTML elements ready to use in our JavaScript code
const resetButton = document.querySelector("#resetButton");



// in this example we want to animate something and we want to be able to stop the animation as well
// in that case we need to use a variable to store the animation id (so that we can stop it later)
// since this variable will be getting new values later in the code we use the let keyword
let animationId;
// JavaScript is read from top to bottom so we need to declare the variable before we use it
// at this point the variable has no value (or actually it holds the value of undefined) but that is ok since we intend to change it later

// now here comes the exception to the rule that JavaScript is read from top to bottom. A function is not read until it is called
// But that suits us fine in this situation since we only want our animation to run when we click the button
function animate() { // everything between the curly brackets {} is the code that will run when the function is called

  // Now we need to know how far the box is from the top of the screen and how far it is from the left side of the screen
  // that is why create two variables called top and left and assign them the value of the CSS property top and left (see style.css)
  // again we use let since we intend to change the value of these variables later
  let top = parseInt(getComputedStyle(box).getPropertyValue('top'));
  let left = parseInt(getComputedStyle(box).getPropertyValue('left'));


  //This is a conditional: 
  //since we don't want the box to move outside the screen we need to check if the top and left values are less than 450 before we add 5 to them
  if (top < 450) top += 5;
  if (left < 450) left += 5;

  // now we need to update the CSS properties of the box to make it move
  box.style.top = `${top}px`;
  box.style.left = `${left}px`;

  // finally we need to call the animate function again to make the animation loop
  // the requestAnimationFrame method will call the animate function again when the browser is ready to draw the next frame
  animationId = requestAnimationFrame(animate);
}
// now we have a function that will animate the box and call itself again to make the animation loop
// the function has never been called at this point so nothing will happen when we load the page

// now we need to add event listeners to the buttons so that we can start and stop the animation
startButton.addEventListener('click', () => {
  // when the start button is clicked we first need to stop the animation if it is already running
  cancelAnimationFrame(animationId);
  // then we call the animate function to start the animation
  animationId = requestAnimationFrame(animate);
});


// when the stop button is clicked we need to stop the animation
stopButton.addEventListener('click', () => {
  cancelAnimationFrame(animationId);
});
 
// I created a reset button 
resetButton.addEventListener("click", () => {
  box.style.top = `0px`;
  box.style.left = `0px`;
})

// Tried figuring out how to change background color of the box each time the reset button is pushed. 
// I figured it out but only by using "onclick" in the html but Smari had mentioned that we should not do that. 
// I'd love feedback about how to do this properly.  
 function changeBackgroundColor() {
//  Get the element with the id "box"
const box = document.getElementById("box");

 // Generate a random color
 const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

//   // Set the background color of the box to the random color
box.style.backgroundColor = randomColor;
}


// resetButton.addEventListener("click",() => {
//   changeBackgroundColor();
// })

// Here I was trying to figure out how to change the color when a button is pushed
// function changeBackgroundColor() P{
//   let element = document.getElementById("#box");
//   let colors = ["red", "green", "blue", "purple"];
//   let randomColor = colors[Math.floor(Math.random() * colors.length)];
//   element.style.backgroundColor = randomColor;
// }
// let button = document.getElementById(("#box");
// button.addEventListener("click", changeBackgroundColor);




// in our code we have decleared varables using both const and let
// we use numbers in our top and left variables, the brown texts are called strings
// we use the backtick character ` to create a string that contains variables (like in line 38 and 39)
// we use boolean values (true or false) in our if statements
// these are the three basic data types in JavaScript ( numbers, strings and booleans )
// there are more data types in JavaScript but we will not cover them until later in the course
// we have declared a function called animate and we have called it in two different places can you find them?
// we have also called two other functions in our code, can you find them? what are they called?
// we have used the addEventListener method to add event listeners to the buttons
// methods are functions that belong to an object, in this case the startButton and stopButton objects
// but they represent HTML elements in our HTML document, hence the name document object model (DOM)


// now we have a working animation but it is not very interesting
// try to change some of the values in the animate function to see what happens
// watch out for errors in the console (by pressing F12) and try to fix them
// can you make the box move faster?- can you make it move diagonally?
// can you add some more elements to the page and animate them as well?

