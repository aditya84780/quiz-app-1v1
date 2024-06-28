import './Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <p>10Quiz</p>
            <div className='nav-menu'>
                <ul>
                    <li><a style={{ textDecoration: 'none'}} href= {'/'}>Home</a></li>
                    <li><a style={{ textDecoration: 'none'}} href= {'/users/login'}>Login</a></li>
                    <li>...</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar