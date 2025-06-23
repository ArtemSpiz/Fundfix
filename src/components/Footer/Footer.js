import Image from 'next/image'
import './Footer.css'

import footerLogo from '../../assets/img/FooterLogo.png'

const footerAboutSubtitles = [
	{
		subtitle: 'Platform',
	},
	{
		subtitle: 'Token',
	},
	{
		subtitle: 'Team',
	},
	{
		subtitle: 'FAQ',
	},
	{
		subtitle: 'Contact',
	},
]

const footerSocialsSubtitles = [
	{
		subtitle: 'Twitter',
	},
	{
		subtitle: 'LinkedIn',
	},
	{
		subtitle: 'Discord',
	},
]

export default function Footer() {
	return (
		<div className='footer'>
			<div className='footerTop'>
				<div className='footerLogo'>
					<Image src={footerLogo} alt='Fundfix' />
				</div>

				<div className='footerNav'>
					<div className='footerLinks'>
						<div className='footerLinksTitle'>About</div>

						{footerAboutSubtitles.map((about, index) => (
							<div key={index} className='footerLinksSubtitle'>
								{about.subtitle}
							</div>
						))}
					</div>

					<div className='footerLinks'>
						<div className='footerLinksTitle'>Socials</div>

						{footerSocialsSubtitles.map((social, index) => (
							<div key={index} className='footerLinksSubtitle'>
								{social.subtitle}
							</div>
						))}
					</div>
				</div>
			</div>

			<div className='footerReserved'>© 2024 FundFix. All Rights Reserved</div>
		</div>
	)
}
