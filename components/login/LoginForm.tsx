import { useState } from "react";
import MainButton from "../micro/MainButton";

type Props = {
    onSuccess: Function
    changeForm: Function
}

const LoginForm = ({onSuccess, changeForm}: Props) => {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onLogIn = async () => {
        setLoading(true)
        try {
            
        } catch (e) {
            console.error(e)
        }
        setLoading(false)
    }

    return (
        <div>
           <h2 className="text-accentSecondary text-3xl ml-5 font-thin">Log In</h2>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col mx-auto w-11/12 mt-5">
                <label className={`text-light-textSecondary dark:text-dark-textSecondary ml-4`} htmlFor="email">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" className={`text-light-textMain dark:text-dark-textMain border-b border-light-textSecondary bg-transparent focus:outline-none px-2 w-5/6 mx-auto py-1 mb-5`} placeholder="email@example.com" />
                <label className={`text-light-textSecondary dark:text-dark-textSecondary ml-4`} htmlFor="email">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" className={`text-light-textMain dark:text-dark-textMain border-b border-light-textSecondary bg-transparent focus:outline-none px-2 w-5/6 mx-auto py-1 mb-5`} placeholder="password" />
                <MainButton onClick={() => onLogIn()} className="px-20 mx-auto w-max" >Log In</MainButton>
            </form>
            <p className="text-accentSecondary text-lg flex flex-row justify-center mx-auto self-center text-center w-full my-7">• or •</p>
            <button onClick={() => changeForm()} className={`text-accentSecondary ring-accentSecondary ring-inset ring-2 transition-all rounded-md px-4 py-2 mx-auto flex focus:outline-none`}>Sign Up</button>
        </div>
    )
};

export default LoginForm;