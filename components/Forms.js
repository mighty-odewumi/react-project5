import { useState } from "react";

export default function Forms() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    checkPassword: "",
    subscribeNews: false,
  });

  console.log(formData.subscribeNews);

  function handleChange(event) {

    const {name, value, type, checked} = event.target;
    console.log(event.target.checked);
    
    setFormData(
      prevValue => (
        {
          ...prevValue,
          [name]: type === "checkbox" ? checked : value,
        }
      ) 
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted!", formData);

    let signUpStatus;

    if (formData.password === "" && formData.checkPassword === "") 
      {
        console.log("Input fields must be filled");
        return signUpStatus;
      }

    else if (formData.password === formData.checkPassword) {
      signUpStatus = "Sign up completed!";
    }

    else {
      signUpStatus = "SIGN UP FAILED!!!";
      console.log(signUpStatus);
      return;
    }

    console.log(signUpStatus);


    if (formData.subscribeNews) {
      console.log("Thanks for subscribing to our newsletter");
    }

    else {
      return;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email"
        value={formData.email}
        name="email"
        onChange={handleChange}
      />

      <input 
        type="password"
        value={formData.password}
        name="password"
        onChange={handleChange}
      />

      <input 
        id="check-pwd"
        type="password"
        value={formData.checkPassword}
        name="checkPassword"
        onChange={handleChange}
      />
      <br />

      <input 
        id="checkbox"
        type="checkbox" 
        checked={formData.subscribeNews}
        onChange={handleChange}
        name="subscribeNews"
      />

      <label htmlFor="checkbox">I want to join the newsletter</label>

      <br />

      <button>Sign up</button>
    </form>
  )
  
}



/* const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    textarea: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  });
  

  // console.log(formData);

  function handleChange(event) {
    console.log(event.target.checked);
    const {name, value, type, checked} = event.target;


    setFormData(prevValue => ({
      ...prevValue,
      [name]: type === "checkbox" ? checked : value
    })
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted", formData);
  }

  
  return (
    <><form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName} />

      <input
        type="text"
        placeholder="Last name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName} />

      <input
        type="email"
        placeholder="johndoe@example.com"
        onChange={handleChange}
        name="email"
        value={formData.email} />

      <textarea
        name="textarea"
        value={formData.textarea}
        placeholder="Write your comments here."
        onChange={handleChange} />

      <br />

      <input
        type="checkbox"
        id="isFriendly"
        name="isFriendly"
        checked={formData.isFriendly}
        onChange={handleChange} />

      <label htmlFor="isFriendly">Are you friendly</label>
      <br />

      <input
        type="radio"
        id="employed"
        onChange={handleChange}
        value="employed"
        checked={formData.employment === "employed"}
        name="employment" />

      <label htmlFor="employed">Unemployed</label>
      <br />

      <input
        type="radio"
        id="part-time"
        onChange={handleChange}
        value="part-time"
        checked={formData.employment === "part-time"}
        name="employment" />

      <label htmlFor="part-time">Part Time</label>
      <br />

      <input
        type="radio"
        id="full-time"
        onChange={handleChange}
        value="full-time"
        checked={formData.employment === "full-time"}
        name="employment" />

      <label htmlFor="full-time">Full Time</label>
      <br />


      <label htmlFor="favColor">Favorite Color?</label>
      <br />
      <select
        id="favColor"
        value={formData.favColor}
        name="favColor"
        onChange={handleChange}
      >
        <option value="">Choose a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="brown">Brown</option>
      </select>
      <br />

      <button>Submit</button>

    </form>
    
  </>

  ) */