import { createContext, useState, useContext } from 'react';
import axios from 'axios'

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (credentials) => {
        try {
            const response = await axios.post('http://localhost:8080/users/login', credentials);
            setUser(response.data);
            return response;
        } catch (error) {
            throw error;
        }
    };

    const logout = () => {
        setUser(null);
    };

    const signup = async (credentials) => {
        try {
            const response = await axios.post('http://localhost:8080/users/signup', credentials);
            return response;
        } catch (error) {
            throw error;
        }
    }

    return (
        <UserContext.Provider value={{ user, login, logout, signup }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
