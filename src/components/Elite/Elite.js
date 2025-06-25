import './Elite.css'
import eliteImage from '../../assets/img/eliteImage.png'
import Image from 'next/image'

const eliteCardsCont = [
	{
		image: eliteImage,
		name: 'Sarah Chen',
		subtitle: 'Former VP of Growth at a global ride-share platform',
		btnText: '$100B+ volume',
	},
	{
		image: eliteImage,
		name: 'Marcus Rodriguez',
		subtitle: 'Led infrastructure at a major crypto exchange',
		btnText: '$100B+ volume',
	},
	{
		image: eliteImage,
		name: 'David Kim',
		subtitle: 'Former a16z Partner with 40+ unicorn investments',
		btnText: '40+ investments',
	},
]

export default function Elite() {
	return (
		<div className='elite'>
			<div className='eliteTexts'>
				<div className='eliteTextsTop'>
					<div className='eliteTitles'>
						<div className='eliteNum'>VI</div>
						<div className='eliteBefore'>WHY</div>
					</div>
					<div className='eliteTitle Comp'>
						Founded in the Heart of
						<div className='eliteTitleBottom'>
							Silicon Valley’s
							<span className='eliteTitle2'>Elite Network</span>
						</div>
					</div>

					<div className='eliteTitle Mobil'>
						Founded in the Heart
						<div className='eliteTitleBottom'>
							of Silicon Valley’s
							<span className='eliteTitle2'>Elite Network</span>
						</div>
					</div>
				</div>

				<div className='eliteSubtitle'>
					Our team has operated inside the companies that defined modern
					tech—scaling platforms, building infrastructure, and investing
					alongside the world’s top VCs
				</div>
			</div>

			<div className='eliteCards'>
				{eliteCardsCont.map((card, index) => (
					<div
						className={`eliteCard ${index === 2 ? 'thirdCardCentered' : ''}`}
						key={index}
					>
						<div className='eliteCardImage'>
							<Image src={card.image} alt='cardImage' />
						</div>

						<div className='eliteCardInf'>
							<div className='eliteCardName'>{card.name}</div>
							<div className='eliteCardSubtitle'>{card.subtitle}</div>
						</div>

						<button className='eliteCardBtn'>{card.btnText}</button>
					</div>
				))}
			</div>
		</div>
	)
}
