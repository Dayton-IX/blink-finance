import { useState } from 'react'
import DisplayBudget from '../components/home/DisplayBudget'
import Layout from '../components/macro/Layout'
import LineHeader from '../components/micro/LineHeader'
import { Colors } from '../constants/Colors'
import { Edit } from '../constants/svgLib'
import { Category } from '../types'

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
			name: 'Misc',
			monthlyAmount: 50,
			remainingAmount: 20
		},
		{
			id: '4',
			name: 'Gas',
			monthlyAmount: 100,
			remainingAmount: 30
		},
	])

	return (
		<Layout>
			<LineHeader>Good {greetingTime}, Max</LineHeader>
			<DisplayBudget totalBudget={totalBudget} daysRemaining={daysRemaining} dailyBudget={dailyBudget} />
			<div className="flex flex-col mt-8">
				<span className="flex flex-row">
					<h2 className="text-light-textMain dark:text-dark-textMain text-xl ">Categories</h2>
					<button className="ml-3 focus:outline-none"><Edit color={Colors.accentMain} /></button>
				</span>
				<div className="bg-light-bgSecondary dark:bg-dark-bgSecondary rounded-lg p-5 mt-5 grid grid-flow-row grid-cols-3">
					{categories.map(category => {
						return (
							<div key={category.id} className="flex flex-col col-span-1 mx-auto text-center">
								<p className="text-light-textMain dark:text-dark-textMain text-lg">{category.name}</p>
								<p className="text-accentMain text-lg">${category.remainingAmount}</p>
							</div>
						)
					})}
				</div>
			</div>
		</Layout>
	)
}

export default Home