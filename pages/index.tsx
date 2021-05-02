import { useState } from 'react'
import Layout from '../components/macro/Layout'
import LineHeader from '../components/micro/LineHeader'

enum GreetingTime {
	MORNING = 'Morning',
	AFTERNOON = 'Afternoon',
	EVENING = 'Evening'
}

const Home = () => {
	const [totalBudget, setTotalBudget] = useState<number>(0)
	const [daysRemaining, setDaysRemaining] = useState<number>(0)
	const [greetingTime, setGreetingTime] = useState<GreetingTime>(GreetingTime.AFTERNOON)
	const [dailyBudget, setDailyBudget] = useState<number>(0)

	return (
		<Layout>
			<LineHeader>Good {greetingTime}, Max</LineHeader>
			<div className="flex flex-col items-center mt-10">
				<h2 className="text-accentMain text-3xl">Remaining Budget</h2>
				<div className="bg-light-bgSecondary dark:bg-dark-bgSecondary p-5 rounded-lg mt-5">
					<p className="text-accentMain text-5xl">${totalBudget.toFixed(2)}</p>
				</div>
				<span className="flex flex-row mt-5"><p className="text-accentMain text-2xl border-accentMain border-b-2 mr-3">{daysRemaining}</p><p className="text-light-textSecondary dark:text-dark-textSecondary text-2xl">Days Remaining</p></span>
				<div className="bg-light-bgSecondary dark:bg-dark-bgSecondary p-4 rounded-lg mt-5">
					<p className="text-accentMain text-3xl">${dailyBudget.toFixed(2)}</p>
					<p className="absolute text-light-textDark text-xl ml-28 -mt-3">/day</p>
				</div>
			</div>
		</Layout>
	)
}

export default Home