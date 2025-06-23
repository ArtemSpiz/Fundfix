import './globals.css'
import { Manrope, Oswald, Roboto } from 'next/font/google'

export const metadata = {
	title: 'FundFix',
	description: 'FundFix',
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
