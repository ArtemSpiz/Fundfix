'use client'
import { useEffect, useRef, useState } from 'react'
import './HowItWorks.css'

const howCards = [
	{
		number: 'I',
		before: '#Locked Deals',
		title: 'Buy $FIX',
		text: 'Your key to unlocking premium startup and asset dealflow',
	},
	{
		number: 'II',
		before: '#Insider Deals',
		title: 'Unlock',
		text: 'Pre-IPO startups, tokenized real-world assets, select crypto ventures, all insider-vetted.',
	},
	{
		number: 'III',
		before: '#No Hype',
		title: 'Invest Early',
		text: 'Get in before the press, the hype, or the next round',
	},
	{
		number: 'IV',
		before: '#Rewards',
		title: 'Track, Earn, Vote',
		text: 'Monitor portfolio performance, earn rewards from exits, and vote on what comes next',
	},
]

export default function HowItWorks() {
	const canvasRef = useRef(null)
	const containerRef = useRef(null)
	const [hoverIndex, setHoverIndex] = useState(null)
	const [lineOpacities, setLineOpacities] = useState(howCards.map(() => 0.05))

	const lineAlphas = useRef(howCards.map(() => 0.05))

	const animateLineAlpha = (index, toAlpha) => {
		const fromAlpha = lineAlphas.current[index]
		const duration = 300
		const startTime = performance.now()

		const animate = now => {
			const elapsed = now - startTime
			const progress = Math.min(elapsed / duration, 1)
			const eased = 0.5 - 0.5 * Math.cos(Math.PI * progress)

			lineAlphas.current[index] = fromAlpha + (toAlpha - fromAlpha) * eased
			drawLines()

			if (progress < 1) {
				requestAnimationFrame(animate)
			} else {
				lineAlphas.current[index] = toAlpha
				drawLines()
			}
		}

		requestAnimationFrame(animate)
	}

	const drawLines = () => {
		const canvas = canvasRef.current
		const ctx = canvas.getContext('2d')
		const container = containerRef.current

		if (!canvas || !ctx || !container) return

		canvas.width = container.offsetWidth
		canvas.height = container.offsetHeight

		const containerRect = container.getBoundingClientRect()
		const title = container.querySelector('.howCardsTitle')
		const titleRect = title.getBoundingClientRect()
		const cards = container.querySelectorAll('.howCardWrapper')

		ctx.clearRect(0, 0, canvas.width, canvas.height)

		cards.forEach((card, index) => {
			const cardRect = card.getBoundingClientRect()

			const startX = cardRect.left + cardRect.width / 2 - containerRect.left
			const startY = cardRect.top - containerRect.top + 2

			const endX = titleRect.left + titleRect.width / 2 - containerRect.left
			const endY = titleRect.top - containerRect.top + titleRect.height / 2 + 40

			ctx.beginPath()
			ctx.moveTo(startX, startY)
			ctx.lineTo(endX, endY)
			ctx.strokeStyle = `rgba(255,255,255,${lineAlphas.current[index]})`
			ctx.lineWidth = 2
			ctx.stroke()
		})
	}

	useEffect(() => {
		drawLines()
	}, [])

	return (
		<div className='howItWork'>
			<div className='howItWorkTexts'>
				<div className='howItWorkSubtitles'>
					<div className='howItWorkNum'>IV</div>
					<div className='howItWorkSubtitle'>How It Works</div>
				</div>

				<div className='howItWorkTitle'>
					<div className='howItWorkTitleTop'>
						How FundFix <span className='howItWorkTitle2'>Gets</span>
					</div>
					<div className='howItWorkTitle2'> You In Early</div>
				</div>
			</div>

			<div className='howItWorkBottom' ref={containerRef}>
				<div className='howCardsTitle'>Fundfix</div>
				<canvas ref={canvasRef} className='howCardsCanvas' />
				<div className='howCardsLine' />
				<div className='howCards'>
					{howCards.map((card, index) => (
						<div
							className='howCardWrapper'
							key={index}
							onMouseEnter={() => {
								setHoverIndex(index)
								animateLineAlpha(index, 1)
							}}
							onMouseLeave={() => {
								setHoverIndex(null)
								animateLineAlpha(index, 0.05)
							}}
						>
							<div
								className={`howCard ${hoverIndex === index ? 'hovered' : ''}`}
							>
								<div className='howCardTop'>
									<div className='howCardNum'>{card.number}</div>
									<div
										className={`howCardBefore ${
											hoverIndex === index ? 'hovered' : ''
										}`}
									>
										{card.before}
									</div>
								</div>

								<div className='howCardBottom'>
									<div
										className={`howCardTitle ${
											hoverIndex === index ? 'hovered' : ''
										}`}
									>
										{card.title}
									</div>
									<div
										className={`howCardText ${
											hoverIndex === index ? 'hovered' : ''
										}`}
									>
										{card.text}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
