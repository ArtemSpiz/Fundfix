'use client'
import './Header.css'
import Wallet from '../../assets/svg/wallet.svg'
import { useEffect, useState } from 'react'
import Image from 'next/image'

import openMenu from '../../assets/img/openMenu.png'
import closeMenu from '../../assets/img/closeMenu.png'

const links = [
	{ title: 'Product' },
	{ title: 'FAQ' },
	{ title: 'About us' },
	{ title: 'Support' },
]

const linksMenu = [
	{ num: '01', title: 'Product' },
	{ num: '02', title: 'FAQ' },
	{ num: '03', title: 'About us' },
	{ num: '04', title: 'Support' },
]

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false)

	const toggleBurger = () => setMenuOpen(prev => !prev)

	useEffect(() => {
		if (menuOpen) {
			document.body.classList.add('no-scroll')
		} else {
			document.body.classList.remove('no-scroll')
		}
	}, [menuOpen])

	return (
		<div className={`headerWrapper ${menuOpen ? 'openHeaderWrapper' : ''}`}>
			<div className={`header ${menuOpen ? 'openHeader' : ''}`}>
				<div className='headerTop'>
					<div className='headerLogo'>Fundfix</div>

					<div className='headerRight'>
						<div className='headerLinks'>
							{links.map((link, index) => (
								<a href='#' key={index} className='headerLink'>
									{link.title}
								</a>
							))}
						</div>

						<button className='headerBtn'>
							<Wallet />
							Check your wallet
						</button>

						<div className='burgerBtn' onClick={toggleBurger}>
							<Image src={menuOpen ? closeMenu : openMenu} alt='menuToggle' />
						</div>
					</div>
				</div>

				<div className={`burgerMenu ${menuOpen ? 'burgerMenuOpen' : ''}`}>
					{linksMenu.map((menu, index) => (
						<div key={index} className='burgerMenuCont'>
							<div className='burgerMenuLinkNum'>{menu.num}</div>
							<a href='#' className='sideMenuLink'>
								{menu.title}
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
