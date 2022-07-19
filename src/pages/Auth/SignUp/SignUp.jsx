
import './SignUp.css';
import { useState, useEffect } from "react";
import { useAuth } from "../../../contexts/Authcontext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const navigate = useNavigate();
  const { signupHandler, token } = useAuth();
  const [signUpDetails, setSignUpDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  useEffect(() => {
    if (token) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [token]);

  return (
    <>
      <section className='signup-page-container'>

        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            signupHandler(
              signUpDetails.email,
              signUpDetails.password,
              signUpDetails.firstname,
              signUpDetails.lastname
            );
          }}
        >

          <label htmlFor="signup-email">Email</label>
          <input
            required={true}
            id="signup-email"
            value={signUpDetails.email}
            placeholder="user@gmail.com"
            className="input-txt"
            type="email"
            onChange={(e) =>
              setSignUpDetails({
                ...signUpDetails,
                email: e.target.value,
              })
            }
          />



          <label htmlFor="signup-first">First name</label>
          <input
            id="signup-first"
            value={signUpDetails.firstname}
            placeholder="Sumit"
            className="input-txt"
            type="text"
            onChange={(e) =>
              setSignUpDetails({
                ...signUpDetails,
                firstname: e.target.value,
              })
            }
          />



          <label htmlFor="signup-last">Last Name</label>
          <input
            id="signup-last"
            value={signUpDetails.lastname}
            placeholder="Singh"
            className="input-txt"
            type="text"
            onChange={(e) =>
              setSignUpDetails({
                ...signUpDetails,
                lastname: e.target.value,
              })
            }
          />


          <label htmlFor="signup-password">Password</label>
          <input
            required={true}
            id="signup-password"
            value={signUpDetails.password}
            placeholder="********"
            className="input-txt"
            type="password"
            onChange={(e) =>
              setSignUpDetails({
                ...signUpDetails,
                password: e.target.value,
              })
            }
          />


          <label htmlFor="conf-password">Confirm Password</label>
          <input
            id="conf-password"
            value={signUpDetails.confirmpassword}
            placeholder="********"
            className="input-txt"
            type="password"
            onChange={(e) =>
              setSignUpDetails({
                ...signUpDetails,
                confirmpassword: e.target.value,
              })
            }
          />

          <button className="create-account-btn" style={{ cursor: "pointer" }} type="submit" >
            Create Account
          </button>
          <a style={{ cursor: "pointer" }} onClick={() => navigate("/login")}>Already a user? Login</a>

        </form>

      </section>
    </>
  )
}

export default SignUp;
