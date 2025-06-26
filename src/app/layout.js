import './globals.css'
import { Manrope, Oswald, Roboto } from 'next/font/google'

export const metadata = {
	title: 'FundFix',
	description: 'FundFix',
	icons: {
		icon: [
			{ url: '/favicon-fundfix.png' },
			{ url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
			{
				url: '/apple-touch-icon.png',
				sizes: '180x180',
				rel: 'apple-touch-icon',
			},
			{ url: '/favicon.ico', rel: 'shortcut icon' },
		],
	},
	manifest: '/site.webmanifest',
	appleWebApp: {
		title: 'FundFix',
	},
}

const manrope = Manrope({
	subsets: ['latin'],
	weight: ['700', '400', '600', '800', '500'],
	display: 'swap',
})

const oswald = Oswald({
	subsets: ['latin'],
	weight: ['700', '400', '600', '500'],
	display: 'swap',
})

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['700', '400', '600', '500'],
	display: 'swap',
})

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${manrope.variable} ${oswald.variable}`}>
				{children}
			</body>
		</html>
	)
}
