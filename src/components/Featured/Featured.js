'use client'

import './Featured.css'
import { useRef, useEffect, useState } from 'react'

import Logo1 from '../../assets/img/featuredLogo1.png'
import Logo2 from '../../assets/img/featuredLogo2.png'
import Logo3 from '../../assets/img/featuredLogo3.png'
import Logo4 from '../../assets/img/featuredLogo4.png'
import Logo5 from '../../assets/img/featuredLogo5.png'
import Logo6 from '../../assets/img/featuredLogo6.png'
import Image from 'next/image'

const featuredCards = [
	{
		logo: Logo1,
		title: 'Payments & onboarding',
	},
	{
		logo: Logo2,
		title: 'Security auditing',
	},
	{
		logo: Logo3,
		title: 'Institutional co-investment',
	},
	{
		logo: Logo4,
		title: 'Custody and asset management',
	},
	{
		logo: Logo5,
		title: 'Financial KYC/AML verification',
	},
	{
		logo: Logo6,
		title: 'Decentralized data oracle layer',
	},
]

export default function Featured() {
	const cardsRef = useRef(null)
	const [activeIndex, setActiveIndex] = useState(0)
	const scrollTimeout = useRef(null)

	const scrollToActiveCard = index => {
		const container = cardsRef.current
		const card = container?.children[index]
		if (container && card) {
			const containerWidth = container.offsetWidth
			const cardOffsetLeft = card.offsetLeft
			const cardWidth = card.offsetWidth
			const scrollLeft = cardOffsetLeft - (containerWidth / 2 - cardWidth / 2)
			container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
		}
	}

	useEffect(() => {
		const container = cardsRef.current
		if (!container) return

		const onScroll = () => {
			if (scrollTimeout.current) clearTimeout(scrollTimeout.current)

			scrollTimeout.current = setTimeout(() => {
				const containerCenter = container.scrollLeft + container.offsetWidth / 2

				let closestIndex = 0
				let closestDistance = Infinity

				Array.from(container.children).forEach((card, index) => {
					const cardCenter = card.offsetLeft + card.offsetWidth / 2
					const distance = Math.abs(containerCenter - cardCenter)

					if (distance < closestDistance) {
						closestDistance = distance
						closestIndex = index
					}
				})

				setActiveIndex(closestIndex)
				scrollToActiveCard(closestIndex)
			}, 150)
		}

		container.addEventListener('scroll', onScroll)

		scrollToActiveCard(activeIndex)

		return () => {
			container.removeEventListener('scroll', onScroll)
			if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
		}
	}, [])

	return (
		<div className='featured'>
			<div className='featuredTexts'>
				<div className='featuredTitles'>
					<div className='featuredNum'>X</div>
					<div className='featuredBefore'>Featured Partners</div>
				</div>
				<div className='featuredTitle'>
					Backed by the Best in Fintech and Venture
				</div>
			</div>

			<div className='featuredCardsWrapper'>
				<div className='featuredCards' ref={cardsRef}>
					{featuredCards.map((card, index) => (
						<div className='featuredCard' key={index}>
							<div className='featuredCardLogo'>
								<Image src={card.logo} alt='logo' />
							</div>
							<div className='featuredCardTitle'>{card.title}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
