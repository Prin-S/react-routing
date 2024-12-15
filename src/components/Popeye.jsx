import { Link } from "react-router-dom";

function Popeye() {
    return (
        <>
            <p>Hi, I am Popeye! I love to eat Spinach!</p>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
        </>
    );
}

export { Popeye };