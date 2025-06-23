import './Point.css'

import Bag from '../../assets/svg/whiteBag.svg'
import Rocket from '../../assets/svg/whiteRocket.svg'
import World from '../../assets/svg/whiteWorld.svg'
import Puzzle from '../../assets/svg/whitePuzzle.svg'

const pointSubtitles = [
	{
		icon: Bag,
		subtitle: 'Accredited Investors',
	},
	{
		icon: Rocket,
		subtitle: 'Startup Operators',
	},
	{
		icon: World,
		subtitle: 'Web3-Native Capital',
	},
	{
		icon: Puzzle,
		subtitle: 'LPs & Managers',
	},
]

export default function Point() {
	return (
		<div className='point'>
			<div className='pointTextsTop'>
				<div className='pointTitles'>
					<div className='pointNum'>XI</div>
					<div className='pointBefore'>Who It’s For</div>
				</div>
				<div className='pointTitle'>
					Not for Everyone.
					<span className='pointTitle2'>That’s the Point.</span>
				</div>
			</div>

			<div className='pointText'>
				FundFix is built for serious capital allocators—not hype-chasers.
			</div>

			<div className='pointSubtitles'>
				{pointSubtitles.map((point, index) => (
					<div className='pointSubtitle' key={index}>
						<point.icon className='pointSubtitleIcon' />
						{point.subtitle}
					</div>
				))}
			</div>
		</div>
	)
}
