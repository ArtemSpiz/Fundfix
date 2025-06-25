import './FIX.css'
import Image from 'next/image'

import glassCircle from '../../assets/img/GlassCircle.png'

import Lock from '../../assets/svg/whiteLock.svg'
import Star from '../../assets/svg/whiteStar.svg'
import Puzzle from '../../assets/svg/whitePuzzle.svg'
import PinkStar from '../../assets/svg/pinkStar.svg'

import coin1 from '../../assets/img/coin1.png'
import coin2 from '../../assets/img/coin2.png'
import coin3 from '../../assets/img/coin3.png'
import coin4 from '../../assets/img/coin4.png'

import image1 from '../../assets/img/Image1.png'
import image2 from '../../assets/img/Image2.png'
import image3 from '../../assets/img/Image3.png'
import image4 from '../../assets/img/Image4.png'

const fixSubtitles = [
	{
		icon: Lock,
		title: 'Access Gating',
	},
	{
		icon: Star,
		title: 'Yield Rewards',
	},
	{
		icon: Puzzle,
		title: 'Governance Rights',
	},
]

const fixCards = [
	{
		icon: coin1,
		title: 'Basic Access',
		subtitle: '1,000 $FIX',
		image: image1,
	},
	{
		icon: coin2,
		title: 'Priority Allocations',
		subtitle: '10,000 $FIX',
		image: image2,
	},
	{
		icon: coin3,
		title: 'VIP Access + Founder AMAs',
		subtitle: '50,000 $FIX',
		image: image3,
	},
	{
		icon: coin4,
		title: 'Unlimited Allocation + LP Rights',
		subtitle: '100,000 $FIX',
		image: image4,
	},
]

export default function FIX() {
	return (
		<div className='fix'>
			<div className='fixSquares'>
				<div className='cubeLeft'>
					<div className='fixCircelLeft'>
						<Image src={glassCircle} alt='glassCircle' />
					</div>

					<div className='columnFix'>
						{Array.from({ length: 3 }).map((_, i) => (
							<div className='bgSquareFix' key={`col1-${i}`} />
						))}
					</div>
				</div>

				<div className='cubeRight'>
					<div className='fixCircelRight'>
						<Image src={glassCircle} alt='glassCircle' />
					</div>
					<div className='columnSecFix'>
						{Array.from({ length: 6 }).map((_, i) => (
							<div className='bgSquareFix аааа' key={`step-${i}`} />
						))}
					</div>
				</div>
			</div>
			<div className='fixTexts'>
				<div className='fixTextsTop'>
					<div className='fixTitles'>
						<div className='fixNum'>VII</div>
						<div className='fixBefore'>$FIX Token Utility</div>
					</div>
					<div className='fixTitle fixTitleComp'>
						<div className='fixTitleTop'>
							<span className='fixTitle'>$FIX:</span>
							<span className='fixTitle2'>More Than a Token.</span>
						</div>
						It’s a Pass Into the Future
					</div>

					<div className='fixTitle fixTitleMobil'>
						<div className='fixTitleTop'>
							<span className='fixTitle'>$FIX:</span>
							<span className='fixTitle2'>More Than a</span>
						</div>
						<div className='fixTitleTop'>
							<span className='fixTitle2'>Token.</span>
							<span className='fixTitle'>It’s a Pass Into</span>
						</div>
						the Future
					</div>
				</div>

				<div className='fixSubtitles'>
					{fixSubtitles.map((fix, index) => (
						<div
							key={index}
							className={`fixSubtitle ${index === 2 ? 'thirdFixSubtitle' : ''}`}
						>
							<fix.icon className='fixSubtitleIcon' />
							<div>{fix.title}</div>
						</div>
					))}
				</div>
			</div>

			<div className='fixRight'>
				<div className='fixRightTitle'>
					<PinkStar />
					Membership Tiers
				</div>
				<div className='line'></div>
				<div className='fixRightCards'>
					{fixCards.map((card, index) => (
						<div className='fixCard' key={index}>
							<div className='fixCardTop'>
								<Image src={card.icon} alt='coin' className='fixCardIcon' />
								<div className='fixCardTexts'>
									<div className='fixCardTitle'>{card.title}</div>
									<div className='fixCardSubtitle'>{card.subtitle}</div>
								</div>
							</div>

							<Image src={card.image} alt='ff' className='fixCardImg' />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
