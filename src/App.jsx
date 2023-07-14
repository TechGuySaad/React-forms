import React, { useState } from 'react';

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    if (!(e.target.value.endsWith("@gmail.com") || e.target.value.endsWith("@hotmail.com"))) {
      setEmailError("Please enter an email ending with @gmail.com or @hotmail.com");
    } else {
      setEmailError("");
    }
  }

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.match(/[^a-zA-Z]/g)) {
      setFirstNameError("First Name should not have any special characters");
    } else {
      setFirstNameError("");
    }
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    if (e.target.value.match(/[^a-zA-Z]/g)) {
      setLastNameError("Last Name should not have any special characters");
    } else {
      setLastNameError("");
    }
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6 || e.target.value.length > 16) {
      setPasswordError("Password should be between 6-16 characters");
    } else if (!/[A-Z]/.test(e.target.value) || !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(e.target.value)) {
      setPasswordError("Password should have at least one uppercase letter and one special character");
    } else {
      setPasswordError("");
    }
  }

  function handleForm(e){
    e.preventDefault();
    if (!firstNameError && !lastNameError && !emailError && !passwordError) {
      console.log('Form submitted');
      // Further actions on successful form submission
    }
  }

  return (
    <>
      <div className="form-container flex w-full h-screen justify-center items-center">
        <form className="flex flex-col gap-y-5 w-96" onSubmit={handleForm}>
          <label htmlFor="firstName" className="flex flex-col w-96">
            First Name
            <input 
              type="text" 
              name="firstName" 
              id="firstName" 
              placeholder="First Name" 
              className="border-2" 
              required 
              value={firstName}
              onChange={handleFirstNameChange}
            />
            {firstNameError && <p className="text-red-500">{firstNameError}</p>}
          </label>
          <label htmlFor="lastName" className="flex flex-col w-96">
            Last Name
            <input 
              type="text" 
              name="lastName" 
              id="lastName" 
              placeholder="Last Name" 
              className="border-2" 
              required
              value={lastName}
              onChange={handleLastNameChange}
            />
            {lastNameError && <p className="text-red-500">{lastNameError}</p>}
          </label>
          <label htmlFor="email" className="flex flex-col w-96">
            Email
            <input 
              type="text" 
              name="email" 
              id="email" 
              placeholder="Email" 
              className="border-2" 
              required
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <p className="text-red-500">{emailError}</p>}
          </label>
          <label htmlFor="password" className="flex flex-col w-96">
            Password
            <input 
              type="password" 
              name="password" 
              id="password" 
              placeholder="Enter Password" 
              className="border-2" 
              required
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError && <p className="text-red-500">{passwordError}</p>}
          </label>
          <button className="bg-violet-700 p-4 text-white rounded-xl" type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
