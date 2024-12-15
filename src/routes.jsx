import { App } from './components/App.jsx';
import { Profile } from './components/Profile.jsx';
import { Error } from './components/Error.jsx';

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
    },
    {
        path: "profile",
        element: <Profile />,
    },
    {
        path: "profile/:name",
        element: <Profile />,
    },
];

export { routes };