import React, { useState, FC } from "react";

export interface IAuthCtx  {
    token: string | null;
    isLoggedIn: boolean;
    login: (token: string)=> void;
    logout: ()=> void
}

const AuthContext = React.createContext<IAuthCtx>({
    token: '',
    isLoggedIn: false,
    login: (token: string)=>{},
    logout: ()=>{}
})

const AuthContextProvider: FC = (props) => {
    const [token, setToken] = useState<string | null>(null);
    
    const userIsLoggedIn = !!token;

    const loginHandler = (token:string) => {
        setToken(token)
    }

    const logoutHandler = () => {
        setToken(null)
    }

    const contextValue: IAuthCtx = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return (
        <AuthContext.Provider value={contextValue}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;