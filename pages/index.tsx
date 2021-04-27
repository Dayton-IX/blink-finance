import Head from 'next/head'
import Layout from '../components/macro/Layout'
import Navbar from '../components/macro/Navbar'

const Home = () => {
	return (
		<Layout>
			<h1 className="text-light-textMain dark:text-dark-textMain text-xl">Good Afternoon, Max</h1>
		</Layout>
	)
}

export default Home