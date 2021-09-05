import { useState } from "react";
import { Colors } from "../../constants/Colors";
import { Edit } from "../../constants/svgLib";
import MainButton from "../micro/MainButton";
import EditCategoriesModal from "../modals/EditCategoriesModal"

type Props = {
    categories: CategoryData[] | null,
    poolID: string
}

const Categories = ({categories, poolID}: Props) => {
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <div className="flex flex-col mt-8">
            <EditCategoriesModal open={modalOpen} onClose={() => setModalOpen(false)} initialCategories={categories} poolID={poolID} />
            <span className="flex flex-row">
                <h2 className="text-light-textMain dark:text-dark-textMain text-xl ">Categories</h2>
                <button onClick={() => setModalOpen(true)} className="ml-3 focus:outline-none"><Edit color={Colors.accentMain} /></button>
            </span>
            <div className={`bg-light-bgSecondary dark:bg-dark-bgSecondary rounded-lg p-5 mt-5 ${categories? "grid grid-flow-row grid-cols-3" : "flex flex-col justify-center items-center"}`}>
                {categories ? categories.map(category => {
                    return (
                        <div key={category.id} className="flex flex-col col-span-1 mx-auto text-center">
                            <p className="text-light-textMain dark:text-dark-textMain text-lg">{category.name}</p>
                            <p className="text-accentMain text-lg">${category.totalBudget - category.totalSpent}</p>
                        </div>
                    )
                }) : 
                    <div className="flex flex-col justify-center items-center text-center mx-auto w-max">
                        <p className="text-center text-lg text-accentMain">No categories set!</p>
                        <MainButton onClick={() => setModalOpen(true)} >+ Create Category</MainButton>
                    </div>
                }
            </div>
        </div>
    )
}

export default Categories;