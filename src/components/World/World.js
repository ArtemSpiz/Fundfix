import './World.css'

import ButtonPink from 'ui/ButtonPink/ButtonPink'
import imgTitleWorld1 from '../../assets/img/imgCardAccess1.png'
import imgTitleWorld2 from '../../assets/img/imgCardAccess2.png'
import imgTitleWorld3 from '../../assets/img/imgCardAccess3.png'
import Image from 'next/image'
import CubeWorld from '../../assets/img/beforeMobil.png'

export default function World() {
	return (
		<div className='world'>
			<div className='worldTexts'>
				<div className='worldTextsTop'>
					<div className='worldTitles'>
						<div className='worldNum'>XIII</div>
						<div className='worldBefore'>Before the world sees it</div>
					</div>
					<div className='worldTitleWrapper'>
						<div className='worldTitleTop'>
							<span className='worldTitle'>
								The Next Uber
								<Image
									src={imgTitleWorld1}
									alt='LogoUber'
									className='worldTitleIcon'
								/>
							</span>
							<span className='worldTitle'>
								The Next Coinbase
								<Image
									src={imgTitleWorld2}
									alt='LogoCoinbase'
									className='worldTitleIcon'
								/>
							</span>
						</div>

						<span className='worldTitle'>
							The Next Airbnb
							<Image
								src={imgTitleWorld3}
								alt='LogoAirbnb'
								className='worldTitleIcon'
							/>
						</span>
					</div>
				</div>

				<div className='worldSubtitle'>
					This isn’t a chance to follow. It’s a chance to lead. Get in before
					the next wave goes public.
				</div>
			</div>

			<ButtonPink text='Join FundFix Now' extraClass='worldBtn' />

			<div className='cubeMobilWorld'>
				<Image src={CubeWorld} alt='cube' />
			</div>
		</div>
	)
}
