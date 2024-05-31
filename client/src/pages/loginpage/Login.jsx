import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { assets } from "../../images/asset";
import { loginApi } from '../../service/allApi';
import './Login.css';
import { useNavigate } from 'react-router-dom';
// import { useGoogleLogin } from '@react-oauth/google';



const Login = () => {
  const navigate = useNavigate()

  const [userlogin, setUserlogin] = useState({
    email: "", password: ""

  });

  const setInputs = (e) => {
    const { name, value } = e.target;
    setUserlogin({ ...userlogin, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userlogin;
    if (!email || !password) {
      alert("Please fill all fields");
    } else {
      try {
        const result = await loginApi(userlogin);
        console.log('API response:', result);

        if (result.status === 200) {
          console.log(result.data.user)
          sessionStorage.setItem("existinguser", JSON.stringify(result.data.user))
          sessionStorage.setItem("token", result.data.token)
          const token = result.data.token;
          const username = result.data.user.username || 'User';

          alert(`${username}, you have logged in successfully`);
          setUserlogin({ email: "", password: "" });
          navigate('/home')


        } else {
          alert(result.response.data);
        }
      } catch (error) {
        console.error("Error during login:", error);
        alert("An error occurred during login. Please try again.");
      }
    }
  };

  // const onSuccess = async (tokenresponse) => {
  //   console.log(tokenresponse);
  //   navigate('/home')
  // };
  // const login = useGoogleLogin({
  //   onSuccess,
  // });

    const loginwithgoogle=()=>{
      window.open("http://localhost:4000/auth/google/callback","_self")
    }

  return (
    <div>
      <Container>
        <Row>
          <Col className='' style={{ marginLeft: '10px' }}>
            <p className="ms-5 " style={{ fontSize: '50px', marginTop: '150px', fontWeight: '600' }}>Sign in to</p>
            <h4 className="ms-5" style={{ fontSize: '35px', fontWeight: '500' }}>Lorem ipsum is simply</h4>
            <p className="mt-5 ms-5">
              If you don't have an account,<br /> you can <a href="/" style={{ textDecoration: "none" }}>Register here!</a>.
            </p>
            <img
              className=""
              src={assets.Saly}
              style={{
                maxWidth: "100%",
                height: "456px",
                marginTop: "auto",
                position: "absolute",
                top: "280px",
                left: '460px'
              }}
              alt="User Icon"
            />
          </Col>
          <Col className="p-5">
            <h4 className="ms-5">Sign in</h4>
            <Form onSubmit={handleLogin} className="mt-5 ms-5 me-5">
              <FloatingLabel
                controlId="floatingInputEmail"
                label="Email address"
                className="mb-3"
              >
                <Form.Control
                  style={{ backgroundColor: "#F0EFFF" }}
                  type="email"
                  placeholder="name@example.com"
                  onChange={setInputs}
                  name="email"
                  value={userlogin.email}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingPassword"
                label="Password"
                className="mb-3"
              >
                <Form.Control
                  style={{ backgroundColor: "#F0EFFF" }}
                  type="password"
                  placeholder="Password"
                  onChange={setInputs}
                  name="password"
                  value={userlogin.password}
                />
              </FloatingLabel>
              <Button
                type="submit"
                className="w-100 mt-3 custom-button"
                style={{ backgroundColor: "#4D47C3" }}
                size="lg"
              >
                Login
              </Button>
              <p className="text-center mt-5 mx-auto">or continue with</p>
              <div className="text-center">
                <img className="me-3  image" src={assets.Facebook} alt="Facebook" />
                <img className="me-3" src={assets.apple} alt="Apple" />
                <img onClick={loginwithgoogle}  className="me-3" src={assets.google} alt="Google" />
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;