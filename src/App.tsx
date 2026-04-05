import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'
import Header from './components/Header'

function App() {
  // const [count, setCount] = useState(0)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    dateOfBirth: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    console.log(name, value);
    setFormData((preValue) => ({...preValue, [name]: value}));
    console.log(formData);
  };

  const handleSubmit = (e: any) => { 
    e.preventDefault();
    console.log(e);
    // createUser(formData);
    createUser();
  };


  const createUser = async () => {
            let request = await fetch(`https://69b6be6a583f543fbd9e6ed9.mockapi.io/user-manager/create-user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    emailAddress: formData.emailAddress,
                    phoneNumber: formData.phoneNumber,
                    dob: formData.dateOfBirth,
                })
            })
            const response = await request.json();
            console.log(response, 'response')
            if (response) {
                // fetchUserList()
            }
    }  

  return (
    <>
      <div>
        <h1>My Online Store</h1>
        <p>My Name</p>

        <form>
          <div className="div">
            <div className="form-group">
              <input type="text" name="firstName" placeholder="First Name" onChange={(e) => handleChange(e)} />
            </div>
          
          <div className="form-group">
            <input type="text" name="lastName" placeholder="Last Name" onChange={(e) => handleChange(e)} />
          </div>
          
          <div className="form-group">
            <input type="email" name="emailAddress" placeholder="Email" onChange={(e) => handleChange(e)} />
          </div>

          <div className="form-group">
            <input type="number" name="phoneNumber" placeholder="Phone Number" onChange={(e) => handleChange(e)} />
          </div>

          <div className="form-group">
            <input type="date" name="dateOfBirth" placeholder="Date of Birth" onChange={(e) => handleChange(e)} />
          </div>

          <button onClick={(e) => handleSubmit(e)} type="submit">Submit</button>

          </div>
        </form>

      </div>

      <Card />
      <Button />
      <Header />
    </>
  )
}

export default App
