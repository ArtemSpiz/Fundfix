import './Featured.css'

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

			<div className='featuredCards'>
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
	)
}
