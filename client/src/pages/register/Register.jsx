import React, { useState } from 'react'
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import Navb from '../../components/Navb'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Register.css'
import { assets } from '../../images/asset';
import { registerApi } from '../../service/allApi';
import { useNavigate } from 'react-router-dom';
// import { useGoogleLogin } from '@react-oauth/google';






function Register() {
    

    const navigate = useNavigate()

    const [user, setuser] = useState({
        username: "", email: "", password: "", confirmpassword: ""
    })
    const setInputs = (e) => {
        const { name, value } = e.target
        setuser({ ...user, [name]: value })
    }
    console.log(user);

    const handleRegister = async (e) => {
        e.preventDefault()
        const { username, email, password, confirmpassword } = user
        if (!username || !email || !password || !confirmpassword) {

            alert("please fill all datas")
        }
        else {
            const result = await registerApi(user)
            console.log(result);
            if (result.status == 200) {
                alert(`${result.data.username} your account created successfully !`)
                setuser({ username: "", email: "", password: "", confirmpassword: "" })
                navigate('/login')
            }
            else {
                alert(result.response.data)

            }
        }

        
    }
    //        const  onSuccess= async(tokenresponse)=>{
    //         console.log(tokenresponse);
    //         navigate('/home')
    //        };
    //        const register=useGoogleLogin({
    //         onSuccess,
    //        });


    const registerwithgoogle=()=>{
        window.open("http://localhost:4000/auth/google/callback","_self")
      }

    return (
        <div>
            <Navb />
            <Container>


                <Row>
                    <Col className='mt-5 text-center' >
                        <h1 id='sign1' >sign up</h1>
                        <div className="me-5 mt-3 ms-5 " id='box'>


                            <FloatingLabel className='mb-3 ' controlId="floatingInput" label="Enter Email"  >
                                <Form.Control value={user.email} onChange={(e) => setInputs(e)} name='email'
                                    style={{ background: "#F0EFFF" }} type="email" placeholder="name@example.com" />

                            </FloatingLabel>



                            <FloatingLabel className='mb-3' controlId="floatingPassword" label="Create user name">
                                <Form.Control value={user.username} onChange={(e) => setInputs(e)} name='username'
                                    style={{ background: "#F0EFFF" }} type="text" placeholder="user name" />
                            </FloatingLabel>



                            <FloatingLabel className='mb-3' controlId="floatingPassword" label="Password">
                                <Form.Control value={user.password} onChange={(e) => setInputs(e)} name='password'
                                    style={{ background: "#F0EFFF" }} type="password" placeholder="Password" />
                            </FloatingLabel>


                            <FloatingLabel className='mb-3' controlId="floatingPassword" label="Confirm Password">
                                <Form.Control value={user.confirmpassword} onChange={(e) => setInputs(e)} name='confirmpassword'
                                    style={{ background: "#F0EFFF" }} type="password" placeholder="confirm Password" />
                            </FloatingLabel>



                            <div className="d-grid gap-2">
                                <Button onClick={(e) => handleRegister(e)} variant="primary" size="lg" style={{ background: "#4D47C3" }}>
                                    Register
                                </Button>

                            </div>
                            <h4 className='mt-5 ' style={{ color: '#BEBEBE' }}>or continue with</h4>
                            <div className='mt-5 '>
                                <img className='botimg' src={assets.Facebook} alt="" />
                                <img className='botimg' src={assets.apple} alt="" />
                                    <img onClick={registerwithgoogle} className='botimg' src={assets.google} alt="" />

                                
                            </div>
                        </div>

                    </Col>

                    <Col className='col2' >
                        <h1 className='sign ' style={{ marginTop: '50px' }}><strong>Sign Up to</strong></h1>
                        <p className='col2' style={{ fontWeight: '500', fontSize: '35px', marginTop: '-20px' }}>Lorem lpsum is simply</p>
                        <p className='col2  col2text'>if you already have an account <br />
                            you can <a href="/Login" style={{ textDecoration: 'none', color: "#4D47C3" }}>Login Here !</a></p>


                        <img id='col2img' src={assets.Saly} alt="" />

                    </Col>

                </Row>
            </Container>


        </div>
    )
}

export default Register