import { AppProps } from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'
import { useState } from 'react'
import { Colors } from '../constants/Colors'
import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }: AppProps) {
	const [dark, setDark] = useState(false);

	return (
		<>
			<Head>
                <meta charSet='utf-8' />
                <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
                <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
                <meta name='description' content='Blink Finance is the best way to stay on top of your budget!' />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;600;700&display=swap" rel="stylesheet" />
				<title>Blink Finance</title>
				<link rel="icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content={Colors.dark.bgMain} />
                <link rel="apple-touch-icon" href="/assets/Icon192.png" />
                <meta name="apple-mobile-web-app-status-bar" content={Colors.accentSecondary} />
			</Head>

            <NextNProgress color={Colors.accentMain} />
			<Component {...pageProps} />

			<style global jsx>{`
                :root {
					background-color: ${dark ? Colors.dark.bgMain : Colors.light.bgMain};
                    transition: all 0.3s;
                    font-family: 'Fira Code', monospace, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                    scrollbar-width: thin;
                    scrollbar-color: ${dark ? Colors.light.bgTertiary : Colors.dark.bgTertiary} ${dark ? Colors.dark.bgMain : Colors.light.bgMain};
				}
				html {
					background-color: ${dark ? Colors.dark.bgMain : Colors.light.bgMain};
                    transition: all 0.3s;
                    scrollbar-track-color: ${dark ? Colors.dark.bgMain : Colors.light.bgMain};
				}
                *::-webkit-scrollbar {
                    width: 12px;
                }
                *::-webkit-scrollbar-track {
                    background: ${dark ? Colors.dark.bgMain : Colors.light.bgMain};
                }
                *::-webkit-scrollbar-thumb {
                    background-color: ${dark ? Colors.light.bgTertiary : Colors.dark.bgTertiary};
                    border-radius: 20px;
                    border: 3px solid ${dark ? Colors.dark.bgMain : Colors.light.bgMain};
                }
            `}</style>
		</>
	)
}

export default MyApp
