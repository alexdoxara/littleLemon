import { Link } from "react-router-dom"
import logo from "./assets/Logo.svg"

export default function Nav() {
    return (
        <nav>

            <img src={logo} />
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li>About</li>
                <li>Menu</li>
                <li><Link to='/book'>Reservations</Link></li>
                <li>Order Online</li>
                <li>Log in</li>
            </ul>
        </nav>

    )
}