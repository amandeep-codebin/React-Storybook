import React, { createContext, ReactNode, useState } from "react";


export interface AuthContextType {
    isAuthenticated : boolean
    signin : (cb? : VoidFunction) => void;
    signout : (cb? : VoidFunction) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);


const AuthContextProvider = ({children}:{children : ReactNode}) => {
    const [isAuthenticated , setAuthenticated] = useState(false);
    
    const signin = (cb:VoidFunction = () => {}) => {
        setAuthenticated(true);
        cb();
    }

    const signout = (cb:VoidFunction = () => {}) => {
        setAuthenticated(false);
        cb();
    }

    const value = {isAuthenticated, signin, signout}
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}



export default AuthContextProvider;