import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import {useStateContext} from "../context/ContextProvider.jsx";
import React , { useState , createRef} from "react";
import axiosClient from "../axios-client.js";


const Login = () => {
  const emailRef = createRef()
  const passwordRef = createRef()
  const { setUser, setToken } = useStateContext()
  const [message, setMessage] = useState(null)


  const onSubmit = ev => {
    ev.preventDefault()

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    console.log(payload)
    axiosClient.post('/login', payload)
      .then(({data}) => {
        setUser(data.user)
        setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setMessage(response.data.message)
        }
      });
  }
  if(message !== null) {
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }
  return (
    <>
      <Meta title="Login" />
      <BreadCrumb title="Login" />
      <Container className="login-wrapper home-wrapper-2 p-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-4">Login</h3>
              {message &&
                <div className="alert">
                  <p>{message}</p>
                </div>
              }
              <form onSubmit={onSubmit} className="d-flex flex-column gap-15">
                
                <div>
                  <input
                    ref={emailRef}
                    type="email" name="email" placeholder="Email"
                    className='form-control'
                  />
                </div>
                <div>
                  <input
                  ref={passwordRef}
                  type="password"
                  name="password"
                  placeholder="Password"
                  className='form-control'
                  />
                </div>
                <div>
                  <Link to="/forgot-password">Forgot Password?</Link>
                  <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                    <button  type="submit" className="button" >
                      Login
                    </button>
                    <Link to="/sign_up" className="button signup">
                      SignUp
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
