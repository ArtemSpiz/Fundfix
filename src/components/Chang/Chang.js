'use client'

import './Chang.css'
import Folder from '../../assets/svg/whiteFolder.svg'
import Bag from '../../assets/svg/whiteBag.svg'
import { useEffect } from 'react'
import Image from 'next/image'
import glassCircle from '../../assets/img/GlassCircle.png'

const changCards = [
	{
		image: Bag,
		subtitle1: '#Locked Deals',
		subtitle2: '#Investing',
		text: 'For decades, the best investment opportunities were locked away — reserved for VCs, hedge funds, and insiders',
	},
	{
		image: Folder,
		subtitle1: '#Curated Deals',
		subtitle2: '#Vetted',
		text: 'FundFix gives you access to elite early-stage opportunities, curated by the people who helped build the modern startup world',
	},
]

export default function Chang() {
	useEffect(() => {
		const squares = document.querySelectorAll('.bgSquareChang')

		squares.forEach(square => {
			square.addEventListener('mousemove', e => {
				const rect = square.getBoundingClientRect()
				const x = e.clientX - rect.left
				const y = e.clientY - rect.top
				square.style.setProperty('--mouse-x', `${x}px`)
				square.style.setProperty('--mouse-y', `${y}px`)
				square.classList.add('hovered')
			})

			square.addEventListener('mouseleave', () => {
				square.classList.remove('hovered')
			})
		})
	}, [])

	return (
		<div className='changWrapper'>
			<div className='chang'>
				<div className='changSquares'>
					<div className='glassCircelLeft'>
						<Image src={glassCircle} alt='glassCircle' />
					</div>

					<div className='glassCircelRight'>
						<Image src={glassCircle} alt='glassCircle' />
					</div>
					<div className='column'>
						{Array.from({ length: 3 }).map((_, i) => (
							<div className='bgSquareChang' key={`col1-${i}`} />
						))}
					</div>
					<div className='columnSec column'>
						{Array.from({ length: 4 }).map((_, i) => (
							<div className='bgSquareChang' key={`col2-${i}`} />
						))}
					</div>
				</div>

				<div className='changTexts'>
					<div className='changSubtitles'>
						<div className='changNum'>II</div>
						<div className='changSubtitle'>We’re changing that</div>
					</div>

					<div className='changTitle'>
						Not a fund. Not a launchpad. Just direct, premium access.
					</div>
				</div>

				<div className='changCards'>
					{changCards.map((card, index) => (
						<div className='changCard' key={index}>
							<div className='changCardImg'>
								{card.image === Bag ? <Bag /> : <Folder />}
							</div>
							<div className='changCardTexts'>
								<div className='changCardSubtitles'>
									<div className='changCardSubtitle'>{card.subtitle1}</div>
									<div className='changCardSubtitle'>{card.subtitle2}</div>
								</div>

								<div className='changCardText'>{card.text}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
