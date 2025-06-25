'use client'

import './WHY.css'

import imgCardAccess1 from '../../assets/img/imgCardAccess1.png'
import imgCardAccess2 from '../../assets/img/imgCardAccess2.png'
import imgCardAccess3 from '../../assets/img/imgCardAccess3.png'
import imgCardAccess4 from '../../assets/img/imgCardAccess4.png'

import Bag from '../../assets/svg/whiteBag.svg'
import Portfolio from '../../assets/svg/whitePortfolio.svg'
import People from '../../assets/svg/whitePeople.svg'
import Rocket from '../../assets/svg/whiteRocket.svg'
import Statistics from '../../assets/svg/whiteStatistics.svg'
import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'

const cardsAccess = [
	{
		images: [imgCardAccess1, imgCardAccess2, imgCardAccess3],
		title: 'Origins',
		text: 'From the same ecosystem that launched Uber, Coinbase, and Airbnb',
	},
	{
		subtitles: ['#Pre-IPP', '#RWA', '#Assets'],
		title: 'Flexible Investing',
		text: 'Pre-IPO giants, tokenized assets, top crypto — every deal handpicked by VCs',
	},
	{
		image: imgCardAccess4,
		title: 'Partnership',
		text: '$500M+ AUM backing ensures quality and compliance',
	},
]

const cardsRecord = [
	{
		image: Bag,
		title: 'Regulated Assets Under Management',
		text: '$500M+ ',
	},
	{
		image: Portfolio,
		title: 'Combined Founder Exits',
		text: '$2.3B+ ',
	},
	{
		image: People,
		title: 'Accredited Investors On-Platform',
		text: '1,200+',
	},
	{
		image: Rocket,
		title: 'Average Portfolio Returns',
		subtitle: '(Last 18 Months)',
		text: '340%',
	},
	{
		image: Statistics,
		title: 'Pre-IPO and Series A–C Startups',
		text: '50+',
	},
]

export default function WHY() {
	const scrollRef = useRef(null)
	const [activeIndex, setActiveIndex] = useState(0)
	const isMobile = typeof window !== 'undefined' && window.innerWidth < 640
	const scrollTimeout = useRef(null)

	useEffect(() => {
		if (!isMobile) return
		const container = scrollRef.current
		if (!container) return

		const cards = container.querySelectorAll('.whyRecordCard')
		const activeCard = cards[activeIndex]
		if (!activeCard) return

		const scrollTo =
			activeCard.offsetLeft +
			activeCard.offsetWidth / 2 -
			container.offsetWidth / 2

		container.scrollTo({
			left: scrollTo,
			behavior: 'smooth',
		})
	}, [activeIndex, isMobile])

	useEffect(() => {
		if (!isMobile) return
		const container = scrollRef.current
		if (!container) return

		const handleScroll = () => {
			if (scrollTimeout.current) clearTimeout(scrollTimeout.current)

			scrollTimeout.current = setTimeout(() => {
				const cards = Array.from(container.querySelectorAll('.whyRecordCard'))
				const center = container.scrollLeft + container.offsetWidth / 2

				let closest = 0
				let minDist = Infinity

				cards.forEach((card, i) => {
					const cardCenter = card.offsetLeft + card.offsetWidth / 2
					const dist = Math.abs(cardCenter - center)
					if (dist < minDist) {
						minDist = dist
						closest = i
					}
				})

				setActiveIndex(closest)
			}, 300)
		}

		container.addEventListener('scroll', handleScroll, { passive: true })
		return () => {
			container.removeEventListener('scroll', handleScroll)
			clearTimeout(scrollTimeout.current)
		}
	}, [isMobile])

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex(prev => (prev + 1) % cardsRecord.length)
		}, 10000)

		return () => clearInterval(interval)
	}, [isMobile])

	useEffect(() => {
		const squares = document.querySelectorAll('.bgSquare')

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
		<div className='why'>
			<div className='whyAccess'>
				<div className='whyAccessBackground'>
					{Array.from({ length: 16 }).map((_, i) => (
						<div key={i} className='bgSquare' />
					))}
				</div>
				<div className='whyAccessTexts'>
					<div className='whyAccessTextsTop'>
						<div className='whyAccessTitles'>
							<div className='whyAccessNum'>III</div>
							<div className='whyAccessBefore'>WHY</div>
						</div>
						<div className='whyAccessTitle'>
							More Than a Launchpad. This Is Insider Access
						</div>
					</div>

					<div className='whyAccessSubtitle'>
						Built by founders, backed by funds, offering access to handpicked
						deals normally reserved for insiders.
					</div>
				</div>

				<div className='whyAccessCards'>
					{cardsAccess.map((card, index) => (
						<div key={index} className='whyAccessCard'>
							{card.images && (
								<div className='whyCardImages'>
									{card.images.map((img, i) => (
										<Image
											className='whyCardUber'
											key={i}
											src={img}
											alt={`Card ${index + 1} image ${i + 1}`}
										/>
									))}
								</div>
							)}

							{card.image && (
								<div className='whyCardImage'>
									<Image src={card.image} alt={`Card ${index + 1} image`} />
								</div>
							)}

							{card.subtitles && (
								<div className='whyCardSubtitles'>
									{card.subtitles.map((subtitle, i) => (
										<div key={i} className='whyCardSubtitle'>
											{subtitle}
										</div>
									))}
								</div>
							)}

							<div className='whyCardBottom'>
								<div className='whyCardTitle'>{card.title}</div>
								<div className='whyCardText'>{card.text}</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className='whyRecord'>
				<div className='whyRecordTitle'>Our Track Record Speaks for Itself</div>

				<div className='whyRecordCardsMob'>
					<div className='whyRecordCardsWrapper' ref={scrollRef}>
						<div className='whyRecordCards'>
							{cardsRecord.map((card, index) => (
								<div
									key={index}
									className={`whyRecordCard ${
										index === activeIndex ? 'activePulse' : ''
									}`}
								>
									<div className='whyRecordCardTop'>
										<div className='whyRecordCardImg'>
											<card.image />
										</div>
										<div className='whyRecordCardTitles'>
											<div className='whyRecordCardTitle'>{card.title}</div>

											{card.subtitle && (
												<div className='whyRecordCardSubtitle'>
													{card.subtitle}
												</div>
											)}
										</div>
									</div>

									<div className='whyRecordCardText'>
										<span className='blur-bg' />
										{card.text}
									</div>
								</div>
							))}
						</div>
					</div>
					<div className='whyIndicators'>
						{cardsRecord.map((_, i) => (
							<div
								key={i}
								className={`whyIndicator ${i === activeIndex ? 'active' : ''}`}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
