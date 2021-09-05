import { useState } from "react"
import NumberFormat from "react-number-format"

type Props = {
    category: CategoryData
}

const Category = ({category}: Props) => {
    const [name, setName] = useState(category.name)
    const [monthlyAmount, setMontlyAmount] = useState(category.totalBudget)
    return (
        <tr className="flex flex-row w-11/12 mx-auto my-2">
            <td>
                <input className="bg-transparent w-11/12 border-accentSecondary text-center border-b text-light-textMain dark:text-dark-textSecondary px-2 py-1" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            </td>
            <td>
                <NumberFormat className="bg-transparent w-11/12 border-accentSecondary text-center border-b text-light-textMain dark:text-dark-textSecondary px-2 py-1" value={monthlyAmount} onChange={(e) => setMontlyAmount(parseFloat(e.target.value))} placeholder="Monthly" />
            </td>
        </tr>
    )
};

export default Category;