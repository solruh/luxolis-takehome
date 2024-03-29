import { useState } from 'react';
import './App.css';

function App() {
  const [userName,setuserName] = useState("")
  const [password,setPassword] = useState("")
  const [showModal,setShowModal] = useState(false)
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const [alertMessage,setAlertMessage] = useState("")
  const [popUpMessage,setPopUpMessage] = useState("")
  const testAccount = { username:"test@luxpmsoft.com",password: "test1234!"}
  const handleSubmit = (e) => {
    e.preventDefault()
    const validPassword = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{3,}$/;
    if(password === "" && userName==="") {
      setPopUpMessage("username and password can't be empty")
      setShowModal(true)
      setAlertMessage("")
    } else if (password === ""){
      setPopUpMessage("password can't be empty")
      setShowModal(true)
      setAlertMessage("")
    } else if(userName === ""){
      setPopUpMessage("username can't be empty")
      setShowModal(true)
      setAlertMessage("")
    }else if(password === testAccount.password && userName === testAccount.username){
      if(validPassword.test(password)){
        setIsLoggedIn(true)
        setAlertMessage("")
      } else {
        setAlertMessage("Wrong combination")
      }
    } else if (password !== testAccount.password) {
      if(!validPassword.test(password)){
        setAlertMessage("Wrong combination")
      } else {
        setPopUpMessage("The provided password is wrong.")
        setShowModal(true)
        setAlertMessage("")
      }
    } else if (userName !== testAccount.username) {
      setAlertMessage("")
      setPopUpMessage("Wrong username")
      setShowModal(true)
    }
  }
  return (
    <div>
      {isLoggedIn? (
          <div></div> //could have used a react-router-dom but i thought like this is simpler way to satisfy the conditions
      ) : (
        <div className="container">
          <img className='bgimg' src="BG.svg" alt='background-img'/>
          <div className='form-container'>
            <img className='img-grp' src="Group.svg" alt='cart-group-img'/>
            <form onSubmit={handleSubmit} className='form'>
              <div className='input-block'>
                <img src="user.svg" className='img' alt='user-icon-img'/>
                <input value={userName} onChange={(enVal)=>setuserName(enVal.target.value)} placeholder='USERNAME' className='text-input'/>
              </div>
              <div className='input-block'>
                <img src="lock.svg" className='img' alt='password-lock-icon'/>
                <input value={password} onChange={(enVal)=>setPassword(enVal.target.value)} placeholder='PASSWORD' className='text-input'/>
              </div>
              {alertMessage && <div className='alert'>{alertMessage}</div>}
              <input type='submit' value={"LOGIN"} className='login'/>
              <div className='forgot'>Forgot Password?</div>
            </form>
          </div>
          {showModal && (
              <div className='modal'>
                <div className='modal-content'>
                  <span className='close' onClick={()=>setShowModal(false)}> &times;</span>
                  <p>{popUpMessage}</p>
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
      )
      }
  </div>
  );
}

export default App;
