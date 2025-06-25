'use client'

import './Hero.css'

import Header from '../../layout/Header/Header'
import ButtonPink from '../../ui/ButtonPink/ButtonPink'
import Play from '../../assets/svg/play.svg'
import Bag from '../../assets/svg/bag.svg'
import Spline from '@splinetool/react-spline'

export default function Hero() {
	return (
		<div className='hero'>
			<Header />

			<div className='heroCanvasWrapper'>
				<Spline
					scene='https://prod.spline.design/fGKwy0N0umIJBltq/scene.splinecode'
					className='heroCanvas'
				/>
			</div>

			<div className='heroInf'>
				<div className='heroTitle'>
					Invest in What’s Next Before the World Knows ↴
				</div>

				<div className='heroBottom'>
					<div className='heroTexts'>
						<div className='heroSubtitles'>
							<div className='heroSubtitle'>
								<Bag />
								Exclusive
							</div>
							<div className='heroSubtitle'>
								<Bag />
								Top Startups
							</div>
						</div>

						<div className='heroText'>
							Access the startups VCs fight over, the assets institutions chase,
							and the companies you were never meant to reach — all in one
							platform.
						</div>
					</div>
					<div className='heroButtons'>
						<ButtonPink extraClass='heroPinkBtn' />
						<button className='heroClearBtn'>
							<Play />
							Check your wallet
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
