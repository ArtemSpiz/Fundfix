import './Chang.css'
import Folder from '../../assets/svg/whiteFolder.svg'
import Bag from '../../assets/svg/whiteBag.svg'

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
	return (
		<div className='chang'>
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
	)
}
