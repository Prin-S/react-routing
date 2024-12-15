import { useParams } from 'react-router-dom';
import { Default } from './Default.jsx';
import { Popeye } from './Popeye.jsx';
import { Spinach } from './Spinach.jsx';
import { ProfileError } from './ProfileError.jsx';

function Profile() {
    const { name } = useParams();
    return (
        <div>
            <h1>Hello from profile page!</h1>
            <p>So, how are you?</p>
            <hr />
            <h2>The profile visited is here:</h2>
            {name == 'popeye' ? (
                <Popeye />
            ) : name == 'spinach' ? (
                <Spinach />
            ) : name == undefined ? (
                <Default />
            ) : (
                <ProfileError />
            )}
        </div>
    );
}

export { Profile };