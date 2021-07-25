import { useEffect, useState } from "react";
import { getUser } from "../../scripts/auth";
import Login from "../login/Login"

type Props = {
    children: any
}

const WithAuth = ({children}: Props) => {
    const [auth, setAuth] = useState(false)

    const verifyUser = () => {
        const user = getUser()
        console.log("User:", user)
        user?.aud ? setAuth(true) : setAuth(false)
    }

    useEffect(() => {
        verifyUser()
    }, [])

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