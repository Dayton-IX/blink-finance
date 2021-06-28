import { useState } from "react";
import MainButton from "../micro/MainButton";

const LoginForm = () => {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onLogIn = async () => {
        setLoading(true)

    }

    return (
        <div>
           <h2 className="text-accentSecondary text-3xl ml-5 font-thin">Log In</h2>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col mx-auto w-11/12 mt-5">
                <label className={`text-light-textSecondary dark:text-dark-textSecondary ml-4`} htmlFor="email">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" className={`text-light-textMain dark:text-dark-textMain border-b border-light-textSecondary bg-transparent focus:outline-none px-2 w-5/6 mx-auto py-1 mb-5`} placeholder="email@example.com" />
                <label className={`text-light-textSecondary dark:text-dark-textSecondary ml-4`} htmlFor="email">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" className={`text-light-textMain dark:text-dark-textMain border-b border-light-textSecondary bg-transparent focus:outline-none px-2 w-5/6 mx-auto py-1 mb-5`} placeholder="password" />
                <MainButton onClick={() => onLogIn()} className="w-5/6 mx-auto" >Log In</MainButton>
            </form>
        </div>
    )
};

export default LoginForm;