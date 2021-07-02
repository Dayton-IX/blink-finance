import Modal from "../micro/Modal";

type Props = {
    open: boolean,
    onClose: Function
}

const AddCategory = ({open, onClose}: Props) => {
    return (
        <Modal open={open} onClose={() => onClose()}>
            
        </Modal>
    )
};

export default AddCategory;