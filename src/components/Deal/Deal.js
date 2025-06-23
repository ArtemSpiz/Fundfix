import './Deal.css'
import SiTesla from '../../assets/img/SiTesla.png'
import SiAmazon from '../../assets/img/SiAmazon.png'
import Statistics from '../../assets/svg/whiteStatistics.svg'
import ButtonPink from '../../ui/ButtonPink/ButtonPink'
import Image from 'next/image'

const data = [
	{ label: 'Valuation', value: '$500M+' },
	{ label: 'ARR', value: '$50M+' },
	{
		label: 'Customers',
		value: (
			<div className='dealCardSubtitles'>
				<div className='dealCardSubtitle'>
					<Image src={SiTesla} alt='Tesla' className='dealCardImg' />
					<div className='dealCardTesla'>Tesla</div>
				</div>
				<div className='dealCardSubtitle'>
					<Image src={SiAmazon} alt='Amazon' className='dealCardImg' />
					<div className='dealCardTesla'>Amazon</div>
				</div>
			</div>
		),
	},
	{
		label: 'Stage',
		value: <div className='dealCardBefore'>Series A</div>,
	},
	{ label: 'Minimum Investment', value: '$25.000' },
]

export default function Deal() {
	return (
		<div className='deal'>
			<div className='dealCard'>
				<div className='dealTexts'>
					<div className='dealTextsTop'>
						<div className='dealTitles'>
							<div className='dealNum'>V</div>
							<div className='dealBefore'>Live Deal</div>
						</div>
						<div className='dealTitle'>AI Robotics Platform </div>
					</div>

					<div className='dealSubtitle'>
						Only $2.3M in allocation remaining. Backed by a16z and GV.
					</div>
				</div>

				<div className='dealTable'>
					{data.map(({ label, value }, i) => (
						<div key={i} className='dealTableContent'>
							<div className='dealTableRight'>
								<Statistics />
								<div className='dealTableTitle'>{label}</div>
							</div>
							<div className='dealTableSubtitle'>{value}</div>
						</div>
					))}
				</div>

				<ButtonPink
					extraClass='dealTableBtn'
					text='Reserve Your Allocation Now'
				/>
			</div>
		</div>
	)
}
