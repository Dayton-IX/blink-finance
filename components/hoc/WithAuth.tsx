import { useState } from "react";
import Login from "../login/Login"

type Props = {
    children: any
}

const WithAuth = ({children}: Props) => {
    const [auth, setAuth] = useState(true)
    return (
        <div>
            {!auth ? 
            <Login /> 
            :
            <>
                {children}
            </>
            }
        </div>
    )
};

export default WithAuth;