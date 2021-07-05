import { useState } from "react"
import NumberFormat from "react-number-format"

type Props = {
    category: Category
}

const Category = ({category}: Props) => {
    const [name, setName] = useState(category.name)
    const [monthlyAmount, setMontlyAmount] = useState(category.monthlyAmount)
    return (
        <div className="flex flex-row w-full mx-auto my-2">
            <input className="bg-transparent border-accentSecondary rounded-lg border text-light-textMain dark:text-dark-textSecondary px-2 py-1" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <NumberFormat className="bg-transparent border-accentSecondary rounded-lg border text-light-textMain dark:text-dark-textSecondary px-2 py-1" value={monthlyAmount} onChange={(e) => setMontlyAmount(parseFloat(e.target.value))} placeholder="Monthly" />
        </div>
    )
};

export default Category;