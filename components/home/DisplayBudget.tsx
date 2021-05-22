import { useState } from "react";
import MainButton from "../micro/MainButton";
import NewTransactionModal from "../modals/NewTransactionModal";

interface Props {
    totalBudget: number,
    daysRemaining: number,
    dailyBudget: number
}

const DisplayBudget = ({totalBudget, daysRemaining, dailyBudget}: Props) => {
    const [ntModalOpen, setNTModalOpen] = useState(false)

    return (
        <div className="flex flex-col items-center mt-10">
            <NewTransactionModal open={ntModalOpen} onClose={() => setNTModalOpen(false)} />
            <h2 className="text-accentMain text-3xl">Remaining Budget</h2>
            <div className="bg-light-bgSecondary dark:bg-dark-bgSecondary p-5 rounded-lg mt-5">
                <p className="text-accentMain text-5xl">${totalBudget.toFixed(2)}</p>
            </div>
            <span className="flex flex-row mt-5"><p className="text-accentMain text-2xl border-accentMain border-b-2 mr-3">{daysRemaining}</p><p className="text-light-textSecondary dark:text-dark-textSecondary text-2xl">Days Remaining</p></span>
            <div className="bg-light-bgSecondary dark:bg-dark-bgSecondary p-4 rounded-lg mt-5">
                <p className="text-accentMain text-3xl">${dailyBudget.toFixed(2)}</p>
                <p className="absolute text-light-textDark text-xl ml-28 -mt-3">/day</p>
            </div>
            <MainButton className="mt-7" onClick={() => setNTModalOpen(true)} >+ Add Transaction</MainButton>
        </div>
    )
};

export default DisplayBudget;