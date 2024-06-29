import {useEffect, useState } from 'react';
import './SignupForm.css'
import { useUser } from '../../UserContext';
import { useNavigate } from 'react-router-dom';

function SignupForm() {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')

    const { signup } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        setErrMsg('');
    }, [email, password, username]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signup({email, username, password});
            if(response.status === 201) {
                navigate('/users/login')
            }
        } catch (error) {
            if(response.status === 400) {
                
            }
        }
    }

    const handleEmailInput = (e) => setEmail(e.target.value)
    const handlePasswordInput = (e) => setPassword(e.target.value)
    const handleUsernameInput = (e) => setUsername(e.target.value)

    return(
        <div className="signup-wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Signup</h1>
                <div className="input-box">
                    <input type="email" placeholder='Email' value={email} onChange={handleEmailInput} required />
                    {/* <FaUser className='icon'/> */}
                </div>
                <div className="input-box">
                    <input type="text" placeholder='User Name' value={username} onChange={handleUsernameInput} required />
                    {/* <FaUser className='icon'/> */}
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' value={password} onChange={handlePasswordInput} required />
                    {/* <IoLockClosed className='icon'/> */}
                </div>
                
                {/* <div className="remember-forgot">
                    <label htmlFor ="remember-me"><input type="checkbox" id="remember-me" />Remember me</label>
                    <a href="#">Forgot Password?</a>
                </div> */}
                <button type='submit'>Signup</button>
                <div className="login-link">
                    <p>Already have an account? <a href="/users/login">Login</a></p>
                </div>
            </form>
        </div>
    )
}

export default SignupForm