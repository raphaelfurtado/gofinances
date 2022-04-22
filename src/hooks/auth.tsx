import React, { createContext, ReactNode, useContext } from "react";

interface AuthProviderProps{
    children: ReactNode;
}

interface User{
    id: string;
    name: string;
    email: string;
    photo?: string;
}

interface IAuthContextData{
    user: User;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const user = {
        id: '123123',
        name: 'Raphael Furtado',
        email: 'raphaelaraujo075@gmail.com'
    }
    
    return (
        <AuthContext.Provider value={{ user }}>
           { children }
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };