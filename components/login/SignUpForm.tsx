import { useState } from "react"
import { userSignUp } from "../../scripts/auth";
import MainButton from "../micro/MainButton"

type Props = {
    changeForm: Function
    onSuccess: Function
}

enum FormFields {
    EMAIL = "EMAIL",
    PASSWORD = "PASSWORD",
    CONFRIM_PASSWORD = "CONFIRM_PASSWORD"
}

type FormError = {
    message: string,
    fields?: FormFields[]
}

const SignUpForm = ({changeForm, onSuccess}: Props) => {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [formError, setFormError] = useState<FormError>({message: ''})

    const onSignUp = async () => {
        setLoading(true)
        try {
            if (email && email.includes('@')) {
                if (password) {
                    if (password === confirmPassword) {
                        setFormError({message: '', fields: []})
                        const newUserData = await userSignUp(email, password)
                        console.log(newUserData)
                        if (newUserData?.session) {
                            console.log("Sign Up Success!!")
                            onSuccess()
                        } else setFormError({message: "Something went wrong, please try again!", fields: []})
                    } else setFormError({message: "Confirm Password does not match Password!", fields: [FormFields.PASSWORD, FormFields.CONFRIM_PASSWORD]})
                } else setFormError({message: "Invalid Password!", fields: [FormFields.PASSWORD]})
            } else setFormError({message: "Invalid Email!", fields: [FormFields.EMAIL]})
        } catch (e) {
            console.error(e)
            setFormError({message: "Something went wrong, please try again!", fields: []})
        }
        setLoading(false)
    }

    return (
        <div>
           <h2 className="text-accentSecondary text-3xl ml-5 font-thin">Sign Up</h2>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col mx-auto w-11/12 mt-5">
                <label className={`${ formError.fields?.includes(FormFields.EMAIL) ? "text-redLight" : "text-light-textSecondary dark:text-dark-textSecondary" } ml-4`} htmlFor="email">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" className={`${ formError.fields?.includes(FormFields.EMAIL) ? "border-redLight" : "border-light-textSecondary" } text-light-textMain dark:text-dark-textMain border-b bg-transparent focus:outline-none px-2 w-5/6 mx-auto py-1 mb-5`} placeholder="email@example.com" />
                
                <label className={`${ formError.fields?.includes(FormFields.PASSWORD) ? "text-redLight" : "text-light-textSecondary dark:text-dark-textSecondary" } ml-4`} htmlFor="email">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" className={`${ formError.fields?.includes(FormFields.PASSWORD) ? "border-redLight" : "border-light-textSecondary" } text-light-textMain dark:text-dark-textMain border-b bg-transparent focus:outline-none px-2 w-5/6 mx-auto py-1 mb-5`} placeholder="password" />
                
                <label className={`${ formError.fields?.includes(FormFields.CONFRIM_PASSWORD) ? "text-redLight" : "text-light-textSecondary dark:text-dark-textSecondary" } ml-4`} htmlFor="email">Confirm Password</label>
                <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" className={`${ formError.fields?.includes(FormFields.CONFRIM_PASSWORD) ? "border-redLight" : "border-light-textSecondary" } text-light-textMain dark:text-dark-textMain border-b bg-transparent focus:outline-none px-2 w-5/6 mx-auto py-1 mb-5`} placeholder="confirm password" />
                
                <MainButton onClick={() => onSignUp()} loading={loading} className="px-20 mx-auto w-max" >Sign Up</MainButton>
            </form>
            <p className="text-accentSecondary text-lg flex flex-row justify-center mx-auto self-center text-center w-full my-7">• or •</p>
            <button onClick={() => changeForm()} className={`text-accentSecondary ring-accentSecondary ring-inset ring-2 transition-all rounded-md px-4 py-2 mx-auto flex focus:outline-none`}>Log In</button>
        </div>
    )
};

export default SignUpForm;