const loginForm = document.querySelector('#login-form');

async function handleLogin(event) {
  console.log('login button');
  event.preventDefault();

  const emailValue = document.querySelector('#email').value.trim();
  const passwordValue = document.querySelector('#password').value.trim();

  // const loginUser = {
  //    email: emailValue,
  //    password: passwordValue,
  //  };

  const response = await fetch('/api/user/login', {
    // body: JSON.stringify(loggedUser),
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ email: emailValue, password: passwordValue }),
  });

  if (response.ok) {
    console.log('IT WORKED!');
    document.location.replace('/home');
  } else {
    console.log('It wasnt me');
  }

  loginForm.reset();
}


loginForm.addEventListener('submit', handleLogin);


