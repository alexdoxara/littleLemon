import logo from "./assets/Logo.svg"

export default function Nav() {
    return (
        <nav>

            <img src={logo} />
            <ul>
                <li><a>Home</a></li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Log in</li>
            </ul>
        </nav>

    )
}