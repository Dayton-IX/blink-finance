import { Colors } from "../../constants/Colors"
import { Logo } from "../../constants/svgLib"
import LoginForm from "./LoginForm";

const Login = () => {
    return (
        <div className="w-screen h-screen">
            <div className="w-screen bg-gradient-to-bl from-accentMain to-accentSecondary py-20">
                <h1 className="text-4xl items-center flex flex-row mx-auto w-max text-dark-textMain"><Logo color={Colors.dark.textMain} className="mr-5" width={55} height={55} /> Blink</h1>
            </div>
            <div className="w-full bg-light-bgMain dark:bg-dark-bgMain rounded-t-3xl h-6 -mt-5" />
            <LoginForm />
        </div>
    )
};

export default Login;