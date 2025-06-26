import './Home.css'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Chang from '../../components/Chang/Chang'
import WHY from '../../components/WHY/WHY'
import HowItWorks from 'components/HowItWorks/HowItWorks'
import Deal from 'components/Deal/Deal'
import Elite from 'components/Elite/Elite'
import FIX from 'components/FIX/FIX'
import Presale from 'components/Presale/Presale'
import Tokenomics from 'components/Tokenomics/Tokenomics'
import Featured from 'components/Featured/Featured'
import Point from 'components/Point/Point'
import FAQ from 'components/FAQ/FAQ'
import World from 'components/World/World'
import Footer from 'components/Footer/Footer'

export default function Home() {
	return (
		<div className='home'>
			<Hero />
			<About />
			<Chang />
			{/* <WHY />
			<HowItWorks />
			<Deal /> */}
			<Elite />
			<FIX />
			<Presale />
			<Tokenomics />
			<Featured />
			<Point />
			<FAQ />
			<World />
			<Footer />
		</div>
	)
}
