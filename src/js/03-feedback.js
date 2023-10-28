const form = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-form-state';
const btn = document.querySelector('button');
const throttle = require('lodash.throttle');
const formData ={};

updateForm();

form.addEventListener('input', throttle(handleInput, 500));
form.addEventListener('submit', handleSubmit);

function handleInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
  console.log(formData)
}

function handleSubmit(evt) {
  evt.preventDefault();
  const {
        elements: { email, message }
      } = evt.currentTarget;

      if (email === "" || message === "") {
        return alert("Please fill in all the fields!");
      }
      console.log({Email: email.value, Message: message.value});
      form.reset();
      localStorage.removeItem(LOCAL_KEY);
}

function updateForm() {
  if(localStorage.getItem(LOCAL_KEY) === null) {
    return
  }
  const savedForm = JSON.parse(localStorage.getItem(LOCAL_KEY));
  Object.entries(savedForm).forEach(([name, value]) => {
    formData[name] = value;
    form.elements[name].value = value;
  })
}

