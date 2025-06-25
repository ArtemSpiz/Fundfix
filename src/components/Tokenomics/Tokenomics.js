'use client'
import { useEffect, useRef, useState } from 'react'

import './Tokenomics.css'
import Line from '../../assets/svg/linePurple.svg'
import Calendar from '../../assets/svg/calendarPurple.svg'
import Brackets from '../../assets/svg/brackets.svg'

import Circle from '../../assets/svg/circle.svg'
import Target from '../../assets/svg/target.svg'
import Link from '../../assets/svg/link.svg'
import User from '../../assets/svg/user.svg'
import Setting from '../../assets/svg/setting.svg'
import { observeElementInView } from '../../utils/isInView'

const tokenomicsCards = [
	{
		icon: Line,
		subtitle: '#Pre-IPP',
		title: 'Investors:',
		text: '20% TGE',
	},
	{
		icon: Calendar,
		title: '6-month cliff',
		text: '24-month linear vest',
	},
	{
		icon: Brackets,
		title: 'Dev Fund',
		text: '3-month cliff, 18-month vesting',
	},
]

const tokenomicsLines = [
	{
		icon: Circle,
		title: 'Total Supply',
		text: '100M $FIX',
	},
	{
		icon: Target,
		title: 'Presale',
		text: '35%',
	},
	{
		icon: Link,
		title: 'Liquidity',
		text: '20%',
	},
	{
		icon: User,
		title: 'Team & Advisors:',
		text: '20%',
		subtitle: '24-month linear vesting',
	},
	{
		icon: Line,
		title: 'Marketing:',
		text: '15%',
	},
	{
		icon: Setting,
		title: 'Platform Development',
		text: '15%',
	},
]

export default function Tokenomics() {
	const linesRef = useRef([])
	const containerRef = useRef(null)
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		if (containerRef.current) {
			const stopObserving = observeElementInView(containerRef.current, () => {
				setIsVisible(true)
			})

			return stopObserving
		}
	}, [])

	useEffect(() => {
		if (isVisible) {
			linesRef.current.forEach((el, i) => {
				if (el) {
					setTimeout(() => {
						el.classList.add('tokenomicsLineVisible')
					}, i * 300)
				}
			})
		}
	}, [isVisible])

	return (
		<div className='tokenomics'>
			<div className='tokenomicsTexts'>
				<div className='tokenomicsTextsTop'>
					<div className='tokenomicsNum'>IX</div>
					<div className='tokenomicsSubtitle'>Tokenomics Overview</div>
				</div>

				<div className='tokenomicsTitle'>Token Supply & Distribution</div>
			</div>

			<div className='tokenomicsCards'>
				{tokenomicsCards.map((card, index) => (
					<div
						className={`tokenomicsCard ${
							index === 0
								? 'paddingFirst'
								: index === 1
								? 'paddingSecond'
								: index === 2
								? 'paddingThird'
								: ''
						}`}
						key={index}
					>
						<div className='tokenomicsCardTop'>
							<card.icon className='tokenomicsCardIcon' />

							{card.subtitle && (
								<div className='tokenomicsCardSubtitle'>{card.subtitle}</div>
							)}
						</div>

						<div className='tokenomicsCardBot'>
							<div className='tokenomicsCardTitle'>{card.title}</div>
							<div className='tokenomicsCardText'>{card.text}</div>
						</div>
					</div>
				))}
			</div>

			<div className='tokenomicsLines' ref={containerRef}>
				{tokenomicsLines.map((line, index) => (
					<div
						className={`tokenomicsLine ${
							index === 0 ? 'firstTokenomicsLine' : ''
						}`}
						key={index}
						ref={el => (linesRef.current[index] = el)}
					>
						<div className='tokenomicsLineTopMob'>
							<div className='tokenomicsLineLeft'>
								<line.icon
									className={`tokenomicsLineIcon ${
										index === 0 ? 'firstTokenomicsLineIcon' : ''
									}`}
								/>
								<div
									className={`tokenomicsLineTitle ${
										index === 0 ? 'firstTokenomicsLineTitle' : ''
									}`}
								>
									{line.title}
								</div>
							</div>

							<div className='tokenomicsLineRight'>
								<div className='tokenomicsLineTexts'>
									<div
										className={`tokenomicsLineText ${
											index === 0 ? 'firstTokenomicsLineText' : ''
										}`}
									>
										{line.text}
									</div>

									{line.subtitle && (
										<div className='tokenomicsLineSubtitle'>
											{line.subtitle}
										</div>
									)}
								</div>

								<div
									className={`lineTokenomics ${
										index === 0 ? 'firstLineTokenomics' : ''
									}`}
								/>
							</div>
						</div>
						{line.subtitle && (
							<div className='tokenomicsLineSubtitle tokenomicsLineMobil'>
								{line.subtitle}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	)
}
