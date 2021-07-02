import Modal from "../micro/Modal";

type Props = {
    open: boolean,
    onClose: Function
}

const EditCategories = ({open, onClose}: Props) => {
    return (
        <Modal open={open} onClose={() => onClose()}>
            <h1 className="text-accentSecondary text-2xl">Categories</h1>
        </Modal>
    )
};

export default EditCategories;