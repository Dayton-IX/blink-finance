import { useState } from 'react'
import Modal from "../micro/Modal";
import Category from "../inputs/Category"

type Props = {
    open: boolean,
    onClose: Function
}

const EditCategories = ({open, onClose}: Props) => {
    const [categories, setCategories] = useState<Category[]>([
        {
			id: '1',
			name: 'Rent',
			monthlyAmount: 1650,
			remainingAmount: 0
		},
		{
			id: '2',
			name: 'Food',
			monthlyAmount: 400,
			remainingAmount: 230
		},
		{
			id: '3',
			name: 'Gas',
			monthlyAmount: 50,
			remainingAmount: 20
		},
		{
			id: '4',
			name: 'Investments',
			monthlyAmount: 50,
			remainingAmount: 20
		},
		{
			id: '5',
			name: 'Other',
			monthlyAmount: 100,
			remainingAmount: 30
		},
    ])
    return (
        <Modal open={open} onClose={() => onClose()}>
            <h1 className="text-accentSecondary text-2xl">Categories</h1>
            <div className="flex flex-col w-11/12 mx-auto">
                {categories.map((category, input) => (
                    <Category key={category.id} category={category} />
                ))}
            </div>
        </Modal>
    )
};

export default EditCategories;