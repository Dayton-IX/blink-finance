import { useState } from "react";
import Login from "../login/Login"

type Props = {
    children: any
}

const WithAuth = ({children}: Props) => {
    const [auth, setAuth] = useState(false)

    return (
        <div>
            {!auth ? 
                <Login onSuccess={() => setAuth(true)} /> 
            :
                <>
                    {children}
                </>
            }
        </div>
    )
};

export default WithAuth;