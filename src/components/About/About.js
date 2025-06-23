import './About.css'
import tegImg1 from '../../assets/img/tegImg1.png'
import tegImg2 from '../../assets/img/tegImg2.png'
import tegImg3 from '../../assets/img/tegImg3.png'
import tegImg4 from '../../assets/img/tegImg4.png'
import tegImg5 from '../../assets/img/tegImg5.png'
import Lock from '../../assets/svg/lock.svg'
import Shield from '../../assets/svg/shield.svg'
import Accept from '../../assets/img/accept.png'
import Block from '../../assets/img/block.png'
import ButtonPink from '../../ui/ButtonPink/ButtonPink'
import Image from 'next/image'

const tags = [
	{
		image: tegImg1,
		title: 'Backed by hedge funds and regulated capital',
	},
	{
		image: tegImg2,
		title: 'Curated by real insiders, not crowds',
	},
	{
		image: tegImg3,
		title: 'Pre-IPO, RWA, and top crypto deals',
	},
	{
		image: tegImg4,
		title: 'We vet thoroughly so you can decide confidently',
	},
	{
		image: tegImg5,
		title: 'One-click investing — no paperwork, no gatekeepers',
	},
]

const cardRules = [
	{
		image: Block,
		title: 'No need to source the deal',
	},
	{
		image: Block,
		title: 'No need to know the founders',
	},
	{
		image: Block,
		title: 'No need to read long decks',
	},
	{
		image: Accept,
		title: 'You just connect your wallet',
	},
]

export default function About() {
	return (
		<div className='about'>
			<div className='aboutLeft'>
				<div className='aboutTexts'>
					<div className='aboutSubtitles'>
						<div className='aboutNum'>I</div>
						<div className='aboutSubtitle'>About</div>
					</div>
					<div className='aboutTitle'>
						Not a fund. Not a launchpad. Just direct, premium access.
					</div>
				</div>

				<div className='aboutTag'>
					<div className='aboutTagImages'>
						{tags.map((tag, index) => (
							<div key={index} className='aboutTagImg'>
								<Image src={tag.image} alt='tag icon' />
								{index !== tags.length - 1 && <hr className='aboutTagHr' />}
							</div>
						))}
					</div>

					<div className='aboutTegTitles'>
						{tags.map((tag, index) => (
							<div key={index} className='aboutTagTitle'>
								{tag.title}
							</div>
						))}
					</div>
				</div>

				<div className='aboutTagMobil'>
					{tags.map((tag, index) => (
						<div key={index} className='aboutTagMobilCont'>
							<div className='aboutTagMobilImg'>
								<Image src={tag.image} alt='tag icon' />
							</div>
							<div className='aboutTagTitle'>{tag.title}</div>
						</div>
					))}
				</div>
			</div>

			<div className='aboutCard'>
				<div className='aboutCardTexts'>
					<div className='aboutCardTitle'>Access the Unseen</div>
					<div className='aboutCardText'>
						We’ve teamed up with hedge funds, venture firms, and private deal
						networks <Lock className='lock' /> to unlock early-stage
						opportunities <Shield className='shield' />
						typically closed to the public. Rather than chasing hype, we offer a
						curated pipeline of high-quality deals—vetted by insiders, backed by
						institutions, and ready for you to seize.
					</div>
				</div>

				<div className='aboutCardRules'>
					{cardRules.map((rule, index) => (
						<div key={index} className='aboutCardRule'>
							<Image src={rule.image} alt='ruleImage' className='ruleImage' />
							<div className='ruleTitle'>{rule.title}</div>
						</div>
					))}
				</div>

				<ButtonPink extraClass='aboutCardBtn'>Explore Opportunities</ButtonPink>
			</div>
		</div>
	)
}
