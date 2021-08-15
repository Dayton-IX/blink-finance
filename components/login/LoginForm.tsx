import { useState } from "react";
import { userSignIn } from "../../scripts/auth";
import MainButton from "../micro/MainButton";

type Props = {
    onSuccess: Function
    changeForm: Function
}

enum FormField {
    EMAIL = "EMAIL",
    PASSWORD = "PASSWORD",
    CONFRIM_PASSWORD = "CONFIRM_PASSWORD"
}

type FormError = {
    message: string,
    fields?: FormField[]
}

const LoginForm = ({onSuccess, changeForm}: Props) => {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formError, setFormError] = useState<FormError>({message: ''})

    const onLogIn = async () => {
        setLoading(true)
        try {
            const userData = await userSignIn(email, password)
            console.log("signIn userData:", userData)
            if (userData?.session) onSuccess()
            else if (userData?.error) setFormError({message: userData.error.message, fields: []})
            else setFormError({message: "Something went wrong, please try again!", fields: []})
        } catch (e) {
            console.error(e)
            setFormError({message: "Something went wrong, please try again!", fields: []})
        }
        setLoading(false)
    }

    return (
        <div>
           <h2 className="text-accentSecondary text-3xl ml-5 font-thin">Log In</h2>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col mx-auto w-11/12 mt-5">
                <label className={`${formError.fields?.includes(FormField.EMAIL) ? 'text-redLight' : 'text-light-textSecondary dark:text-dark-textSecondary' } ml-4`} htmlFor="email">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" className={`${ formError.fields?.includes(FormField.EMAIL) ? "border-redLight" : "border-light-textSecondary" } text-light-textMain dark:text-dark-textMain border-b bg-transparent focus:outline-none px-2 w-5/6 mx-auto py-1 mb-5`} placeholder="email@example.com" />

                <label className={`${formError.fields?.includes(FormField.PASSWORD) ? 'text-redLight' : 'text-light-textSecondary dark:text-dark-textSecondary' } ml-4`} htmlFor="email">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" className={`${ formError.fields?.includes(FormField.PASSWORD) ? "border-redLight" : "border-light-textSecondary" } text-light-textMain dark:text-dark-textMain border-b bg-transparent focus:outline-none px-2 w-5/6 mx-auto py-1 mb-5`} placeholder="password" />

                <p className="text-redMain text-center mx-auto text-lg">{formError.message}</p>
                <MainButton loading={loading} onClick={() => onLogIn()} className="px-20 mx-auto w-max" >Log In</MainButton>
            </form>
            <p className="text-accentSecondary text-lg flex flex-row justify-center mx-auto self-center text-center w-full my-7">• or •</p>
            <button onClick={() => changeForm()} className={`text-accentSecondary ring-accentSecondary ring-inset ring-2 transition-all rounded-md px-4 py-2 mx-auto flex focus:outline-none`}>Sign Up</button>
        </div>
    )
};

export default LoginForm;