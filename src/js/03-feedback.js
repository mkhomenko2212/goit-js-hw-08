

import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const FORM_KEY = "feedback-form-state";

const onFormInput = () => {
    const formData = new FormData(form);
    let userForm = {};
    formData.forEach((value, name) => userForm[name] = value.trim());
    localStorage.setItem(FORM_KEY, JSON.stringify(userForm));
};

form.addEventListener("input", throttle(onFormInput, 500));


const onPopulateForm = () => {
    if (localStorage.getItem(FORM_KEY)) {
        Object.entries(JSON.parse(localStorage.getItem(FORM_KEY))).forEach(([name, value]) => form.elements[name].value = value);
    }
};

onPopulateForm();

const onFormSubmit = event => {
    event.preventDefault();
    if (form.elements.email.value && form.elements.message.value !== "") {
        console.log('Форма с данными: ', JSON.parse(localStorage.getItem(FORM_KEY)));
        event.currentTarget.reset();
        localStorage.removeItem(FORM_KEY);
    };
};
  
form.addEventListener("submit", onFormSubmit);
