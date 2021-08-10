import { useEffect, useState } from 'react'
import AllPools from '../components/home/AllPools'
import BudgetPool from '../components/home/BudgetPool'
import Layout from '../components/macro/Layout'
import Loader from '../components/micro/Loader'
import MainButton from '../components/micro/MainButton'
import { Colors } from '../constants/Colors'
import { getUser } from '../scripts/auth'
import { createUser, getUserData } from '../scripts/data'

const Home = () => {
	const [loading, setLoading] = useState<boolean>(true)
	const [userData, setUserData] = useState<UserData | null>(null)

	const grabUserData = async () => {
		setLoading(true)
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
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		grabUserData()
	}, [])

	return (
		<Layout>
			{/* <MainButton onClick={() => createUser("4ed32bd8-ad73-4678-9802-d4554a568400", "max.dayton@protonmail.com")}>Create User</MainButton> */}
			{loading ? <Loader color={Colors.accentMain} size={50} /> : 
				<>
					{userData?.currentPool ? <BudgetPool poolID={userData.currentPool} /> : 
						<AllPools budgetPools={userData?.budgetPools} />
					}
				</>
			}
		</Layout>
	)
}

export default Home