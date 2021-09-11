import { useRouter } from "next/router";
import { useState } from "react";
import { Colors } from "../../constants/Colors"
import { Logo } from "../../constants/svgLib"
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm"
import VerifyForm from "./VerifyForm"

enum FormType {
    LOGIN,
    SIGNUP,
    VERIFY
}

const Login = () => {
    const [form, setForm] = useState(FormType.LOGIN)
    const [verifyEmail, setVerifyEmail] = useState('')
    const router = useRouter()

    const onSuccess = () => {
        router.push('/')
    }

    return (
        <div className="w-screen h-screen bg-gradient-to-bl from-accentMain to-accentSecondary">
            <div className="w-screen py-20">
                <h1 className="text-4xl items-center flex flex-row mx-auto w-max text-dark-textMain"><Logo color={Colors.dark.textMain} className="mr-5" width={55} height={55} /> Blink</h1>
            </div>
            <div className="w-11/12 bg-light-bgMain dark:bg-dark-bgMain rounded-3xl -mt-5 max-w-xl mx-auto py-5">
                {form === FormType.LOGIN ? 
                    <LoginForm changeForm={() => setForm(FormType.SIGNUP)} onSuccess={() => onSuccess()} />
                    :
                    form === FormType.SIGNUP ? 
                        <SignUpForm changeForm={() => setForm(FormType.LOGIN)} toVerify={(email: string) => {setForm(FormType.VERIFY); setVerifyEmail(email)}} onSuccess={() => onSuccess()} />
                        :
                        <VerifyForm email={verifyEmail} onSuccess={() => onSuccess()} />
                }
            </div>
        </div>
    )
};

export default Login;