import Head from 'next/head'
import Layout from '../components/macro/Layout'
import Navbar from '../components/macro/Navbar'
import LineHeader from '../components/micro/LineHeader'

const Home = () => {
	return (
		<Layout>
			<LineHeader>Good Afternoon, Max</LineHeader>
		</Layout>
	)
}

export default Home