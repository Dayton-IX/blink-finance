import { useState } from "react";
import { getPoolData } from "../../scripts/data";
import Categories from "./Categories";
import DisplayBudget from "./DisplayBudget";

type Props = {
    poolID: string
}

const BudgetPool = ({poolID}: Props) => {
    const [totalBudget, setTotalBudget] = useState<number>(0)
	const [daysRemaining, setDaysRemaining] = useState<number>(0)
	const [dailyBudget, setDailyBudget] = useState<number>(0)
	const [categories, setCategories] = useState<CategoryData[] | null>(null)

	const fetchPoolData = async () => {
		try {
			const result = await getPoolData(poolID)
			if (result.data) {
				setTotalBudget(result.data[0].totalBudget)
			}
		} catch (e) {
			console.error("fetchPoolData Error: ", e)
		}
	}

    return (
        <div>
            <DisplayBudget totalBudget={totalBudget} daysRemaining={daysRemaining} dailyBudget={dailyBudget} />
			<Categories categories={categories} />
        </div>
    )
};

export default BudgetPool