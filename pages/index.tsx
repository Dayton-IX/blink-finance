import { useEffect, useState } from 'react'
import Layout from '../components/macro/Layout'
import MainButton from '../components/micro/MainButton'
import { getUser } from '../scripts/auth'
import { createUser, getUserData } from '../scripts/data'

enum GreetingTime {
	MORNING = 'Morning',
	AFTERNOON = 'Afternoon',
	EVENING = 'Evening'
}

const Home = () => {
	const [userData, setUserData] = useState<UserData | null>(null)

	const grabUserData = async () => {
		try {
			const user = getUser()
			if (user) {
				const query = await getUserData(user.id)
				if (query) {
					if (query.data) {
						console.log(query?.data[0])
						setUserData(query?.data[0])
					}
				}
			}
		} catch (e) {
			console.error("grabUserData Error: ", e)
		}
	}

	useEffect(() => {
		grabUserData()
	}, [])

	return (
		<Layout>
			{/* <MainButton onClick={() => createUser("4ed32bd8-ad73-4678-9802-d4554a568400", "max.dayton@protonmail.com")}>Create User</MainButton> */}
		</Layout>
	)
}

export default Home