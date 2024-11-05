import React, { useState } from 'react'
import '../Styles/login.css'
import { useNavigate } from 'react-router-dom'


function Login() {
    const navigate = useNavigate()
    let [login, setLogin] = useState(0)
    let [parol, setParol] = useState(0)
    function addLocal() {
        if(login === 'farhod' && parol === '0017') {
            localStorage.setItem("ADMIN", "password")
            navigate('/strategy-step1')
        } else {
            alert("Parol yoki Login xato")
            localStorage.clear("ADMIN")
        }
    }
  return (
    <div className='loginbody'>
        <div className='Login'>
            <div className='Login__wrapper'>
                <div className='Login__logo'>
                    <img src="https://logodownload.org/wp-content/uploads/2020/04/microsoft-powerpoint-logo-1536x1429.png" alt="" />
                </div>
                <div className="title_login">
                    <h1>Please, enter the identification key and passwor for PowerPoint product </h1>
                    <h2>creator: Egamnazarov Farhod</h2>
                </div>
                <form>
                    <label htmlFor="LoginEmail">
                        <span>
                            Idendification ID
                        </span>
                        <span className='login_icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-4.41 0-8 2.69-8 6v2h16v-2c0-3.31-3.59-6-8-6z" />
                            </svg>

                        </span>
                        <input onChange={(e)=>setLogin(e.target.value)} style={{width:'350px'}} id='LoginEmail' type="text" />
                    </label>
                    <label htmlFor="LoginPassword">
                        <span>
                            Password
                        </span>
                        <span className='login_icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24">
                                <path d="M12 3a5 5 0 0 1 5 5v2h-2V8a3 3 0 0 0-6 0v2H7V8a5 5 0 0 1 5-5z" fill="black" />
                                <path d="M5 11h14v10H5z" fill="black" />
                            </svg>
                        </span>
                        <input onChange={(e)=>setParol(e.target.value)} style={{width:'350px'}} type="password" id="LoginPassword" />
                    </label>
                    <button onClick={addLocal}>
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login