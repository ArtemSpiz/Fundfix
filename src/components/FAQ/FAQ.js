'use client'

import './FAQ.css'
import Triangle from '../../assets/svg/triangle.svg'
import { useState } from 'react'

const faqCards = [
	{
		num: 'I',
		title: 'Who can invest in FundFix?',
		text: 'Yes. Smart contracts audited by CertiK, funds secured via multi-sig, full KYC/AML compliance.',
	},
	{
		num: 'II',
		title: 'Is this another crypto launchpad?',
		text: 'Yes. Smart contracts audited by CertiK, funds secured via multi-sig, full KYC/AML compliance.',
	},
	{
		num: 'III',
		title: 'Do I need to be accredited?',
		text: 'Yes. Smart contracts audited by CertiK, funds secured via multi-sig, full KYC/AML compliance.',
	},
	{
		num: 'IV',
		title: 'Are the deals legit?',
		text: 'Yes. Smart contracts audited by CertiK, funds secured via multi-sig, full KYC/AML compliance.',
	},
	{
		num: 'V',
		title: 'Can I sell or exit early?',
		text: 'Yes. Smart contracts audited by CertiK, funds secured via multi-sig, full KYC/AML compliance.',
	},
	{
		num: 'VI',
		title: 'Is this secure?',
		text: 'Yes. Smart contracts audited by CertiK, funds secured via multi-sig, full KYC/AML compliance.',
	},
]

export default function FAQ() {
	const [openIndexes, setOpenIndexes] = useState([])

	const toggleCard = index => {
		setOpenIndexes(prev =>
			prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
		)
	}

	return (
		<div className='faq'>
			<div className='faqTexts'>
				<div className='faqSubtitles'>
					<div className='faqNum'>XII</div>
					<div className='faqSubtitle'>FAQ</div>
				</div>

				<div className='faqTitle'>Frequently Asked Questions </div>
			</div>

			<div className='faqCards'>
				{faqCards.map((card, index) => {
					const isOpen = openIndexes.includes(index)
					return (
						<div
							className={`faqCard ${isOpen ? 'faqCardOpen' : ''}`}
							key={index}
							onClick={() => toggleCard(index)}
						>
							<div className='faqCardTop'>
								<div className='faqCardTitles'>
									<div className='faqCardNum'>{card.num}</div>
									<div
										className={`faqCardTitle ${
											isOpen ? 'faqCardTitleOpen' : ''
										}`}
									>
										{card.title}
									</div>
								</div>
								<Triangle
									className={`faqCardTriangle ${isOpen ? 'rotated' : ''}`}
								/>
							</div>
							{isOpen && <div className='faqCardText'>{card.text}</div>}
						</div>
					)
				})}
			</div>
		</div>
	)
}
