import { Outlet } from "react-router-dom";

function Profile() {
    return (
        <div>
            <h1>Hello from profile page!</h1>
            <p>So, how are you?</p>
            <hr />
            <h2>The profile visited is here:</h2>
            <Outlet />
        </div>
    );
}

export { Profile };