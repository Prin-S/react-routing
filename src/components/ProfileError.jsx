import { Link } from "react-router-dom";

function ProfileError() {
    return (
        <div>
            <p>Profile not found!</p>
            <Link to="/profile">Go back</Link>
        </div>
    );
}

export { ProfileError };