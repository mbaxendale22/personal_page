import { useNavigate } from 'react-router-dom'
import './nav.css'

function NavBar() {
    const navigate = useNavigate()

    return (
        <nav className="nav-header">
            <div onClick={() => navigate('/')} className="nav-item">
                <p>Home</p>
            </div>
            <div onClick={() => navigate('/yllw-app')} className="nav-item">
                <p>Yllw</p>
            </div>
            <div onClick={() => navigate('/')} className="nav-item">
                <p>Me</p>
            </div>
        </nav>
    )
}

export default NavBar
