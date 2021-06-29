import { useState } from "react";
import { Colors } from "../../constants/Colors"
import { Logo } from "../../constants/svgLib"
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm"
import VerifyForm from "./VerifyForm"

type Props = {
    onSuccess: Function
}

enum FormType {
    LOGIN,
    SIGNUP,
    VERIFY
}

const Login = ({onSuccess}: Props) => {
    const [form, setForm] = useState(FormType.LOGIN)
    return (
        <div className="w-screen h-screen">
            <div className="w-screen bg-gradient-to-bl from-accentMain to-accentSecondary py-20">
                <h1 className="text-4xl items-center flex flex-row mx-auto w-max text-dark-textMain"><Logo color={Colors.dark.textMain} className="mr-5" width={55} height={55} /> Blink</h1>
            </div>
            <div className="w-full bg-light-bgMain dark:bg-dark-bgMain rounded-t-3xl h-6 -mt-5" />
            {form === FormType.LOGIN ? 
                <LoginForm changeForm={() => setForm(FormType.SIGNUP)} onSuccess={() => onSuccess()} />
                :
                form === FormType.SIGNUP ? 
                    <SignUpForm />
                    :
                    <VerifyForm />
            }
        </div>
    )
};

export default Login;