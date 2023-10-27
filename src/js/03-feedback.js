const form = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-form-state';
const btn = document.querySelector('button');
const throttle = require('lodash.throttle');


form.addEventListener('input', throttle(handleInput, 500));
form.addEventListener('submit', handleSubmit);

// form.elements.message.value = localStorage.getItem(LOCAL_KEY) ?? "";

form.addEventListener("input", (evt) => {
const form = evt.target;
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  // if (email === "" || message === "") {
  //   return console.log("Please fill in all the fields!");
  // }
});




// form.addEventListener("input", (evt) => {
//   const {
//     elements: { email, message }
//   } = evt.currentTarget;

//   localStorage.setItem(LOCAL_KEY, evt.target.value);

// });

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  localStorage.removeItem(LOCAL_KEY);
  form.reset();
});

