const form = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-form-state';
const btn = document.querySelector('button');

form.elements.message.value = localStorage.getItem(localStorageKey) ?? "";

form.addEventListener("input", (evt) => {
  localStorage.setItem(localStorageKey, evt.target.value);

});

// form.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   localStorage.removeItem(localStorageKey);
//   form.reset();
// });

