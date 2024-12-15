import { Link } from "react-router-dom";

function Spinach() {
    return (
        <>
            <p>Hi, I am Spinach! Popeye loves to eat me!</p>
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

export { Spinach };