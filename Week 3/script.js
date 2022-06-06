let greeting = 'Hello World!';

// 💪 Practice

// In index.html, add a <p>tag below the <h1>and give it a class of cool, then...
// Add some content inside of the <p>tag - try typing lorem [tab]to emit (using emmet) random lorem ipsum text.
// Use querySelector()to select the first element with a class of cool and assign it to a variable named pEl.
// Verify that the <p>element was selected by logging out pEl.

let pE1 = document.querySelector('.cool');
console.log(pE1);

// 💪 Your turn: 
// Change the colorof the <p>element to a color of your choosing.

document.querySelector('.cool').style.color = 'red';

// Attributes of an element
// 💪 Practice (5 mins)

// Add an <a>tag to index.htmlwith content of "Visit Google" but without an hrefattribute.
// Reload the page and verify that the link does not work (in fact, it probably doesn't even look like a link).
// In the JS, write the line of code that will add an hrefattribute that will make the link navigate to "https://www.google.com".
// Hint: Check out the previous slide

const a = document.querySelector('#link');
// const a = document.getElementById("link"); // this is another way to target your element
a.href = 'https://www.google.com';

// 💪 You Do: Use querySelectorAllto select all of the elements with a class of commentand assign to a variable named commentEls.
// console.log(commentEls)to verify it worked.

let commentEls = document.querySelectorAll(".comment");
console.log(commentEls);

// Let's type this for...ofloop in the console to log each element:

// for(let commentEl of commentEls) {
// 	console.log(commentEl);
// }

// 💪 You Do: Add a for...ofloop to script.js that changes the font size all of the comment elements to 30px.
// Hint: You must use a string like '30px'(just the number 30or the string of '30'will not work).

for (const commentEl of commentEls) {
    commentEl.style.color = "yellow";
}
