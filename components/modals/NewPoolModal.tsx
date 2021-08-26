import { useState } from 'react';
import { getUser } from '../../scripts/auth';
import { createBudgetPool } from '../../scripts/data';
import MainButton from '../micro/MainButton'
import Modal from '../micro/Modal'

type Props = {
    open: boolean
    onClose: Function
}

const NewPoolModal = ({open, onClose}: Props) => {
    const [loading, setLoading] = useState(false)
    const [formError, setFormError] = useState<FormError>({message: ''})
    const [name, setName] = useState('')

    const handleNewPool = async () => {
        setLoading(true)
        if (name) {
            try {
                const user = getUser()
                if (user) {
                    await createBudgetPool(user.id, name)
                    setFormError({message: ''})
                    setName("")
                    onClose()
                }
            } catch (e) {
                console.error("handleNewPool Error:", e)
            }
        } else {
            setFormError({message: "Please Name Your New Budget Pool!"})
        }
        setLoading(false)
    }

    return (
        <Modal open={open} onClose={() => onClose()}>
            <h1 className="text-accentSecondary text-2xl">New Budget Pool</h1>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col w-11/12 mx-auto mt-7 justify-center items-center">
                <input id="name" value={name} onChange={(e) => setName(e.target.value)} type="text" className="text-light-textMain dark:text-dark-textMain border rounded-lg border-light-textMain bg-transparent focus:outline-none px-2 w-3/4 my-5 text-xl mx-auto py-2 text-center" placeholder="Name" />

                <p className="text-redMain text-center mx-auto text-lg">{formError.message}</p>
                <MainButton loading={loading} onClick={() => handleNewPool()} >Create</MainButton>
            </form>
        </Modal>
    )
};

export default NewPoolModal;