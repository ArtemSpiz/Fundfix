import ButtonPink from 'ui/ButtonPink/ButtonPink'
import './Presale.css'
import Image from 'next/image'
import Logo from '../../assets/img/presaleLogo.png'
import Statistics from '../../assets/svg/statistics.svg'
import Alert from '../../assets/svg/alert.svg'
import image1 from '../../assets/img/Image1.png'
import image2 from '../../assets/img/Image5.png'

const presaleTableContent = [
	{
		title: 'Valuation',
		text: '$50M+',
	},
	{
		title: 'Current Price',
		text: '$0.12',
	},
	{
		title: 'Phase 2 Bonus',
		text: '25%',
	},
]

const presaleCard = [
	{
		num: 'I',
		before: '40% Bonus',
		text: '$0.08',
		subtitle: 'Complete',
		image: image1,
		raised: 'Raised',
		money: '$1.2M',
	},
	{
		num: 'II',
		before: '25% Bonus',
		text: '$0.12',
		subtitle: 'Live Now',
		image: image2,
		raised: 'Raised',
		money: '$1.2M',
	},
	{
		num: 'III',
		before: '10% Bonus',
		text: '$0.16',
		alert: Alert,
		ComingSoon: 'Coming soon',
	},
]

export default function Presale() {
	return (
		<div className='presale'>
			<div className='presaleTexts'>
				<div className='presaleTextsTop'>
					<div className='presaleTitles'>
						<div className='presaleNum'>VI||</div>
						<div className='presaleBefore'>LIVE presale</div>
					</div>
					<div className='presaleTitle'>Presale phase 2</div>
				</div>

				<div className='presaleSubtitle'>
					Our team has operated inside the companies that defined modern
					tech—scaling platforms, building infrastructure, and investing
					alongside the world’s top VCs
				</div>

				<ButtonPink
					text='Join Presale Now '
					extraClass='presaleBtn'
					icon={<div className='presaleBtnBonus'>Get 25% Bonus</div>}
				/>
			</div>

			<div className='presaleCards'>
				<div className='presaleTable'>
					<div className='presaleTableTop'>
						<div className='presaleTableLogoTitle'>
							Audited by
							<div className='presaleTableLogo'>
								<Image src={Logo} alt='logo' />
							</div>
						</div>

						<div className='presaleTableSubtitles'>
							<div className='presaleTableSubtitle'>#KYC Verified</div>
							<div className='presaleTableSubtitle'>#Funds in Multi-Sig</div>
						</div>
					</div>
					<div className='presaleBottom'>
						{presaleTableContent.map((table, index) => (
							<div className='presaleTableCard' key={index}>
								<div className='presaleTableLeft'>
									<Statistics />
									<div className='presaleTableTitle'>{table.title}</div>
								</div>
								<div className='presaleTableText'>{table.text}</div>
							</div>
						))}
					</div>
				</div>

				<div className='presaleCards'>
					{presaleCard.map((card, index) => (
						<div className='presaleCard' key={index}>
							<div className='presaleCardTop'>
								<div className='presaleCardTitle'>
									Phase <div className='presaleCardNum'>{card.num}</div>
								</div>

								<div className='presaleCardBefore'>{card.before}</div>
							</div>

							<div className='presaleCardCenter'>
								<div className='presaleCardText'>{card.text}</div>
								{card.subtitle && (
									<div className='presaleCardSubtitle'>{card.subtitle}</div>
								)}
							</div>

							<>
								{card.raised && card.money ? (
									<div className='presaleCardBottom'>
										<Image src={card.image} alt='cardImage' />
										<div className='presaleCardTextBot'>
											<div className='presaleCardRaised'>{card.raised}</div>
											<div className='presaleCardMoney'>{card.money}</div>
										</div>
									</div>
								) : (
									<div className='presaleCardAlert'>
										{card.alert && <card.alert />}
										{card.ComingSoon && (
											<div className='presaleCardComingSoon'>
												{card.ComingSoon}
											</div>
										)}
									</div>
								)}
							</>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
