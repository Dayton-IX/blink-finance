import { useState } from "react";
import Modal from "../micro/Modal";
import NumberFormat from "react-number-format"
import MainButton from "../micro/MainButton"

type Props = {
    open: boolean
    onClose: Function
}

enum TransactionType {
    INCOME,
    EXPENSE
}

const NewTransactionModal = ({open, onClose}: Props) => {
    const [loading, setLoading] = useState(false)
    const [type, setType] = useState(TransactionType.INCOME)
    const [transactionValue, setTransactionValue] = useState(0)
    const [expenseCategories, setExpenseCategories] = useState([
        "Rent",
        "Food",
        "Gas",
        "Investments",
        "Other"
    ])
    const [memo, setMemo] = useState('')

    const onSaveTransaction = async () => {

    }

    return (
        <Modal open={open} onClose={() => onClose()}>
            <h1 className="text-accentSecondary text-2xl">New Transaction</h1>
            <form onSubmit={(e) => e.preventDefault()} className="mx-auto flex flex-col justify-center mt-12" >
                <div className="mx-auto flex flex-row justify-between">
                    <button onClick={() => setType(TransactionType.INCOME)} className={`${type === TransactionType.INCOME ? 'bg-gradient-to-br from-accentMain to-accentSecondary text-dark-textMain' : 'text-accentSecondary ring-accentSecondary ring-inset ring-2'} transition-all rounded-md px-4 py-2 mx-3 focus:outline-none`}>+ Income</button>
                    <button onClick={() => setType(TransactionType.EXPENSE)} className={`${type === TransactionType.EXPENSE ? 'bg-gradient-to-tr from-redLight to-redMain text-dark-textMain' : 'text-redLight ring-redLight ring-inset ring-2'} transition-all rounded-md px-4 py-2 mx-3 focus:outline-none`}>- Expense</button>
                </div>
                <NumberFormat value={transactionValue} onValueChange={(values) => setTransactionValue(parseFloat(values.value))} className={`flex flex-row items-center justify-center mx-auto p-5 focus:outline-none ${type === TransactionType.INCOME ? "text-accentMain" : "text-redLight"} text-4xl w-5/6 mt-10 bg-transparent text-center transition-all`} allowNegative={false} decimalScale={2} fixedDecimalScale thousandSeparator allowEmptyFormatting placeholder="0.00" prefix={`${type === TransactionType.INCOME ? '+' : '-'}$`} />
                <div className="flex flex-row justify-between w-11/12 mx-auto mt-5 items-center">
                    <label htmlFor="category" className={`${type === TransactionType.INCOME ? "text-accentMain" : "text-redLight"} text-lg`}>Category</label>
                    <select id="category" className="bg-transparent text-light-textSecondary dark:text-dark-textSecondary text-lg text-right">
                        {type === TransactionType.INCOME ? 
                            <>
                                <option>Income</option>
                                <option>Gift</option>
                                <option>Investment</option>
                                <option>Other</option>
                            </>
                        : 
                            <>
                                {expenseCategories.map((category) => (
                                    <option key={category}>{category}</option>
                                ))}
                            </>
                        }
                    </select>
                </div>
                <div className="flex flex-row justify-between w-11/12 mx-auto mt-5 items-center">
                    <label htmlFor="frequency" className={`${type === TransactionType.INCOME ? "text-accentMain" : "text-redLight"} text-lg`}>Frequency</label>
                    <select id="frequency" className="bg-transparent text-light-textSecondary dark:text-dark-textSecondary text-lg text-right">
                        <option>One Time</option>
                        <option>Monthly</option>
                        <option>Weekly</option>
                        <option>Yearly</option>
                    </select>
                </div>
                <div className="flex flex-col text-center items-center mx-auto w-11/12 mt-3">
                    <label htmlFor="memo" className={`${type === TransactionType.INCOME ? "text-accentMain" : "text-redLight"} text-lg my-3`}>Memo</label>
                    <textarea onChange={(e) => setMemo(e.target.value)} id="memo" rows={4} className="text-light-textMain dark:text-dark-textMain bg-light-bgTertiary dark:bg-dark-bgTertiary rounded-lg p-2 w-11/12" placeholder="Memo..." /> 
                </div>
                <MainButton colorA={type === TransactionType.INCOME ? 'accentMain' : 'redMain'} colorB={type === TransactionType.INCOME ? 'accentSecondary' : 'redLight'} onClick={() => onSaveTransaction()} className="mx-auto mt-10">Save Transaction</MainButton>
            </form>
        </Modal>
    )
};

export default NewTransactionModal;