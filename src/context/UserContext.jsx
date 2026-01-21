import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const ROLES = {
    STUDENT: 'Student',
    FACULTY: 'Faculty',
    ADMIN: 'Admin',
};

export function UserProvider({ children }) {
    // Default to Student for demo, but allow switching
    const [user, setUser] = useState({
        name: 'Ali Khan',
        role: ROLES.STUDENT,
        avatar: 'https://ui-avatars.com/api/?name=Ali+Khan&background=0D8ABC&color=fff',
    });

    const switchRole = (newRole) => {
        let name = 'Ali Khan';
        let avatar = 'https://ui-avatars.com/api/?name=Ali+Khan&background=0D8ABC&color=fff';

        if (newRole === ROLES.FACULTY) {
            name = 'Dr. Sarah Ahmed';
            avatar = 'https://ui-avatars.com/api/?name=Sarah+Ahmed&background=10B981&color=fff';
        } else if (newRole === ROLES.ADMIN) {
            name = 'Admin User';
            avatar = 'https://ui-avatars.com/api/?name=Admin&background=F59E0B&color=fff';
        }

        setUser({ name, role: newRole, avatar });
    };

    return (
        <UserContext.Provider value={{ user, switchRole }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}
