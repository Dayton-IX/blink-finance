import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getUser } from "../../scripts/auth";
import Login from "../login/Login"
import Loader from "../micro/Loader";

type Props = {
    children: any
}

const WithAuth = ({children}: Props) => {
    const router = useRouter()

    const verifyUser = () => {
        const user = getUser()
        console.log("User:", user)
        if (!user?.aud) router.push('/login')
    }

    useEffect(() => {
        verifyUser()
    }, [])

    return (
        <div>
            {children}
        </div>
    )
};

export default WithAuth;