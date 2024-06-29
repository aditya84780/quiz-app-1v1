import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'
import { FaUser } from "react-icons/fa";
import { IoLockClosed } from "react-icons/io5";
import { useUser } from '../../UserContext';

function LoginForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const navigate = useNavigate()
    const { user, login } = useUser();

    useEffect(() => {
        setErrMsg('');
    }, [email, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login({ email, password });
            if (response.status === 200 && user) {
                console.log(user.username)
                console.log(email)
                navigate('/welcome');
            }
        } catch (error) {
            if (!error?.response) {
                setErrMsg('No server response');
            } else if (error.response?.status === 400) {
                setErrMsg('Missing email or password');
            } else if (error.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login failed');
            }
        }
    }

    const handleEmailInput = (e) => setEmail(e.target.value)
    const handlePasswordInput  = (e) => setPassword(e.target.value)

    return (
        <div className="login-wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="email" placeholder='Email' value={email} onChange={handleEmailInput} required />
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' value={password} onChange={handlePasswordInput} required />
                    <IoLockClosed className='icon'/>
                </div>
                
                {/* <div className="remember-forgot">
                    <label htmlFor ="remember-me"><input type="checkbox" id="remember-me" />Remember me</label>
                    <a href="#">Forgot Password?</a>
                </div> */}
                <button type='submit'>Login</button>
                <div className="register-link">
                    <p>Don't have an account? <a href="/users/signup">Register</a></p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm