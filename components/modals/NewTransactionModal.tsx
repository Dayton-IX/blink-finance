import Modal from "../micro/Modal";

type Props = {
    open: boolean
    onClose: Function
}

const NewTransactionModal = ({open, onClose}: Props) => {
    return (
        <Modal open={open} onClose={() => onClose()}>
            <h1 className="text-accentSecondary text-2xl">New Transaction</h1>
            <div className=" mx-auto flex flex-row justify-between" >
                <button className="bg-gradient-to-br from-accentMain to-accentSecondary rounded-md text-dark-textMain px-4 py-2">+ Income</button>
            </div>
        </Modal>
    )
};

export default NewTransactionModal;