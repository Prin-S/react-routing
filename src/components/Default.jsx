import { Link } from "react-router-dom";

function Default() {
    return (
        <>
            <p>Oh, nothing to see here!</p>
            <ul>
                <li>
                    <Link to="popeye">Popeye</Link>
                </li>
                <li>
                    <Link to="spinach">Spinach</Link>
                </li>
            </ul>
            <Link to="/">Home</Link>
        </>
    );
}

export { Default };