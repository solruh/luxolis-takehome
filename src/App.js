import { useState } from 'react';
import './App.css';

function App() {
  const [userName,setuserName] = useState("")
  const [password,setPassword] = useState("")
  const [showModal,setShowModal] = useState(false)
  const [alertMessage,setAlertMessage] = useState(false)
  const testAccount = {
    username:"test@luxpmsoft.com",
    password: "test1234!"
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(password === testAccount.password && userName === testAccount.username){
      if(!alertMessage){
        alert("Login successful")
      }
    } else if (password !== testAccount.password) {
      if(!alertMessage){
        setShowModal(true)
      }
    }
  }
  const handlePassswordChange = (e) => {
    const newPassword = e.target.value;
    const validPassword = /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/;
    if(validPassword.test(newPassword)){
      setPassword(newPassword);
      setAlertMessage(false)
    } else {
      setAlertMessage(true)
    }
  }
  return (
    <div className="container">
      <img className='bgimg' src='BG.svg' alt='background-img'/>
      <div className='form-container'>
        <img className='img-grp' src='Group.svg' alt='cart-group-img'/>
        <form onSubmit={handleSubmit} className='form'>
          <div className='input-block'>
            <img src='user.svg' className='img' alt='user-icon-img'/>
            <input value={userName} onChange={(enVal)=>setuserName(enVal.target.value)} placeholder='USERNAME' className='text-input'/>
          </div>
          <div className='input-block'>
            <img src='lock.svg' className='img' alt='password-lock-icon'/>
            <input value={password} onChange={handlePassswordChange} placeholder='PASSWORD' className='text-input'/>
          </div>
          {alertMessage && <div className='alert'>Wrong combination</div>}
          <input type='submit' value={"LOGIN"} className='login'/>
          <div className='forgot'>Forgot Password?</div>
        </form>
      </div>
      {showModal && (
          <div className='modal'>
            <div className='modal-content'>
              <span className='close' onClick={()=>setShowModal(false)}> 
                &times; 
              </span>
              <p>The provided password is wrong.</p>
            </div>
          </div>
        )}
          <style> 
                {` 
                    ::placeholder { 
                        color: #ffffff;
                        font-family: "Montserrat-Light", Helvetica;
                        font-size: 14px;
                        font-weight: 300;
                        letter-spacing: 0;
                    }` 
                } 
            </style> 
    </div>
  );
}

export default App;
