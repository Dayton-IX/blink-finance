import { AppProps } from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;600;700&display=swap" rel="stylesheet" />
			</Head>
			
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
