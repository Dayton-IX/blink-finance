import { useState } from "react";
import MainButton from "../micro/MainButton"
import NewPoolModal from "../modals/NewPoolModal"

type Props = {
    budgetPools?: string[]
}

const AllPools = ({budgetPools}: Props) => {
    const [loading, setLoading] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <div className="flex flex-col mx-auto max-w-7xl text-center">
            <NewPoolModal open={modalOpen} onClose={() => setModalOpen(false)} />
            <div className="flex flex-col justify-center items-center">
                {!budgetPools && <h3 className="text-accentMain text-2xl my-8">No Budget Pools Found!</h3>}
            </div>
            <MainButton className="text-center flex flex-row justify-center items-center mx-auto w-max" onClick={() => setModalOpen(true)} >+ Create New Pool</MainButton>
        </div>
    )
};

export default AllPools