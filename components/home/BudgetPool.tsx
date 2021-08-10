import { useState } from "react";
import Categories from "./Categories";
import DisplayBudget from "./DisplayBudget";

const BudgetPool = () => {
    const [totalBudget, setTotalBudget] = useState<number>(0)
	const [daysRemaining, setDaysRemaining] = useState<number>(0)
	const [dailyBudget, setDailyBudget] = useState<number>(0)
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
        <div>
            <DisplayBudget totalBudget={totalBudget} daysRemaining={daysRemaining} dailyBudget={dailyBudget} />
			<Categories categories={categories} />
        </div>
    )
};

export default BudgetPool