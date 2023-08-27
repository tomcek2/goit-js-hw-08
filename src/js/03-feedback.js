import throttle from 'lodash.throttle';
const form = document.querySelector('form');

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const saveInputValues = () => {
  save('feedback-form-state', {
    email: form.elements.email.value,
    message: form.elements.message.value,
  });
};

form.addEventListener('input', throttle(saveInputValues, 500));
form.addEventListener('submit', saveInfo);

const loadedValues = load('feedback-form-state');

if (loadedValues) {
  form.elements.email.value = loadedValues.email;
  form.elements.message.value = loadedValues.message;
} else {
  form.elements.email.value = '';
  form.elements.message.value = '';
}

function saveInfo(e) {
  e.preventDefault();
  console.log(load('feedback-form-state'));
  localStorage.removeItem('feedback-form-state');
  form.elements.email.value = '';
  form.elements.message.value = '';
}
