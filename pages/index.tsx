import { useState } from 'react'
import Categories from '../components/home/Categories'
import DisplayBudget from '../components/home/DisplayBudget'
import Layout from '../components/macro/Layout'
import LineHeader from '../components/micro/LineHeader'

enum GreetingTime {
	MORNING = 'Morning',
	AFTERNOON = 'Afternoon',
	EVENING = 'Evening'
}

const Home = () => {
	const [greetingTime, setGreetingTime] = useState<GreetingTime>(GreetingTime.AFTERNOON)
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
		<Layout>
			{/* <LineHeader>Good {greetingTime}, Max</LineHeader> */}
			<DisplayBudget totalBudget={totalBudget} daysRemaining={daysRemaining} dailyBudget={dailyBudget} />
			<Categories categories={categories} />
		</Layout>
	)
}

export default Home