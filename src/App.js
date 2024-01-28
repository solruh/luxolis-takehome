import { useState } from 'react';
import './App.css';

function App() {
  const [userName,setuserName] = useState("")
  const [password,setPassword] = useState("")
  const handleSubmit = (e) => {

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
            <input value={password} onChange={(enVal)=>setPassword(enVal.target.value)} placeholder='PASSWORD' className='text-input'/>
          </div>
          <input type='submit' value={"LOGIN"} className='login'/>
          <div className='forgot'>Forgot Password?</div>
        </form>
      </div>
    </div>
  );
}

export default App;
