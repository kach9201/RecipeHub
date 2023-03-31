const signupForm = document.querySelector('#signup-form');


async function handleSignup(event) {
  console.log('signup button');
  event.preventDefault();

  const userNameValue = document.querySelector('#signup-username').value.trim();
  const passwordValue = document.querySelector('#signup-password').value.trim();
  const emailValue = document.querySelector('#signup-email').value.trim();

  const newUser = {
    name: userNameValue,
    email: emailValue,
    password: passwordValue,
  };

  const response = await fetch('/api/user/signup', {
    body: JSON.stringify(newUser),
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
  });
  console.log(response);

  if (response.ok) {
    console.log('IT WORKED!');
    document.location.replace(`/login`);
  } else {
    console.log('It wasnt me');
  }

  signupForm.reset();
}

signupForm.addEventListener('submit', handleSignup);
