import { useState } from 'react'
import Modal from "../micro/Modal";
import Category from "../inputs/Category"
import MainButton from '../micro/MainButton';

type Props = {
    open: boolean,
    onClose: Function,
	poolID: string,
	initialCategories: CategoryData[] | null
}

const EditCategories = ({open, onClose, poolID, initialCategories}: Props) => {
    const [categories, setCategories] = useState<CategoryData[]>([
		{
			id: '1',
			budgetPool: '1',
			name: 'Rent',
			totalBudget: 1905,
			totalSpent: 0
		}
	])

	const handleNewCategory = async () => {

	}

    return (
        <Modal open={open} onClose={() => onClose()}>
            <h1 className="text-accentSecondary text-2xl">Categories</h1>
            <table className="flex flex-col w-11/12 max-w-xl mx-auto mt-7">
				<tr className="w-full flex flex-row border-accentMain border-b text-accentMain justify-around mx-auto">
					<th className="text-center">Name</th>
					<th className="text-center">Budget</th>
				</tr>
                {categories.map((category, index) => (
					<Category key={category.id} category={category} />
                ))}
				<MainButton className="w-max mt-10 mx-auto text-center flex flex-row justify-center text-base py-2" onClick={() => handleNewCategory()}>+ New Category</MainButton>
            </table>
        </Modal>
    )
};

export default EditCategories;