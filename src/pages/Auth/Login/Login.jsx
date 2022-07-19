
import '../Login/Login.css';
import { useState } from "react";
import { useAuth } from "../../../contexts/Authcontext";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const { loginCall} = useAuth();

  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });

  const guestLoginHandler = () => {
    setLoginDetails({
      email: "sumitsingh@gmail.com",
      password: "sumitsingh",
    });
    loginCall("sumitsingh@gmail.com","sumitsingh");
  };

    return (
        <>
            <section className='login-page-container'>
                <label htmlFor="">Email</label>
                <input 
                    type="email" 
                    id="login-email"
                    value={loginDetails.email}
                    onChange={(e) =>
                        setLoginDetails({ ...loginDetails, email: e.target.value })
                      }
                  />
                <label htmlFor="">Password</label>
                <input 
                    type="password" 
                    id="login-password"
                    value={loginDetails.password}
                    onChange={(e) =>
                        setLoginDetails({ ...loginDetails, password: e.target.value })
                      }
                    />
                <button 
                    id='login-btn'
                    onClick={() =>
                        loginCall(loginDetails.email, loginDetails.password)
                      }
                    >Login</button>

            
              <button  id='login-btn'
                className="primary-button"
                onClick={() => guestLoginHandler()}
              >
                Login as a guest
              </button>


           <div
          
              onClick={() => navigate("/signup")}
              className="sign-up-txt"
            >
              Don't have existing account : Sign Up
            </div>   
            </section>
        </>
    )
}

export default Login;