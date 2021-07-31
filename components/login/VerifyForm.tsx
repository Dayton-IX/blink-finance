import { useState } from 'react' 
import MainButton from '../micro/MainButton'

type Props = {
    onSuccess: Function
    email: string
}

const VerifyForm = ({onSuccess, email}: Props) => {
    const [loading, setLoading] = useState(false)
    const [verifyCode, setVerifyCode] = useState('')

    const onVerify = async () => {

    }

    return (
        <div>
            <h2 className="text-accentSecondary text-3xl ml-5 font-thin">Verify Your Email</h2>
            <p className="text-light-textMain dark:text-dark-textMain text-center mx-auto w-5/6">A verification link has been sent to {email}! Please check your email and follow the link to sign in!</p>
        </div>
    )
};

export default VerifyForm;