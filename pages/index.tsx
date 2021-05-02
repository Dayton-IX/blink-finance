import { useState } from 'react'
import DisplayBudget from '../components/home/DisplayBudget'
import Layout from '../components/macro/Layout'
import LineHeader from '../components/micro/LineHeader'
import MainButton from '../components/micro/MainButton'

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

	return (
		<Layout>
			<LineHeader>Good {greetingTime}, Max</LineHeader>
			<DisplayBudget totalBudget={totalBudget} daysRemaining={daysRemaining} dailyBudget={dailyBudget} />
		</Layout>
	)
}

export default Home