import React from 'react';
import { useUser } from '../UserContext'; // Adjust the path as needed

const Welcome = () => {
    const { user } = useUser();

    return (
        <div>
            <h1>Welcome, {user ? user.username : 'Guest'}!</h1>
        </div>
    );
};

export default Welcome;
