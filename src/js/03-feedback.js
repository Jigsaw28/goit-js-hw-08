import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name = "email"]');
const message = document.querySelector('textarea[name = "message"]')

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));

const dataStorage = {}

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem("feedback-form-state")
    console.log(dataStorage)
}

function onTextareaInput() {
    dataStorage.email = email.value;
    dataStorage.message = message.value;

    localStorage.setItem("feedback-form-state", JSON.stringify(dataStorage))   
}

storageStatus()

function storageStatus() {
    const saveData = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (saveData) {
        email.value = saveData.email;
        message.value = saveData.message
    }
    }

    