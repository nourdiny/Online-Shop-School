import axiosClient from "../axios-client.js";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";
import { useRef, useState } from "react";
import { useStateContext } from "../context/ContextProvider.jsx";

const SignUp = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const imageRef = useRef();
  const { setUser, setToken } = useStateContext();
  const [message, setMessage] = useState(null)


  const onSubmit = (ev) => {
    ev.preventDefault();

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
      // image: imageRef.current.value,
    };

    console.log(payload)
    axiosClient.post("/signup", payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setMessage(response.data.message)
          
        }
      });
  };

    console.log(message)
      if(message !== null) {
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      }
      console.log(message)
  return (
    <>
      <Meta title="SignUp" />
      <BreadCrumb title="SignUp" />
      <Container className="login-wrapper home-wrapper-2 p-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Create Account</h3>
              {message &&
                <div className="alert">
                  <p>{message}</p>
                </div>
              }
              <form onSubmit={onSubmit} className="d-flex flex-column gap-10">
                <div>
                </div>
                <div>
                  <input
                    ref={nameRef}
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    className='form-control'

                  />
                </div>
                <div>
                  <input
                    ref={emailRef}
                    type="email"
                    name="email"
                    placeholder="Email"
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
                  <input
                    ref={passwordConfirmationRef}
                    type="password"
                    name="password"
                    placeholder="Password"
                    className='form-control'
                  />
                </div>
                <div>
                  <input
                    ref={imageRef}
                    type="file"
                    name="image"
                    placeholder="image"
                    className='form-control'
                  />
                </div>
                <div>
                  <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                    <button className="button">
                      Create
                    </button>
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

export default SignUp;
