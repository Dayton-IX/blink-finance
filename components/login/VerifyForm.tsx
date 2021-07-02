import { useState } from 'react' 
import MainButton from '../micro/MainButton'

type Props = {
    onSuccess: Function
}

const VerifyForm = ({onSuccess}: Props) => {
    const [loading, setLoading] = useState(false)
    const [verifyCode, setVerifyCode] = useState('')

    const onVerify = async () => {

    }

    return (
        <div>
            <h2 className="text-accentSecondary text-3xl ml-5 font-thin">Sign Up</h2>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col mx-auto w-11/12 mt-5">
                <label className={`text-light-textSecondary dark:text-dark-textSecondary ml-4`} htmlFor="email">Verification Code</label>
                <input onChange={(e) => setVerifyCode(e.target.value)} type="text" className={`text-light-textMain dark:text-dark-textMain border-b border-light-textSecondary bg-transparent focus:outline-none px-2 w-5/6 mx-auto py-1 mb-5`} placeholder="email@example.com" />
                <MainButton onClick={() => onVerify()} className="px-20 mx-auto w-max" >Verify</MainButton>
            </form>
            <p className="text-accentSecondary text-lg flex flex-row justify-center mx-auto self-center text-center w-full my-7">• or •</p>
        </div>
    )
};

export default VerifyForm;