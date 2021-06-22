import { useState } from "react";
import Modal from "../micro/Modal";
import NumberFormat from "react-number-format"

type Props = {
    open: boolean
    onClose: Function
}

enum TransactionType {
    INCOME,
    EXPENSE
}

const NewTransactionModal = ({open, onClose}: Props) => {
    const [type, setType] = useState(TransactionType.INCOME)
    const [transactionValue, setTransactionValue] = useState<number | undefined>(0)

    return (
        <Modal open={open} onClose={() => onClose()}>
            <h1 className="text-accentSecondary text-2xl">New Transaction</h1>
            <div className="mx-auto flex flex-col justify-center mt-12" >
                <div className="mx-auto flex flex-row justify-between">
                    <button onClick={() => setType(TransactionType.INCOME)} className={`${type === TransactionType.INCOME ? 'bg-gradient-to-br from-accentMain to-accentSecondary text-dark-textMain' : 'text-accentSecondary ring-accentSecondary ring-inset ring-2'} transition-all rounded-md px-4 py-2 mx-3 focus:outline-none`}>+ Income</button>
                    <button onClick={() => setType(TransactionType.EXPENSE)} className={`${type === TransactionType.EXPENSE ? 'bg-gradient-to-tr from-redLight to-redMain text-dark-textMain' : 'text-redLight ring-redLight ring-inset ring-2'} transition-all rounded-md px-4 py-2 mx-3 focus:outline-none`}>- Expense</button>
                </div>
                <NumberFormat value={transactionValue} onValueChange={(values) => setTransactionValue(values.floatValue)} className={`flex flex-row items-center justify-center mx-auto p-5 focus:outline-none ${type === TransactionType.INCOME ? "text-accentMain" : "text-redLight"} text-4xl w-5/6 mt-10 bg-transparent text-center transition-all`} allowNegative={false} decimalScale={2} fixedDecimalScale thousandSeparator allowEmptyFormatting placeholder="0.00" format={`${type === TransactionType.INCOME ? '+' : '-'}$`} />
            </div>
        </Modal>
    )
};

export default NewTransactionModal;