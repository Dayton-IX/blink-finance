import { useState } from 'react';
import MainButton from '../micro/MainButton'
import Modal from '../micro/Modal'

type Props = {
    open: boolean
    onClose: Function
}

const NewPoolModal = ({open, onClose}: Props) => {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')

    const handleNewPool = async () => {
        
    }

    return (
        <Modal open={open} onClose={() => onClose()}>
            <h1 className="text-accentSecondary text-2xl">New Budget Pool</h1>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col w-11/12 mx-auto mt-7 justify-center items-center">
                <input id="name" type="text" className="text-light-textMain dark:text-dark-textMain border rounded-lg border-light-textMain bg-transparent focus:outline-none px-2 w-3/4 my-5 text-xl mx-auto py-2 text-center" placeholder="Name" />
                <MainButton onClick={() => handleNewPool()} >Create</MainButton>
            </form>
        </Modal>
    )
};

export default NewPoolModal;