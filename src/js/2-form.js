  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');
const formStateKey = "feedback-form-state";
  
form.addEventListener('input', saveFormState);
form.addEventListener('submit', onSubmit);
  
   function saveFormState() {
    const formState = {
      email: emailInput.value.trim(),
      message: messageInput.value.trim()
    };
    localStorage.setItem(formStateKey, JSON.stringify(formState));
  }

    function loadFormState() {
    const savedState = localStorage.getItem(formStateKey);
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      emailInput.value = parsedState.email;
      messageInput.value = parsedState.message;
    }
    }   

    loadFormState();
    
    
function onSubmit(event) {
    event.preventDefault();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();
    if (emailValue !== '' && messageValue !== '') { 
        const formData = {
            email: emailValue,
            message: messageValue
        };
        console.log(formData);
        localStorage.removeItem(formStateKey);
        form.reset();
    }
}
